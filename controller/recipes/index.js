const { Recipe } = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
module.exports = {
  get: {
    getRecipes: async (req, res) => {
      // 클라이언트 레시피 검색 api 요청 불발 시, 레시피 목록 반환

      await Recipe.findAll({
        where: {
          name: { [Op.like]: `%` },
        },
      }).then((data) => {
        res.status(200).send({ recipes: data });
      });
    },

    playRecipe: async (req, res) => {
      // 선택한 레시피 요청 시, 검색 후 영상 주소 반환
      const { name } = req.body;

      if (!name) {
        res.status(404).send("Not Found");
      } else {
        await Recipe.findOne({
          where: {
            name: name,
          },
        }).then((data) => {
          res.status(200).send({
            youtubeUrl: `https://www.youtube.com/watch?v=${data.videoId}`,
          });
        });
      }
    },
  },
};
