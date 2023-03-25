const { ethers } = require("hardhat")
const { network } = require("../utils/config")

async function main() {
    ;[deployer] = await ethers.getSigners()
    deployer = process.env.ADDRESS

    console.log(`Deployer: ${deployer}`)
    console.log(`Deploying on ${network}`)

    // const gasPrice = ethers.utils.parseUnits("5", "gwei")
    // const gasLimit = 20000000

    const taxTokenInstance = await ethers.getContractFactory("TAX")
    const taxTokenContract = await taxTokenInstance.deploy(/*{ gasPrice, gasLimit }*/)

    console.log("TAX contract address:", taxTokenContract.address)
    console.log(`\nnpx hardhat verify --network ${network} ${taxTokenContract.address}`)
}

main()
