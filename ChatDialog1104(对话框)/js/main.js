
$(window).bind("load", function() {
    "use strict";
    $(".loading").fadeOut(1000);
    $(".loader").fadeOut(1000);
});

$(document).ready(function() {
    // nav
    toggle = document.querySelectorAll(".toggle")[0];
    nav = document.querySelectorAll("nav")[0];
    toggle_open_text = '&#9776';
    toggle_close_text = '&#9747';
    menuItem = document.querySelectorAll(".disc");

    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            toggle.innerHTML = toggle_close_text;
            // nav.style.position = "fixed";
            document.getElementById("wholepg").classList.add("blur");

        } else {
            toggle.innerHTML = toggle_open_text;
            // nav.style.position = "absolute";
            document.getElementById("wholepg").classList.remove("blur");
        }
    }, false);

    for (var i = 0; i < menuItem.length-1; i++) {
        menuItem[i].addEventListener('click', function (e) {
            e.stopPropagation();
            if (nav.classList.contains('open')) {
                nav.classList.toggle('open');
                toggle.innerHTML = toggle_open_text;
                // document.getElementById("myNav").style.opacity = 0;
                document.getElementById("wholepg").classList.remove("blur");
            }
        }, false);
    }

    setTimeout(function(){
        nav.classList.toggle('open');
    }, 800);
});

$(document).on("click", function () {
    toggle = document.querySelectorAll(".toggle")[0];
    nav = document.querySelectorAll("nav")[0];
    toggle_open_text = '&#9776';
    toggle_close_text = '&#9747';

    if (nav.classList.contains('open')) {
        nav.classList.toggle('open');
        toggle.innerHTML = toggle_open_text;
        document.getElementById("wholepg").classList.remove("blur");

    }
})

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    result = xmlhttp.responseText;
    return result;
}

function passWord() {
    password = loadFile("../secure.txt");
    testV = 1;
    var pass1 = prompt('Please enter the password',' ');
    while (testV < 3) {
        if (pass1.toLowerCase() == password) {
            alert('You Got it Right!');
            window.location.href = "portfolio/grocery.html";
            // window.open("portfolio/grocery.html", "_self");
            break;
        }
        testV+=1;
        var pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    return " ";
}



