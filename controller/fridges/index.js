const { Item } = require("../../models");
module.exports = {
  post: {
    addItem: (req, res) => {
      const { collection } = req.body;

      if (!collection.length) {
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

      collection.map((food) => {
        const { item, category, part, modifiedAt } = food;

        if (!modifiedAt) {
          Item.create({
            name: item,
            category,
            part,
            modifiedAt: null,
            expiredAfter: expiredAfter[category],
            fk_userid: req.session.userid,
          });
        } else {
          Item.create({
            name: item,
            category,
            part,
            modifiedAt,
            expiredAfter: expiredAfter[category],
            fk_userid: req.session.userid,
          });
        }
      });

      return res.status(201).send("Items Are Stored Successfully");
    },
  },
  put: {
    removeItem: (req, res) => {
      Item.destroy({
        where: {
          fk_userid: req.session.userid,
          name: req.body.item,
        },
      });
      res.status(205).send("Item Is Removed Successfully");
    },
  },
  get: {
    myFridge: (req, res) => {
      const items = Item.findAll({
        where: { fk_userid: req.params.userid },
      });
      res.status(200).json(items);
    },
  },
};
