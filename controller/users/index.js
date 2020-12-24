module.exports = {
  post: {
    signin: (req, res) => {
      res.send("sign in page");
    },
    signup: (req, res) => {
      res.send("sign up page");
    },
    signout: (req, res) => {
      res.send("sign out page");
    },
  },
};
