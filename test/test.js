const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

const Shop = artifacts.require("Shop");
const Hack = artifacts.require("Hack");

contract("Shop", () => {

    let shop, hack;

    beforeEach( async () => {
        shop = await Shop.deployed();
        hack = await Hack.deployed();
      
    })

    xit("test dep", async () => {
        console.log(shop.address);
        console.log(hack.address);
    })

    it("hack through buy call", async () => {
        await hack.callBuy();
        assert.equal(await shop.price.call(), 0);
    })
})