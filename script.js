const USERID = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const notify = document.querySelector(".notifyinput");

userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled")
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList.add("abled")
    }
})

function addPost() {
    if (!userComment.value) return;
    USERID.name = userName.value;
    if (USERID.name === "Anonymous") {
        USERID.identity = false;
        USERID.image = "anonymous.png"
    } else {
        USERID.identity = true;
        USERID.image = "user.png"
    }

    USERID.message = userComment.value;
    USERID.date = new Date().toLocaleString();
    let published =
        `<div class="parents">
            <img src="${USERID.image}">
            <div>
                <h1>${USERID.name}</h1>
                <p>${USERID.message}</p>
                <div class="engagements"><img src="/img/like.png" id="like"><img src="/img/share.png" alt="">
                <div id="like"><a href="['
                9ol,.;6+,,74"</div></div>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

    comments.innerHTML += published;
    userComment.value = "";
    publishBtn.classList.remove("abled")

    let commentsNum = document.querySelectorAll(".parents").length;
    document.getElementById("comment").textContent = commentsNum;

}

publishBtn.addEventListener("click", addPost);

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});