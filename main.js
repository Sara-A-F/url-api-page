
const errorMSG = document.getElementById("error-msg");
const form = document.getElementById("shortenURL");



form.addEventListener('submit', event => {
    // prevent form submit if input not valid   
    event.preventDefault();

    // call function to validate input
    validateInput(); 
});

// input validation----------------------------------------------

function validateInput () {
    // to get the user input
    let inputField = document.getElementById("url").value.trim();

    if ( inputField !== "" ) {
        console.log("input field", inputField)
        // store the URL
        storeURL();
    } else {
        alert("Please write an URL")
    }   
         
};

// store url ----------------------------------------------------

let storedURL = [];

let url = "";

function storeURL () {
    // get the user input
    let inputField = document.getElementById("url").value.trim();
    // adds input fron user to the API´s url
    url = `https://api.shrtco.de/v2/shorten?url=${inputField}`;
    console.log("url: ", url);
    // adds url in storedURL array
    storedURL.push(url);
    // fetch from API
    getShortli();
    // clear form 
    resetForm();
};

// Reset form input----------------------------------------------

function resetForm() {
    // clear form
    form.reset();
};

// fetch from API------------------------------------------------

async function getShortli() {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => renderShortli(data))
        .catch((error) => console.log("error: ", error));
};

// send to HTLM---------------------------------------------------

function renderShortli(data) {
    let dataAPI = data;
    console.log("data API: ", dataAPI);
    // insert short Link in  HTML form (div id:api)
};

//