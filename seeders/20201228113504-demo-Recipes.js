"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", [
      {
        name: "김치찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/24/ec2baafd0e62536123503281f3309d361_m.jpg",
        url: "https://www.youtube.com/watch?v=DnQ09ZZCjCs",
        // createdAt: new Date(),
        // updatedAt: new Date(),
        // url: "https://www.10000recipe.com/recipe/6909693",
      },
      {
        name: "된장찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/06/a8010c740a2885fdedcb3c1d8e097b501_m.jpg",
        url: "https://www.youtube.com/watch?v=ffuakdFmuh4",
        // url: "https://www.10000recipe.com/recipe/6862254",
      },
      {
        name: "제육볶음",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/10/6bd4bd0551e089d3885c4828f5bc9e911_m.jpg",
        url: "https://www.youtube.com/watch?v=j7s9VRsrm9o",
        // url: "https://www.10000recipe.com/recipe/6910220",
      },
      {
        name: "떡볶이",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/09/27/6a4cdabf6312b6531202743aaa5a349d1_m.jpg",
        url: "https://www.youtube.com/watch?v=t4Es8mwdYlE",
        // url: "https://www.10000recipe.com/recipe/6943005",
      },
      {
        name: "파스타",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/08/13/69ba39408af9104a227fe0c986f4aed01_m.jpg",
        url: "https://www.youtube.com/watch?v=0bnFoRQebq0",
        // url: "https://www.10000recipe.com/recipe/6939081",
      },
      {
        name: "만두국",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2017/01/25/7f47e89bb8a4a4d5f9e8fa8e1d3842231_m.jpg",
        url: "https://www.youtube.com/watch?v=At-u3lwsFtk",
        // url: "https://www.10000recipe.com/recipe/6864373",
      },
      {
        name: "부대찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg",
        url: "https://www.youtube.com/watch?v=QdbKQxZrqFo",
        // url: "https://www.10000recipe.com/recipe/6884636",
      },
      {
        name: "순두부찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2016/01/28/3d80ea535856cd83b9261c564a05ac0a1_m.jpg",
        url: "https://www.youtube.com/watch?v=GP8_7D5eM6A",
        // url: "https://www.10000recipe.com/recipe/6842257",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  },
};
