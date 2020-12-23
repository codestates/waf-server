module.exports = {
  get: {
    getRecipes: (req, res) => {
      // 클라이언트 레시피 검색 api 요청 불발 시, 우리 DB에서 검색 후 데이터 반환
      res.send("get recipe page");
    },
    playRecipe: (req, res) => {
      res.send("play recipe page");
    },
  },
};
