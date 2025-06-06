const searchicon1 = document.querySelector("#searchicon1");
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');
const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
const crosssignmb = document.querySelector('#x-sign-mb');
const sign = document.querySelector('.sign');
const signbox = document.querySelector('.sign-box');
const tosignin = document.querySelector('#to-signin');
const tosignup = document.querySelector('#to-signup');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const signlogo = document.querySelector('#user-lap');
const signlogomb = document.querySelector('#user-mb');


// When search icon (tablet/mobile) in hidden header bar clicked it will show the search bar.
searchicon1.addEventListener("click", function() {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

// When search icon (laptop) in header clicked it will show the search bar.
searchicon2.addEventListener("click", function() {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});


// when bar icon (tablet/mobile) clicked it will display the hidden header bar.
bar.addEventListener('click', () => {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

// when cross icon (tablet/mobile) clicked it will hide the showing header bar.
cross.addEventListener('click', () => {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

//when click on Id=x-sign it will hide the sign up form
function removeSignform() {
    signbox.style.transform = 'scale(0)';
    setTimeout(() => {
        sign.style.display = 'none';
    }, 400);
}
crosssignmb.addEventListener('click', removeSignform)

// when click on user icon in header it will show the sign up form
signlogo.addEventListener('click', () => {
    sign.style.display = 'flex';
    setTimeout(() => {
        signbox.style.transform = 'scale(1)';
    }, 100);
})
signlogomb.addEventListener('click', () => {
    sign.style.display = 'flex';
    setTimeout(() => {
        signbox.style.transform = 'scale(1)';
    }, 100);
})

//This is to toggle between sign in/sign up forms
tosignin.addEventListener('click', () => {
    signup.style.display = 'none';
    signin.style.display = 'block';
});
tosignup.addEventListener('click', () => {
    signup.style.display = 'block';
    signin.style.display = 'none';
});
const firebaseConfig = {
    apiKey: "AIzaSyD9SWGwJbotzNQLZZxL9wMxKqxuSECBJfo",
    authDomain: "contactform-a5052.firebaseapp.com",
    databaseURL: "https://contactform-a5052-default-rtdb.firebaseio.com",
    projectId: "contactform-a5052",
    storageBucket: "contactform-a5052.appspot.com",
    messagingSenderId: "47690144032",
    appId: "1:47690144032:web:72aee5bf31ba76eb3d1f45"
  };
firebase.initializeApp(firebaseConfig);
  //reference your database
 var contactformDB = firebase.database().ref('contactform');
 document.getElementById('contactform').addEventListener('submit',submitForm);
 
function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var password = getElementVal('pwd');
    var copassword = getElementVal('copwd');
    saveMessages(name, emailid, password, copassword);
    document.querySelector('.alert').style.display="block";
    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    }, 3000);
    document.getElementById("contactform").reset();
}
const saveMessages = (name, emailid, password, copassword) => {
    var newcontactform = contactformDB.push();
    newcontactform.set({
        name : name,
        emailid : emailid,
        password : password,
        copassword : copassword,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
    
};