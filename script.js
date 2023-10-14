const showBtnEl = document.getElementById("showBtn");
const coverBody = document.querySelector("#cover");
const userInput  = document.querySelector('#userNameInput');
const avatarImgEl = document.querySelector("#avtarImg");




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
            const avtarUrl = data.avatar_url;
            avatarImgEl.setAttribute("src", `${avtarUrl}`);
        }
    }
    // avatarImgEl.setAttribute("src", `${data.avatar_url}`);   
    xhr.send();
        
    
}
function checking(subject) {
    if(subject.message === "Not Found"){
        alert("enter valid name")
    }else{
        coverBody.style.zIndex = "-1"
    }
}

