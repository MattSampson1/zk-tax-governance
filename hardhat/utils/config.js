const mainnet_addresses = {
    tax: "0x0",
    timelock: "0x0",
    governor: "0x0",
}

const goerli_addresses = {
    tax: "0xe3Dc0807f7932f288b4B0D576e8c99c8fa5081A7",
    timelock: "0x30caE0Fe4344f43b7f23b654411EBc9E3d6779cc",
    governor: "0x0",
}

const mumbai_addresses = {
    tax: "0x0",
    timelock: "0x0",
    governor: "0x0",
}

const local_addresses = {
    tax: "0x0",
    timelock: "0x0",
    governor: "0x0",
}

const addresses = {
    1337: local_addresses,
    1: mainnet_addresses,
    5: goerli_addresses,
    80001: mumbai_addresses,
}[process.env.CHAIN_ID]

const network = {
    1337: "local",
    1: "mainnet",
    5: "goerli",
    80001: "mumbai",
}[process.env.CHAIN_ID]

const roles = {
    PROPOSER_ROLE: "0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1",
    EXECUTOR_ROLE: "0xd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63",
    CANCELLER_ROLE: "0xfd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783",
}

module.exports = {
    network,
    addresses,
    roles,
}
