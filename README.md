A staking and voting platform that implements anonymous voting through zk proofs

1. Tax Token
2. Governance with Tax 
3. Anonymous voting
4. Quadratic voting


Contracts Deployment
```cd hardhat && yarn```

Run a node or fork
```npx hardhat node```

```npx hardhat run deploy/tax.js --network local```
> insert the address in utils/config.js

```npx hardhat run deploy/timelock.js --network local```
> insert the address in utils/config.js

```npx hardhat run deploy/governor.js --network local```
> insert the address in utils/config.js


To deploy to Goerli or Mainnet, do not run a fork and change --network to goerli