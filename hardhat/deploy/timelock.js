const { ethers } = require("hardhat");
const { network } = require("../utils/config");
const { args } = require("../utils/timelock");

async function main() {
    [deployer] = await ethers.getSigners();
    deployer = deployer.address;

    const delay = args[0];
    const proposers = args[1];
    const executors = args[2];

    console.log(`Deployer: ${deployer}`)
    console.log(`Deploying on ${network}`);

    const timelockInstance = await ethers.getContractFactory("TaxTimelock");
    const timelockContract = await timelockInstance.deploy(delay, proposers, executors, deployer);

    console.log("Timelock contract address:", timelockContract.address);
    console.log(`\nnpx hardhat verify --network ${network.name} ${timelockContract.address} --constructor-args utils/timelock.js`);
}

main();