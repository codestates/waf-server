const { Item } = require("../../models");

module.exports = {
  post: {
    addItem: async (req, res) => {
      const { item, category, part, modifiedAt } = req.body;

      console.log(req.body);

      if (!req.body.collection.length) {
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
      // const freshfor = expiredAfterChart[category];

      // 오늘 산 제품의 경우, modifiedAt === ""
      if (!modifiedAt) {
        await Item.create({
          name: item,
          category,
          part,
          modifiedAt: null,
          expiredAfter: expiredAfter[category],
          fk_userid: req.session.userid,
        });
        res.status(201).send("Today's Items Are Stored Successfully");
      } else {
        await Item.create({
          name: item,
          category,
          part,
          modifiedAt,
          expiredAfter: expiredAfter[category],
          fk_userid: req.session.userid,
        });
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
