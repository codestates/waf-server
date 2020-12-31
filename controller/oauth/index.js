require("dotenv").config();

const axios = require("axios");
const { User } = require("../../models");

module.exports = {
  // 네이버
  post: async (req, res) => {
    if (req.body.authorizationCode.length === 18) {
      const clientID = process.env.NAVER_CLIENT_ID;
      const clientSecret = process.env.NAVER_CLIENT_SECRET;

      axios({
        method: "post",
        url: "https://nid.naver.com/oauth2.0/token",
        headers: {
          accept: "application/json",
        },
        params: {
          client_id: clientID,
          client_secret: clientSecret,
          grant_type: "authorization_code",
          code: req.body.authorizationCode,
          state: "waftest",
        },
      })
        .then((response) => {
          const accessToken = response.data.access_token;
          console.log("accessToken:", response.data.access_token);
          return accessToken;
        })
        .then((token) => {
          axios
            .get(`https://openapi.naver.com/v1/nid/me`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
              const { data } = response;

              User.findOrCreate({
                where: { email: data.response.email },
                defaults: {
                  email: data.response.email,
                  password: null,
                  username: data.response.name,
                  mobile: null,
                },
              }).then(async ([user, created]) => {
                if (!created) {
                  // 기존 Oauth 로 가입한 회원이 로그인하는 경우
                  req.session.userid = user.id;
                  return res.json({
                    userid: user.id,
                    username: user.username,
                    ourToken: "Naver",
                  });
                }
                res.status(201).send("Signup Succeeded");
              });
            })
            .catch((err) => {
              res.status(404);
            });
        });
    }

    // 구글
    else {
      const clientID = process.env.GOOGLE_CLIENT_ID;
      const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

      axios({
        method: "post",
        url: "https://accounts.google.com/o/oauth2/token",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          client_id: clientID,
          client_secret: clientSecret,
          code: req.body.authorizationCode,
          grant_type: "authorization_code",
          redirect_uri:
            "http://waf-client.s3-website.ap-northeast-2.amazonaws.com/users",
        },
      })
        .then((response) => {
          const accessToken = response.data.access_token;
          console.log("accessToken:", response.data.access_token);
          return accessToken;
        })
        .then((token) => {
          axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
              const { data } = response;

              User.findOrCreate({
                where: { email: data.email },
                defaults: {
                  email: data.email,
                  password: null,
                  username: data.name,
                  mobile: null,
                },
              }).then(async ([user, created]) => {
                if (!created) {
                  // 기존 Oauth 로 가입한 회원이 로그인하는 경우
                  req.session.userid = user.id;
                  return res.json({
                    userid: user.id,
                    username: user.username,
                    ourToken: "Google",
                  });
                }
                res.status(201).send("Signup Succeeded");
              });
            })
            .catch((err) => {
              res.status(404);
            });
        });
    }
  },
};
