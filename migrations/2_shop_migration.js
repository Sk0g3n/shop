const Shop = artifacts.require("Shop");
const Hack = artifacts.require("Hack");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(Shop).then(() => deployer.deploy(Hack, Shop.address));
}