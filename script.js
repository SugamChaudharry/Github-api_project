const showBtnEl = document.getElementById("showBtn");
const coverBody = document.querySelector("#cover");
const userInput  = document.querySelector('#userNameInput');

showBtnEl.addEventListener('click',()=>{
    const user = userInput.value;
    apirequest(user)
})

function apirequest(user) {
    const xhr = new XMLHttpRequest();
    let requestUrl = `https://api.github.com/users/${user}`
    console.log(requestUrl);

    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function DATAsss() {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            checking(data)    
            }
        }
    xhr.send();
        
    
}
function checking(subject) {
    if(subject.message === "Not Found"){
        alert("enter valid name")
    }else{
        console.log("👍👍👍👍")
    }
}
