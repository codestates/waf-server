const { Item } = require("../../models");
module.exports = {
  post: {
    addItem: async (req, res) => {
      const { item, category, part, modifiedAt } = req.body;
      if (!item || !category || !part) {
        return res.status(422).send("Insufficient Item Information");
      }
      const expiredAfter = {
        meat: 5,
        seafood: 2,
        veges: 5,
        fruits: 7,
        eggs: 10,
        dairy: 7,
        mandu: 30,
      };
      console.log(
        `category: ${category}, expiredAfter: ${expiredAfter[category]}`
      );

      let newItem = {
        name: item,
        category: category,
        part: part,
        modifiedAt: modifiedAt,
        expiredAfter: expiredAfter[category],
        fk_userid: req.session.userid,
      };

      // 오늘 산 제품의 경우, modifiedAt === ""
      if (!modifiedAt) {
        await Item.create({
          name: item,
          category: category,
          part: part,
          modifiedAt: null,
          expiredAfter: expiredAfter[category],
          fk_userid: req.session.userid,
        });
        res.status(201).send("Today's Items Are Stored Successfully");
      } else {
        console.log("expiredAfter:", expiredAfter[category]);
        await Item.create(newItem);
        res.status(201).send("Items Are Stored Successfully");
      }
    },
  },
  put: {
    removeItem: async (req, res) => {
      await Item.destroy({
        where: {
          fk_userid: req.session.userid,
          name: req.body.item,
        },
      });
      res.status(205).send("Item Is Removed Successfully");
    },
  },
  get: {
    myFridge: async (req, res) => {
      const items = await Item.findAll({
        where: { fk_userid: req.params.userid },
      });
      res.status(200).json(items);
    },
  },
};
