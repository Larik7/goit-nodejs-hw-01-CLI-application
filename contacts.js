const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async ()=> {
    const allContacts = await fs.readFile(contactsPath);
    return JSON.parse(allContacts);
}
  
const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
}
  
function removeContact(contactId) {
    // ...твій код
}
  
function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
};