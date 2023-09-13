let rootpath = window.location.origin
let admin = rootpath + "/Pages/adminlogin.html"
let contact = rootpath + "/Pages/docsign.html"
let patient = rootpath + "/Pages/login.html"
let home = rootpath + "/pages/doctor0.html"
let doctors = rootpath + "/pages/doctor.html"
let healthtest = rootpath + "/pages/periodspage.html"
let blogs = rootpath + "/pages/services.html"
let history = rootpath + "/pages/patientapphistory.html"
let indexpage = rootpath + "/index.html"


let getuser = JSON.parse(localStorage.getItem("user_id"))
let beforelogin = ` <a href="#" class="logo"> <i class="fas fa-heartbeat"></i>MGOOD</a>
<nav class="navbar">
    <a href="${admin}">Admin</a>
    <a href="${contact}">Doctor</a>
    <a href="${patient}">User</a>
</nav>
<div id="menu-btn" class="fas fa-bars"></div>`

let after_login =

    `
    <a href="#" class="logo"> <i class="fas fa-heartbeat"></i>MGOOD</a>

    <nav class="navbar">
    <a href="${home}">Home</a>
        <a href="${doctors}">Doctors</a>
        <a href="${healthtest}">Periods Calculator</a>
        <a href="${blogs}">Blogs</a>
        <a href="/pages/patientapphistory.html?userid=${getuser}">Booking history</a>
        <a href ="#" onclick = "logout_link()">logout</a>
        <a href="#"><i class="fa fa-shopping-cart"></i></a>
        <img onclick="profile()"  id="random_img">
    </nav>
    <div id="menu-btn" class="fas fa-bars"></div>

`

function nav_head() {
    let nav = JSON.parse(localStorage.getItem("login_user"));
    let loghead = document.getElementById("header");
    if (!nav) {
        loghead.innerHTML = beforelogin;
    }
    else {
        loghead.innerHTML = after_login;

    }

    const menu = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    menu.onclick = () => {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    };

    window.onscroll = () => {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
    };


    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    let mail = JSON.parse(localStorage.getItem("login_user"));
    console.log(mail);
    let gmail = data.find(function (profile) {
        console.log(profile["email"])
        if (mail == profile["email"]) {
            return true;
        }
    })

    console.log(gmail);
    let randomimg = document.getElementById("random_img");
    randomimg.setAttribute("src", gmail["image"]);

}

function profile() {
    window.location.href = "./userprofile.html"
}


function logout_link() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("login_user");
        window.location.href = `${indexpage}`
    }
    console.log(indexpage)
}




