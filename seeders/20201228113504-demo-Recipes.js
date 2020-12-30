"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Recipes", [
      {
        name: "김치찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/24/ec2baafd0e62536123503281f3309d361_m.jpg",
        title: "초간단 김치찌개 ㅣ 백종원의 백종원 레시피",
        videoId: "DnQ09ZZCjCs",
        // url: "https://www.10000recipe.com/recipe/6909693",
      },
      {
        name: "된장찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/06/a8010c740a2885fdedcb3c1d8e097b501_m.jpg",
        title: "된장찌개 '1' (제일 쉬운 버전)",
        videoId: "ffuakdFmuh4",
        // url: "https://www.10000recipe.com/recipe/6862254",
      },
      {
        name: "제육볶음",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/10/6bd4bd0551e089d3885c4828f5bc9e911_m.jpg",
        title: "대파 듬뿍! 삼겹살로 만든 '대파 제육볶음'",
        videoId: "j7s9VRsrm9o",
        // url: "https://www.10000recipe.com/recipe/6910220",
      },
      {
        name: "떡볶이",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/09/27/6a4cdabf6312b6531202743aaa5a349d1_m.jpg",
        title: "분식집st 떡 볶 이🎉",
        videoId: "t4Es8mwdYlE",
        // url: "https://www.10000recipe.com/recipe/6943005",
      },
      {
        name: "파스타",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2020/08/13/69ba39408af9104a227fe0c986f4aed01_m.jpg",
        title: "집에서 '크림 파스타'쯤이야",
        videoId: "0bnFoRQebq0",
        // url: "https://www.10000recipe.com/recipe/6939081",
      },
      {
        name: "만두국",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2017/01/25/7f47e89bb8a4a4d5f9e8fa8e1d3842231_m.jpg",
        title: "올 한해도 떡만둣국 드시고 대박 나세요!! ㅣ 백종원의 쿠킹로그",
        videoId: "At-u3lwsFtk",
        // url: "https://www.10000recipe.com/recipe/6864373",
      },
      {
        name: "부대찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg",
        title:
          "풍부한 맛의 절정! 수미네 '부대찌개' 깨알 재료들은? 수미네 반찬 29화",
        videoId: "QdbKQxZrqFo",
        // url: "https://www.10000recipe.com/recipe/6884636",
      },
      {
        name: "순두부찌개",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2016/01/28/3d80ea535856cd83b9261c564a05ac0a1_m.jpg",
        title:
          "고추기름이 포인트! '순두부찌개'로 오늘 저녁 어떠세요?! ㅣ 백종원의 백종원 레시피",
        videoId: "GP8_7D5eM6A",
        // url: "https://www.10000recipe.com/recipe/6842257",
      },
      {
        name: "닭갈비",
        thumbnail:
          "https://recipe1.ezmember.co.kr/cache/recipe/2019/10/30/33398b219faa7448ed4130b8b70e18c01_m.jpg",
        title:
          "초:초:초간단 만능양념장으로 만드는 춘천식 닭갈비! 1:1:1:1:1:1 ㅣ 백종원의 쿠킹로그",
        videoId: "HI8DlDs1gko",
        // url: "https://www.10000recipe.com/recipe/6921415",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  },
};
