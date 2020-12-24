require("dotenv").config();

const axios = require("axios");

module.exports = {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인
  // console.log("code:", req.body);
  // authorization code를 이용해 access token을 발급받기 위한 post 요청

  // 네이버
  post: (req, res) => {
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
          accessToken = response.data.access_token;
          console.log("accessToken:", response.data.access_token);
          res.status(200).json({ accessToken: accessToken });
        })
        .catch((e) => {
          res.status(404);
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
          redirect_uri: "http://localhost:3000",
        },
      })
        .then((response) => {
          accessToken = response.data.access_token;
          console.log("accessToken:", response.data.access_token);
          res.status(200).json({ accessToken: accessToken });
        })
        .catch((e) => {
          res.status(404);
        });
    }
  },
};
