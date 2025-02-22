import { markupContact } from "./markup";
import { addContactService } from "./api";
const contactForm = document.querySelector(".contact-form");
const contactList = document.querySelector(".contacts-list");
const logOutBtn = document.querySelector(".log-out-btn");

contactForm.addEventListener("submit", addContact);
async function addContact(event){
    event.preventDefault();
    const {name, number} = event.currentTarget.elements;
    const contact = {
        name: name.value,
        number: number.value
    }
    const response = await addContactService(contact);
contactList.insertAdjacentHTML('beforeend', markupContact(response));
}
// contactList.addEventListener("click", deleteContact);
// function deleteContact(event){

// }