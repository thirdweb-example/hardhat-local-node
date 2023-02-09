# Deploying contracts to local blockchains using thirdweb

This repository is associated to a guide on thirdweb blog that explains [how to deploy contracts to local blockchains using thirdweb](https://blog.thirdweb.com/how-to-deploy-contracts-to-local-blockchain-using-thirdweb).

The code in this repository can be used to quickly spin up a local blockchain with chain ID `1337` (localhost). To start the blockchain, run the following command while in the project folder:

```shell
npx hardhat node --network hardhat
```

## Updating wallet balances

Navigate to `scripts/init.js`. Update the `address` variable to the wallet address you want to update the balance. Then, run the following command:

```shell
npx hardhat run scripts/init.js
```

This should updated the provided wallet with balance of 1000 ETH.

## Conclusion

Make sure you read [the guide](https://blog.thirdweb.com/how-to-deploy-contracts-to-local-blockchain-using-thirdweb) if you want to follow along the entire tutorial.

If you have any questions, feel free to join the [thirdweb Discord server](https://discord.gg/thirdweb) and talk directly to the team!
