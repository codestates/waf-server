const { Recipe } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
module.exports = {
  get: {
    getRecipes: async (req, res) => {
      // 클라이언트 레시피 검색 api 요청 불발 시, 우리 DB에서 검색 후 데이터 반환
      // const { item } = req.body;
      if (req.body.item) {
        await Recipe.findAll({
          where: {
            // name: { [Op.like]: `%${item}%` },
            name: { [Op.like]: `%` },
          },
        }).then((data) => {
          res.status(200).send({ recipes: data });
        });
      } else {
        res.status(404).send("Not Found");
      }
    },

    playRecipe: async (req, res) => {
      const { name } = req.body;

      if (name) {
        await Recipe.findOne({
          where: {
            name: name,
          },
        }).then((data) => {
          if (data) {
            res.status(200).send({ youtubeUrl: data.url });
          }
        });
      } else {
        res.status(404).send("Not Found");
      }
    },
  },
};
