import inquirer from "inquirer";

let Converters = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
}

const answer: { from: "PKR" | "GBP" | "USD" , to:  "PKR" | "GBP" | "USD", amount: number } = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        choices: ["PKR", "GBP", "USD"],
        message: "Select Your Currency: "
    },
    {
        type: 'list',
        name: 'to',
        choices: ["PKR", "GBP", "USD"],
        message: "Select Your Convert  Currency:"
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter Your convertion amount:'
    }
]);

const { from, to, amount } = answer;

if (from && to && amount) {

    Converters[from][to]

    


} else {
    console.log('Invalid Inputs');
}