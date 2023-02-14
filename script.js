// selecting all the elements in the page
const userImg = document.getElementById("img");
const userName = document.querySelector("h2");
const additionaInfo = document.getElementById("additional-info");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const getUserBtn = document.getElementById("getUser");

const userInfo = async () => {
    // fetching response from api
    const response = await fetch("https://randomuser.me/api/");
    // change the response into json for further use
    const data = await response.json();
    // set user from json for further use
    const user = data.results[0];
    // setting image
    userImg.setAttribute("src", `${user.picture.large}`);
    // setting name
    userName.innerText = `${user.name["first"]} ${user.name["last"]}`;
    // set age in additional info
    age.addEventListener("click", ()=> {
        additionaInfo.innerText = user.dob.age;
    })
    // set email in additional info
    email.addEventListener("click", ()=> {
        additionaInfo.innerText = user.email;
    })
    // set phone in additional info
    phone.addEventListener("click", ()=> {
        additionaInfo.innerText = user.phone;
    })
}

// Initializing page
userInfo();

// change user when "GET ANOTHER USER" is clicked
getUserBtn.addEventListener("click", userInfo);