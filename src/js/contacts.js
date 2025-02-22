const contactForm = document.querySelector(".contact-form");
const contactList = document.querySelector(".contact-list");
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
}