// index.js
const argv = require("yargs").argv;
const contactsService = require("./contacts.js");

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contactsService.getContactById(id);
      console.log(contact);
      break;

    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id  
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);