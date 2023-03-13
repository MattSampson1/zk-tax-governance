const { ethers } = require("hardhat");
const { network } = require("../utils/config");

async function main() {
    [deployer] = await ethers.getSigners();
    deployer = process.env.ADDRESS;

    console.log(`Deployer: ${deployer}`)
    console.log(`Deploying on ${network}`);

    const taxTokenInstance = await ethers.getContractFactory("TAX");
    const taxTokenContract = await taxTokenInstance.deploy();

    console.log("TAX contract address:", taxTokenContract.address);
    console.log(`\nnpx hardhat verify --network ${network} ${taxTokenContract.address}`);
}

main();
