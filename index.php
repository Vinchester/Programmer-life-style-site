<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Mykyta Kuznetsov</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="styles/style.css">
</head>
<body style="overflow-x: hidden;">
    <select class="animate__animated animate__zoomInLeft" id="sel" class="change-lang">
        <option value="ua">UA</option>
        <option value="en" selected>EN</option>
        <option value="ru">RU</option>
    </select>
    <div class="headcontainer">
        <div>
            <img class="animate__animated animate__fadeInUp" id="imgprogrammer" src="https://i.ibb.co/g76L0L2/programmerstyle.png" alt="ProgrammerCocoon">
            <p class="animate__animated animate__rollIn" id="lng-textprogrammer">PROGRAMMER LIFE STYLE<img src="img/keyboard.png"></p>
        </div>
    </div>
    <div class="paragraph1">
        <div class="textdiv1">
            <div class="textdiv11">
                <p id="lng-firsttext">Programmer life is the idea of a lifestyle. This article will talk about what it means to be a programmer, how the life style started, and some tips for beginners on what they need to know before they start.<br><br>The phrase "programmer programming life" has two meanings. The first meaning is an expression that simply means the programmers live their lives in a certain way, or that this is all they do with their time. The second meaning of "programmer programming life"</p>
            </div>
            <img id="imgoffices" src="https://i.ibb.co/kgjr9fZ/photo-1497366754035-f200968a6e72.jpg" alt="offices">
        </div>
    </div>
    <?php 
        include 'navbar.php';
    ?>
    <script src='scripts/push.js'></script>
    <script src='scripts/languages.js'></script>
    <script src='scripts/app.js'></script>
    <script>
        window.onscroll = function(){
            var distance = document.getElementById("sel").getBoundingClientRect();
            var imgdistance = document.getElementById("imgprogrammer").getBoundingClientRect();
            if(distance.top =  10){
                var select = document.getElementById('sel');
                select.className = "hidge";
                setTimeout(() => {
                    select.style.display = "none";
                }, 400);
                setTimeout(() => {
                    select.style.display = "block";
                }, 500);
            }
        }
    </script>
</body>
</html>