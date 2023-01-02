// add the game address here and update the contract name if necessary
const gameAddr = "0x59b670e9fA9D0A427751Af201D676719a970857b";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const txAllowance = await game.giveMeAllowance(20000);
    await txAllowance.wait();

    const txMint = await game.mint(15000);
    await txMint.wait();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const tx = await game.win();
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
