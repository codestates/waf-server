module.exports = {
  post: {
    addItem: (req, res) => {
      res.send("my fridge add your item");
    },
  },
  put: {
    removeItem: (req, res) => {
      res.send("my fridge remove item");
    },
  },
  get: {
    myFridge: (req, res) => {
      res.send("my fridge main page");
    },
  },
};
