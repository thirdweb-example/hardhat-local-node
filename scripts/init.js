const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function init() {
  const address = "0x8afD95653d67614F780EE8D0225C83b6287BDb5c";

  await helpers.setBalance(address, 1000 * 1e18);
}

init()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
