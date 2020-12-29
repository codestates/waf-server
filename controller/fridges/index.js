const { Item } = require("../../models");

module.exports = {
  post: {
    addItem: async (req, res) => {
      // 오늘 산 제품의 경우 createdAt 정보를 넘길 필요 없음
      const { item, category, part, modifiedAt } = req.body;

      if (!item || !category || !part) {
        return res.status(422).send("Insufficient Item Information");
      }

      // 오늘 산 제품의 경우, modifiedAt
      if (!modifiedAt) {
        await Item.create({ name: item, category, part, modifiedAt: null });
        res.status(201).send("Today's Items Are Stored Successfully");
      } else {
        await Item.create({ name: item, category, part, modifiedAt });
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
