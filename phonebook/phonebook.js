/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const Contact = require("./models/Contact")
let contacts = [
	new Contact('Peter', '+359882-732-977'),
	new Contact('John', '+359882-888-667'),
	new Contact('Mary', '+359882-732-123')
]

function getContacts(){
	return contacts
}

function addContact(name, phone){
	let contact = new Contact(name,phone)
	contacts.push(contact)

}

module.exports = {
	getContacts,
	addContact
}