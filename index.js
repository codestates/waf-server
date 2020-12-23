const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();

// 환경변수를 통해 production 포트로 변경
const port = 4000;

const usersRouter = require("./routes/user");
const fridgesRouter = require("./routes/fridge");
const recipesRouter = require("./routes/recipe");

app.use(express.json()); // built-in bodyparser needed to read req.body.

// 환경변수를 통해 cors production origin 으로 변경
app.use(
  cors({
    origin: "http://localhost:3000",
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

// 배포 테스트용
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.use("/users", usersRouter);
app.use("/myfridge", fridgesRouter);
// app.use("/recipes", recipesRouter);

// 반드시 깃헙 API 문서 업데이트 할 것

/*
// 냉장고 라우트
app.get("/myfidge/:userid", mainController.myFridge);
app.put("/myfidge/removeitem", mainController.removeItem);
app.post("/myfirdge/cart", mainController.cart);

// 레시피 라우트
app.get("/recipes", mainController.recipe);
app.get("/recipes/player", mainController.recipePlayer);
*/

app.listen(port, () => {
  console.log("server on " + port);
});
