document.addEventListener("deviceready", loadContacts, false);
 
 function loadContacts(){
    let options = new ContactFindOptions();
    options.filter = "M1IABD";
    options.multiple = true;

let fields =['*'];
    navigator.contacts.find(field, showContacts, onError, options);

 }

function showContacts(contacts){
    let contactsHTML = '';

    for (let i = 0; i < contacts.length; i++) {
    contactsHTML +='
            <li>
                <a href="#info">
                <img src="img/contact.png">
                <h1>${contact[i].name.formatted}</h1>
                <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
    ';
}

    
    contactList.innerHTML = contactsHTML;
    $(contactList).listview('refresh');

}

 
function onError(error){
    console.log(error);
}