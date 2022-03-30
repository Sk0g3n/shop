const Shop = artifacts.require("Shop");
const Hack = artifacts.require("Hack");

module.exports = async (deployer, network, accounts) => {
    const shop = await Shop.new();
    Shop.setAsDeployed(shop);
    const hack = await Hack.new(shop.address);
    Hack.setAsDeployed(hack);
}

