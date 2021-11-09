const Airdropper = artifacts.require("Airdropper");

module.exports = async function (deployer) {
  await deployer.deploy(Airdropper, "0xC30a7F9c216B945Ff8ACFB389e955A637eB0f478");
  deployedAD = await Airdropper.deployed()
};
