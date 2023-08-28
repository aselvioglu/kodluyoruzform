let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);
const alertDOM=document.querySelector("#alert");

function formSubmit(event) {
    event.preventDefault();
    console.log("islem gerçekleştirildi");
    let scoreDOM = document.querySelector("#score");
    let userNameDOM = document.querySelector("#userName");
    console.log(userName.value);
    console.log(scoreDOM.value);
    localStorage.setItem("userName", userNameDOM.value);
    localStorage.setItem("score", scoreDOM.value);
    if (userNameDOM.value, scoreDOM.value) {

        addItem(userNameDOM.value, scoreDOM.value);
        userNameDOM.value="";
        scoreDOM.value="";

    }
    else {

        alertDOM.innerHTML="hatalı bilgi girdiniz"
    }

}

let userListDOM = document.querySelector("#userList");


const addItem = (userName, score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${userName} ${score}`;
    userListDOM.appendChild(liDOM)

}