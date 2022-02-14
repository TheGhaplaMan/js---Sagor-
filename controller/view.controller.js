const Venue = require("../model/venue.model");

exports.homePage = (req, res) => {
    res.render('index');
}

exports.newShop = (req, res) => {
    res.render('newShop');
}

exports.shopList = async (req, res) => {
    const allShops = await Venue.find();
    res.render('shopList', {
        shops : allShops
    });
}