var emailInput = document.getElementById('email');
var passInput = document.getElementById('pass');
var nameInput = document.getElementById('name');
var infoContainer ;
var removeClass = document.getElementById('required');

if (localStorage.getItem('userInformation') === null) {
    infoContainer =[];
    
}else{
    infoContainer=JSON.parse(localStorage.getItem('userInformation')) ;
}

var information ={
    email : emailInput.value,
    password : passInput.value,
}

function login(){
    if (emailInput.value === "" || passInput.value === "") {
        document.getElementById('required').innerHTML = '<span class="text-danger ">All inputs are required</span>';
    } else {
        for (let i = 0; i < infoContainer.length; i++) {
            if (infoContainer[i].email === emailInput.value && infoContainer[i].password === passInput.value) {
                document.getElementById('required').innerHTML = '<span class="text-success ">Success</span>';
                window.location.href = "home.html";
                break;
            }else{
                document.getElementById('required').innerHTML = '<span class="text-danger ">Incorrect email or password</span>';
            }
            
        }
    }
}


function logout(){
    window.location.href ="index.html"
}

function clearForm() {
    
    emailInput.value = null;
    passInput.value = null;

}

///////////////////signup/////////////////
function validation(element){
    var regix ={
        email : /[^@\s]+@[^@\s]+\.[^@\s]+/,
        pass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }
    if (regix[element.id].test(element.value) === true){
        element.classList.add( "is-valid");
        element.classList.remove( "is-invalid");
    }else{
        element.classList.add( "is-invalid");
        element.classList.remove( "is-valid");

    }

}

function signUp() {
    information ={
        code : nameInput.value,
        email : emailInput.value,
        password : passInput.value,
    

    }
    if(emailInput.value === ""  || passInput.value === "" || nameInput.value === ""){
        document.getElementById('required').innerHTML = '<span class="text-danger ">All inputs is required</span>';
    
    }else{

        infoContainer.push(information);
        localStorage.setItem('userInformation' , JSON.stringify(infoContainer));
        document.getElementById('required').innerHTML = '<span class="text-success ">Success</span>';
        Exit();
        clearFormSign();
    }
   
}


function Exit() {
    var emailExists = false;
    for (var i = 0; i < infoContainer.length; i++) {
        if (infoContainer[i].email == emailInput.value) {
            emailExists = true;
            break; 
        }
    }

    if (emailExists) {
        document.getElementById('required').innerHTML = '<span class="text-success">sucess</span>';
        
    } else {
        document.getElementById('required').innerHTML = '<span class="text-danger">Email already exists</span>';
    }
}


function clearFormSign() {
    nameInput.value = null;
    emailInput.value = null;
    passInput.value = null;

}

