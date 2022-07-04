let socialmedia = document.getElementById("socialmedia");
let logo = document.getElementById("logo");
let comment = document.getElementById("comment");
socialmedia.value = "On";
socialmedia.onclick = function(){
        if (socialmedia.value == "On") {
            logo.src = 'img/telegram.png';
            comment.src = 'img/instagram.png';
            comment.classList.add("bounce");
            logo.classList.add("bounce");
            document.getElementById("logohref").href = "https://t.me/platzzeins";
            document.getElementById("logohref").target = "";
            document.getElementById("commhref").href = "https://www.instagram.com/so__fucking_what/";
            socialmedia.value = "Off";
        } else {
            logo.src = "img/logo.png";
            comment.src = 'img/leaveacommentOn.png';
            comment.classList.remove("bounce");
            logo.classList.remove("bounce");
            document.getElementById("logohref").href = "../index.php";
            document.getElementById("logohref").target = "_self";
            document.getElementById("commhref").href = "change.html";
            document.getElementById("commhref").target = "_self";
            socialmedia.value = "On";
        }
    }
    let navbar = document.getElementById("navbar");
    navbar.onmouseover = function(){
        navbar.style.height = "90px";
        navbar.style.transition = "height 0.3s 0s ease-in";
    }
    navbar.onmouseout = function(){
        navbar.style.height = "80px";
            
    }