const Venue = require("../model/venue.model");

exports.homePage = (req, res) => {
  res.render("index");
};

exports.newShop = (req, res) => {
  res.render("newShop");
};

exports.updateShop = async (req, res) => {
  const id = req.params.id;
  const shopInfo = await Venue.findOne({ shopId: id });
  res.render("updateShop", { info: shopInfo });
};

exports.shopList = async (req, res) => {
  const allShops = await Venue.find();
  res.render("shopList", {
    shops: allShops,
  });
};
