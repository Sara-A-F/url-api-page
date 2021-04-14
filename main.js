
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
        console.log("input field: ", inputField)
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
    // insert short Link in  HTML form pop up (div id:api)
    let newDiv = document.createElement('div');
    newDiv.className = 'container renderDiv';
    newDiv.innerHTML =`
    <div class="d-grid gap-4 d-md-flex justify-content-md-end">
    
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <p class="renderText">${dataAPI.result.original_link}</p>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <p class="origText">${dataAPI.result.full_short_link}</p>
            <button class="col-auto btnCopy cyan btn btn-primary">Copy</button>
        </div>
    </div>
    
    `; // 3 selections??

    let divAPI = document.getElementById("api");
    divAPI.appendChild(newDiv);
    console.log("new div: ", newDiv );

    // Add button copy inside newDid - style and Hover
    // 

};

