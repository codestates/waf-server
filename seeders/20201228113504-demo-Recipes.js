"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", [
      {
        name: "돼지고기김치찌개_1",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/24/ec2baafd0e62536123503281f3309d361_m.jpg",
        url: "https://www.10000recipe.com/recipe/6909693",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "돼지고기김치찌개_2",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/11/22/3e6950bb32149938d1e8ade14d79df8a1_m.jpg",
        url: "https://www.10000recipe.com/recipe/6946815",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "돼지고기김치찌개_3",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2018/03/26/2534479bee6df21a0504761742af7a6d1_m.jpg",
        url: "https://www.10000recipe.com/recipe/6886109",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "돼지고기김치찌개_4",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/06/6e97cb3bffc2f940ec268bab238dcbc71_m.jpg",
        url: "https://www.10000recipe.com/recipe/6903640",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "돼지고기김치찌개_5",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/03/01/e22321e02c9b0397908b321ed35ce7ac1_m.jpg",
        url: "https://www.10000recipe.com/recipe/6927489",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "돼지고기김치찌개_6",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2017/12/19/2df7ca873ac2d49060f1b67888e8bc551_m.jpg",
        url: "https://www.10000recipe.com/recipe/6881140",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  },
};
