const { ethers } = require("hardhat");
const { addresses, roles, network } = require("../utils/config");

async function main() {
    const taxAddress = addresses.tax;
    const timelockAddress = addresses.timelock;
    const delay = 50400; // 1 week

    [deployer] = await ethers.getSigners();
    deployer = deployer.address;

    console.log(`Deployer: ${deployer}`)
    console.log(`Deploying on ${network}`);

    const governorInstance = await ethers.getContractFactory("TaxGovernor");
    const governorContract = await governorInstance.deploy(taxAddress, timelockAddress, delay);

    console.log("Governor contract address:", governorContract.address);
    console.log(`\nnpx hardhat verify --network ${network} ${governorContract.address} ${taxAddress} ${timelockAddress} ${delay}`);

    // grant roles
    const timelock = await ethers.getContractAt("TaxTimelock", timelockAddress);
    await timelock.grantRole(roles.PROPOSER_ROLE, governorContract.address);
    await timelock.grantRole(roles.EXECUTOR_ROLE, governorContract.address);
    await timelock.grantRole(roles.CANCELLER_ROLE, deployer);
}

main();
