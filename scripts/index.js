const { web3, artifacts } = require("hardhat");
const Shop = artifacts.require("Shop");
const Hack = artifacts.require("Hack");
const shadd = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const haadd = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

async function main() {
    const accounts = await web3.eth.getAccounts();
    const shop = await new web3.eth.Contract(Shop.abi, shadd);
    const hack = await new web3.eth.Contract(Hack.abi, haadd);

    await hack.methods.callBuy().send({from:accounts[0], gas:100000 });
    console.log(await shop.methods.price().call());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });