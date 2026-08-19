import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";


const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
    try {
        const data = await readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};


const addToCart = async (item) => {
    const products = await getCart();

    products.push(item);

    await saveCart(products);
};


const showCart = async () => {
    const products = await getCart();

    if (products.length === 0) {
        console.log("Cart is empty 🛒");
        return;
    }

    console.log("\n----- Your Cart -----");

    products.forEach((product) => {
        console.log(
            `ID: ${product.id} | Name: ${product.name} | Price: ₹${product.price} | Quantity: ${product.qty}`
        );
    });
};


const updateCart = async (id, newQty) => {
    const products = await getCart();

    const product = products.find((item) => item.id === id);

    if (!product) {
        console.log("Product not found ❌");
        return;
    }

    product.qty = newQty;

    await saveCart(products);

    console.log("Quantity updated successfully ✅");
};


const deleteCart = async (id) => {
    const products = await getCart();

    const newProducts = products.filter((item) => item.id !== id);

    if (products.length === newProducts.length) {
        console.log("Product not found ❌");
        return;
    }

    await saveCart(newProducts);

    console.log("Product removed successfully 🗑️");
};


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

        switch (Number(choice)) {

            
            case 1:
                let data =await cin.question("enter id,name,price,qty:");
                let p = data.split(",");
                let q =p.map((item) => item.trim());
                let [id,name,price,qty] = q;
                console.log(id, name, price, qty);
                const product = {
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                };
                console.log(product);
                
                break;

            
            case 2:
                await showCart();
                break;

        
            case 3:
                const deleteId = await cin.question(
                    "Enter product ID to remove: "
                );

                await deleteCart(Number(deleteId));
                break;

            
            case 4:
                const updateId = await cin.question(
                    "Enter product ID: "
                );

                const newQty = await cin.question(
                    "Enter new quantity: "
                );

                await updateCart(
                    Number(updateId),
                    Number(newQty)
                );

                break;

            
            case 5:
                console.log("See you later... 😆");
                cin.close();
                return;

            default:
                console.log("Invalid choice! Try again 😶‍🌫️");
        }

    } while (choice !== "5");
};

main();