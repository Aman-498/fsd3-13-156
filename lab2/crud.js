import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {
        console.log("\nWelcome to shopping cart 🛒");
        console.log("1 -------- Add to cart");
        console.log("2 -------- Show cart");
        console.log("3 -------- Remove items");
        console.log("4 -------- Update quantity");
        console.log("5 -------- Checkout");
        

        choice = await cin.question("Enter your choice: ");

        switch(Number (choice)) {
            case 1:
                console.log("Add to cart");
                break;

            case 2:
                console.log("Show cart");
                break;

            case 3:
                console.log("Remove items");
                break;

            case 4:
                console.log("Update quantity");
                break;

            case 5:
                console.log("Checkout");
                process.exit();
                break;

            default:
                console.log("Invalid choice! try again 😶‍🌫️");
        }

    } while (choice != "5");

    cin.close();
};

main();