const { User } = require("../../models");

module.exports = {
  post: {
    signin: (req, res) => {
      const { email, password } = req.body;

      // 데이터베이스에서 이메일 검색 후, 일치하는 정보가 있으면 세션 부여
      req.session.regenerate(() => {
        User.findOne({
          where: { email, password },
        })
          .then((data) => {
            if (!data) {
              return res.status(401).send("Invalid User");
            }
            req.session.userid = data.id;
            res.status(201).send({ userid: data.id, username: data.username });
          })
          .catch((err) => {
            res.status(404).send(err);
          });
      });
    },
    signup: (req, res) => {
      const { email, password, username, mobile } = req.body;

      // 데이터베이스에 정보 저장
      if (!email || !password || !username || !mobile) {
        return res.status(422).send("Insufficient User Information");
      }

      User.findOrCreate({
        where: { email },
        defaults: { email, password, username, mobile },
      }).then(async ([user, created]) => {
        if (!created) {
          return res.status(409).send("Email Exists");
        }
        res.status(201).send("Signup Succeeded");
      });
    },
    signout: (req, res) => {
      req.session.destroy(() => {
        res.status(205).send("Logged Out Successfully");
      });
    },
  },

  // 데이터에서 세션 검색 후 유저데이터 반환해주는 함수
  // get: {
  //   userinfo: (req, res) => {
  //     const { userid } = req.session;

  //     if (userid) {
  //       user
  //         .findOne({
  //           where: { id: userid },
  //         })
  //         .then((data) => {
  //           if (data) {
  //             return res.status(200).json(data);
  //           }

  //           // 세션이 있는데 유저 정보가 없는 경우
  //           res.sendStatus(204);
  //         })
  //         .catch((err) => {
  //           res.sendStatus(404).send(err);
  //         });
  //     } else {
  //       res.status(401).send("Session Not Found");
  //     }
  //   },
  // },
};
