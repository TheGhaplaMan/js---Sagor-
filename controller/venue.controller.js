const Venue = require("../model/venue.model");
const { nanoid } = require("nanoid");

exports.createShop = async (req, res, next) => {
  req.body.shopContact = req.body.shopContact; //To solve 0 issue in contact num
  req.body.shopId = "Gig-" + nanoid();
  const newShop = await Venue.create(req.body);
  res.status(201).json(newShop);
};

exports.getAllShop = async (req, res, next) => {
  const getShopInfo = await Venue.find();
  res.status(200).json(getShopInfo);
};

// exports.getOneShop = async (req,res, next) => {
//     const getOneShop = await Venue.findById(req.params.id);
//     res.status(200).json(getOneShop);
// }

exports.getOneShop = async (req, res, next) => {
  const getOneShop = await Venue.find({ shopOwner: req.params.shopId });
  res.status(200).json(getOneShop);
};
exports.updateShopInfo = async (req, res, next) => {
  console.log("aisi", req.body);
  const updateShop = await Venue.findOneAndUpdate(
    { shopId: req.params.shopId },
    req.body
  );
  res.status(200).json(updateShop);
};

exports.dltShop = async (req, res, next) => {
  const dltShop = await Venue.findByIdAndDelete(req.params.id);
  res.status(200).json(dltShop);
};
