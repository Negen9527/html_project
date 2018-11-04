

var $messages = $('.messages-content'),
    d, h, m,
    i = 0,
    hasshown = false,
    hasreply = false,
    isprepare = true,
    hasmsg = false;

$(window).load(function() {
    $messages.mCustomScrollbar();
    setDate();
    setGreeting();
});

$(window).scroll(function() {
    if($(window).scrollTop() > $(document).height() - $(window).height() - $("#about").height() && !hasshown) {
        hasshown = true;
        $messages.mCustomScrollbar();
        setTimeout(function() {
            initMessage();
        }, 100);
    }
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function sendEmail(msg) {
    // Email.send("from@you.com",
    //     "to@them.com",
    //     "This is a subject",
    //     "this is the body",
    //     "smtp.yourisp.com",
    //     "username",
    //     "password");
    // Cannot send from gmail
    Email.send("jldxllp@163.com",
        "yangshuhan606@163.com",
        "Website Notification",
        msg,
        "smtp.163.com",
        "jldxllp",
        "lv1994130");
}

function setDate(){
    d = new Date();
    if (m != d.getMinutes() || h != d.getHours()) {
        m = d.getMinutes();
        h = d.getHours();
        var time = d.format("H:i");
        $('<div class="timestamp">' + time + '</div>').appendTo($('.mCSB_container'));
    }
}

function checkSame(classname) {
    msgs = document.querySelectorAll(".mCSB_container")[0].childNodes;
    if (classname != msgs[msgs.length-1].classList[0]) {
        return '<figure class="avatar"><img src="images/me.png" /></figure>';
    }
    return '';
}

function setGreeting(){
    $('<div class="notification">You and Shuhan are now friends. Start chating!</div>').appendTo($('.mCSB_container'));
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    sendEmail(msg);
    // setDate();
    $('<div class="message-outer"><div class="message message-personal new">' + msg + '<figure class="avatar-personal"><img src="images/you.png"></figure></div></div>').appendTo($('.mCSB_container'));
    $('.message-input').val(null);
    updateScrollbar();
    hasmsg = true;
    if (!hasreply && !isprepare) {
        setTimeout(function() {
            hasreply = fakeMessage('reply');
        }, 3000 + (Math.random() * 20) * 100);
    }
}

$('.message-submit').click(function() {
    insertMessage();
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})

var Greeting = [
    'Hi! Thanks for stopping by',
    'My name is Shuhan. I’m a designer, thinker and problem solver. ' +
    'I’m studying HCI at Georgia Tech right now and expect to graduate in May 2018. I’m seeking for ' +
    '2018 UX design full-time positions.',
    'With a BE in industrial design, I have 5 years experience crafting useful and delightful user ' +
    'experience. I love working out creative design solutions in a logical way and see how my design ' +
    'an make people’s life better. Being a detail-oriented person, I am always meticulous about design' +
    ' details and trying to justify each of them. I have strong skill set in UX design, UI design,' +
    ' user research and product design.',
    'I apply my strong analytic skills to solve complex problems and understand business requirements. ' +
    'While sometimes I have to make compromises, I always try my best to fight for my users and ' +
    'optimize the use of resources to improve their experiences.'
]

var ContactLaterMsg = "Hi, I\'ve received your message but I\'m in the middle of class so I can\'t chat right now. If you have any questions, pls just leave your email and I\'ll reach back to you soon!";

function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }
    var profile = checkSame("message")
    $('<div class="message loading new">' + profile + '<span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').remove();
        var profile = checkSame("message")
        if (profile == '') {
            $('<div class="message new">' + profile + '<div>' + ContactLaterMsg + '</div></div>').appendTo($('.mCSB_container'));
        } else {
            $('<div class="message">' + profile + '<div class="new">' + ContactLaterMsg + '</div></div>').appendTo($('.mCSB_container'));
        }
        updateScrollbar();
    }, 3000);
    return true
}

function initMessage() {
    setDate();
    var profile = checkSame("message");
    $('<div class="message loading new">' + profile + '<span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function () {
        $('.message.loading').remove();
        var profile = checkSame("message");
        $('<div class="message">' + profile + '<div class="greet new">' + Greeting[0] + '<img src="images/smile.png" class="img-message"/></div></div>').appendTo($('.mCSB_container'));
        updateScrollbar();
    }, 2000);

    setTimeout(function () {
        var profile = checkSame("message");
        $('<div class="message loading new">' + profile + '<span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();
    }, 2500);

    setTimeout(function () {
        $('.message.loading').remove();
        var profile = checkSame("message");
        if (profile == '') {
            $('<div class="message new">' + profile + '<div class="greet">'+ Greeting[1] + '</div>').appendTo($('.mCSB_container'));
        } else {
            $('<div class="message">' + profile + '<div class="greet new">'+ Greeting[1] + '</div>').appendTo($('.mCSB_container'));
        }

        updateScrollbar();
    }, 3500);

    setTimeout(function () {
        var profile = checkSame("message");
        $('<div class="message loading new">' + profile + '<span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();
    }, 4000);

    setTimeout(function () {
        $('.message.loading').remove();
        var profile = checkSame("message");
        if (profile == '') {
            $('<div class="message new">' + profile + '<div class="greet">'+ Greeting[2] + '</div>').appendTo($('.mCSB_container'));
        } else {
            $('<div class="message">' + profile + '<div class="greet new">'+ Greeting[2] + '</div>').appendTo($('.mCSB_container'));
        }
        updateScrollbar();
    }, 7000);

    setTimeout(function () {
        var profile = checkSame("message");
        $('<div class="message loading new">' + profile + '<span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();
    }, 7500);

    setTimeout(function () {
        $('.message.loading').remove();
        var profile = checkSame("message");
        if (profile == '') {
            $('<div class="message new">' + profile + '<div class="greet">'+ Greeting[3] + '</div>').appendTo($('.mCSB_container'));
        } else {
            $('<div class="message">' + profile + '<div class="greet new">'+ Greeting[3] + '</div>').appendTo($('.mCSB_container'));
        }
        updateScrollbar();
    }, 10000);

    setTimeout(function () {
        isprepare = false;
        if (hasmsg) {
            fakeMessage("initial");
        }
    }, 10500);
}
