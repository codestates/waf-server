const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();

// 환경변수를 통해 production 포트로 변경
const port = 4000;

const usersRouter = require("./routes/user");
const fridgesRouter = require("./routes/fridge");
const recipesRouter = require("./routes/recipe");
const oauthRouter = require("./routes/oauth");

app.use(express.json());

// 환경변수를 통해 cors production origin 으로 변경
app.use(
  cors({
    origin: "http://waf-client.s3-website.ap-northeast-2.amazonaws.com",
    methods: "GET,PUT,POST",
    credentials: true,
  })
);
app.use(
  session({
    secret: "gowaf",
    resave: false,
    saveUninitialized: true,
  })
);

// routes
app.use("/users", usersRouter);
app.use("/myfridge", fridgesRouter);
app.use("/recipes", recipesRouter);
app.use("/callback", oauthRouter);

// 배포 테스트용
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// 데이터베이스 테스트용
const { User } = require("./models");
app.get("/test/:userid", (req, res) => {
  User.findOne({
    where: {
      id: req.params.userid,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("server on " + port);
});
