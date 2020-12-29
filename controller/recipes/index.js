const { Recipe } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
module.exports = {
  get: {
    getRecipes: async (req, res) => {
      // 클라이언트 레시피 검색 api 요청 불발 시, 우리 DB에서 검색 후 데이터 반환

      const { item } = req.body;
      if (item) {
        Recipe.findAll({
          where: {
            name: { [Op.like]: `%${item}%` },
          },
        })
          .then((data) => {
            if (data) {
              res.status(200).send({
                recipes: data,
                // name: data.name,
                // thumbnail: data.thumbnail,
                // url: data.url,
              });
            }
          })
          .catch((err) => {
            res.sendStatus(404).send(err);
          });
      } else {
        res.status(401).send("Recipe Not Found");
      }
    },
    playRecipe: (req, res) => {
      const { url } = req.body;

      if (url) {
        Recipe.findOne({
          where: { url: url },
        })
          .then((data) => {
            if (data) {
              res.status(200).send({ recipeUrl: url });
            }
          })
          .catch((err) => {
            res.sendStatus(404).send(err);
          });
      } else {
        res.status(401).send("Recipe Not Found");
      }
    },
  },
};
