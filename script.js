const showBtnEl = document.getElementById("showBtn");
const coverBody = document.querySelector("#cover");
const userInput  = document.querySelector('#userNameInput');
const avatarImgEl = document.querySelector("#avtarImg");
const nameEl = document.querySelector("#name");
const bioEl = document.querySelector("#bio");
const locationEl = document.querySelector("#location");
const followersEl = document.querySelector("#follower");
const followingEl = document.querySelector("#following");
const linkEl = document.querySelector("#link")



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
            console.log(data); 
            // infoAdding(data)
            const avtarUrl = data.avatar_url;
            const name = data.name;
            const location = data.location;
            const bio = data.bio;
            const followers = data.followers;
            const following = data.following;
            const url = data.url;

            avatarImgEl.setAttribute("src", `${avtarUrl}`);
            linkEl.setAttribute("href", `${url}`);
            linkEl.innerText = `URL : ${url}`;
            nameEl.innerText = `NAME : ${name}`;
            bioEl.innerText = ` BIO  : ${bio}`;
            locationEl.innerText = `LOCATION : ${location}`;
            followersEl.innerText = `FOLLOWER : ${followers}`;
            followingEl.innerText = `FOLLOWING : ${following}`;
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

// function infoAdding(info) {
//     const avtarUrl = info.avatar_url;
//     const name = info.name;
//     const location = info.location;
//     const bio = info.bio;
//     const followers = info.followers;
//     const following  = info.following ;

//     avatarImgEl.setAttribute("src", `${avtarUrl}`);
//     nameEl.innerHTML = `NAME : ${name}`;
//     bioEl.innerHTML = ` BIO  : ${bio}`;
//     locationEl.innerHTML = `LOCATION : ${location}`;
//     followersEl.innerHTML = `FOLLOWER : ${followers}`;
//     followingEl.innerHTML = `FOLLOWING : ${following}`;
// }
