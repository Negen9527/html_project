
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$(function () {
    // alert('ddd');
    $('.tlt').textillate({
        // in: {
        //     // set the effect name
        //     effect: 'tada',
        //
        //     // set the delay factor applied to each consecutive character
        //     delayScale: 1.5,
        //
        //     // set the delay between each character
        //     delay: 50,
        //
        //     // set to true to animate all the characters at the same time
        //     sync: false,
        //
        //     // randomize the character sequence
        //     // (note that shuffle doesn't make sense with sync = true)
        //     shuffle: false,
        //
        //     // reverse the character sequence
        //     // (note that reverse doesn't make sense with sync = true)
        //     reverse: true,
        //
        //     // callback that executes once the animation has finished
        //     callback: function () {}
        // }
    })
});

// filter
$(function () {
    var containerEl = document.querySelector('.projects');
    var mixer = mixitup(containerEl);
});

$('.menu__item').click(function(){
    $('.menu__item').removeClass('active');
    $(this).addClass('active');

});


for (i=1; i<12; i++){
    floatDiv('.float' + i)
}


function floatDiv(target) {
    anime({
        targets:target,
        translateY: Math.random()*40 - 20,
        translateX: Math.random()*40 - 20,
        // scale: 0.95,
        delay: Math.random()*1000,
        duration: 1500 + Math.random()*3000,
        loop: true,
        direction: 'alternate',
        easing: 'linear'
    });
}

function filterProject(className) {
    var projects = document.getElementsByClassName('wrap');
    for(var i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }

    var presentProjects = document.getElementsByClassName(className);
    for(var i = 0; i < presentProjects.length; i++) {
        presentProjects[i].style.display = 'block';
    }


}