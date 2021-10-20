//setting up variables
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var previous = document.getElementById("prev");
var next = document.getElementById("next");
var button = document.querySelectorAll(".button");

var message = ["My name is Euthyphro.", 
"You can call me Euie.", 
"I am one and a half years old.", 
"I came to Ian's family when I was four months old.",
"Here I learn walking on the stairs,", 
"climbing,", 
"and jumping.",
"I like playing hide-and-seek,", 
"wandering under the umbrella,",
"watching the world outside the window,", 
"drinking milk,", 
"and smelling flowers.",
"Sometimes, I accidentally destroyed some flowers. Lol",
"I like playing,", 
"hanging out with my buddy,",
"sleeping,", 
"spacing out,",
"being pat,", 
"and being kissed.",
"I am afraid of dogs.",
"I will be terrified by barking dogs.",
"But thanks to Ian, I always live a happy life."]

var images = ["assets/images/1.jpg", 
"assets/images/2.jpg", 
"assets/images/3.jpg", 
"assets/images/4.jpg", 
"assets/images/5.jpg", 
"assets/images/6.jpg", 
"assets/images/7.jpg", 
"assets/images/8.jpg", 
"assets/images/9.jpg", 
"assets/images/10.jpg",
"assets/images/11.jpg",
"assets/images/12.jpg",
"assets/images/13.jpg",
"assets/images/14.jpg",
"assets/images/15.jpg",
"assets/images/16.jpg",
"assets/images/17.jpg",
"assets/images/18.jpg",
"assets/images/19.jpg",
"assets/images/20.jpg",
"assets/images/21.jpg",
"assets/images/22.jpg",
"assets/images/23.jpg"]

//add styles and background images with javascript
let welcome = document.querySelector('.welcome');
welcome.setAttribute("style", "padding:20px;");
mainEl.setAttribute('src', images[22]);
timerEl.textContent = "Hello, thank you for coming to listen to my story.";

let i = 0;

//this function simulates the slideshow effect; the page will display euie's story automatically once it is open
function story() {
    var timeleft = message.length;

    var timeInterval = setInterval(function() {
        timeleft--;

        timerEl.textContent = message[i];        
        mainEl.setAttribute('src', images[i]);
        i++;

        if (timeleft < 0) {
            next.style.opacity = "1";
            previous.style.opacity = "1";
            clearInterval(timeInterval);
        }
    }, 3000);
}

story();

//setting up the function for the 'previous' and the 'next' button which show up after the slideshow is over
var index = 21;

function navigate (direction) {
    index = index + direction;
    if (index > images.length - 1) {
        index = 0
    } else if (index < 0) {
        index = images.length - 1
    }
}

navigate (0);

previous.addEventListener("click", function(event) {
    navigate(-1);
    timerEl.textContent = message[index];
    mainEl.setAttribute('src', images[index]);
});

next.addEventListener("click", function(event) {
    navigate(1);
    timerEl.textContent = message[index];
    mainEl.setAttribute('src', images[index]);
});




