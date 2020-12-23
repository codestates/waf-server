module.exports = {
  myfridge: (req, res) => {
    console.log("my fridge main page");
    // res.send("my fridge main page");
  },
  additem: (req, res) => {
    res.send("my fridge add your item");
  },
  removeitem: (req, res) => {
    res.send("my fridge remove item");
  },
};
