#! /usr/bin/env node
import inquirer from "inquirer";
let user_message = await inquirer.prompt([
    {
        name: 'user_text',
        message: "Enter message here : ",
        type: 'editor',
    }
]);
let message = user_message.user_text;
console.log(message);
let character_counter = 0;
for (let i = 0; i <= message.length; i++) {
    if (message[i] == " ") {
        i++;
    }
    else {
        character_counter += 1;
    }
}
console.log("total character in this text is ", character_counter);
