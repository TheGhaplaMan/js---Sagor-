const Venue = require("../model/venue.model");

exports.createShop = async (req, res, next) => {
  const newShop = await Venue.create(req.body);
  res.status(201).json(newShop);
};

exports.getAllShop = async (req, res, next) => {
    const getShopInfo = await Venue.find();
    res.status(200).json(getShopInfo);
}

exports.getOneShop = async (req,res, next) => {
    const getOneShop = await Venue.findById(req.params.id);
    res.status(200).json(getOneShop);
}

exports.updateShopInfo = async (req, res, next) => {
    const updateShop = await Venue.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updateShop);
}

exports.dltShop = async (req, res, next) => {
    const dltShop = await Venue.findByIdAndDelete(req.params.id);
    res.status(200).json(dltShop);
}