// set contact


const btnSubmit = document.getElementById('btnSubmit');
const displayNoti = document.getElementById('displayNoti');

function addContact(){

   let cName = document.getElementById('cName').value.toUpperCase();
   let cNumber = document.getElementById('cNumber').value;
   if (cName === "" || cNumber === ""){

    displayNoti.innerHTML = 'Please enter details'
    displayNoti.style.color = 'red'
   }
   else{
    // set items.+
    

    localStorage.setItem(cName, cNumber);
    displayNoti.innerHTML = 'Successfully Added New Contact'
    displayNoti.style.color = 'green'
   }

   setInterval(() => {
    displayNoti.innerHTML = ""
   }, 2000);
}


//get contact

const displayContact = document.getElementById('displayContact');

const getbtn = document.getElementById('getbtn');

function getContact(){
let  getcName = document.getElementById('getcName').value.toUpperCase();

//get item
let output = localStorage.getItem(getcName)
displayContact.innerHTML = `${getcName} : ${output === null ? '(   this contact detail is not added' : `+91 ${output}`}`;
getcName = ''

}

function reset(){
    location.reload();
}