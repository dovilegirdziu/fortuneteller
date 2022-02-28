// Today's fortune
document.querySelector('#forToday').addEventListener('click', tellFortune);

function tellFortune() {
    document.querySelector('#forToday').innerText = " ";
    document.querySelector('#forToday').innerText = fortuneToday;
    document.querySelector('#background-video').src = getRandomVideo();
}

fortuneList = ["Good fortune will be yours", "Do a good deed today and you will be rewarded", "You will have very good luck today", "You will be rich", "Not your day, really", "Try sleeping", "The odds are in your favour", "Hardwork sometimes is rewarded", "You will get a clue", "Something funny is about to happen", "Your day is going to be lovely, much like yourself", "Someone is thinking of you", "Welcome change", "Good news will come to you by text", "New ideas could be profitable", "Others can help you now", "Soon life will become more interesting"];

function getRandomFortune() {
    return fortuneList[Math.floor(Math.random()*fortuneList.length)];
}

// it's a TODAYS fortune so we don't want to call it everytime it's clicked
const fortuneToday = getRandomFortune();

bgVideos = [ "./vid/MikhailNilov.mp4", "./vid/MiguelÁPadriñán.mp4", "./vid/cottonbro.mp4"]

function getRandomVideo() {
    return bgVideos[Math.floor(Math.random()*bgVideos.length)];
}

// ============================================================

// Birthday Fortune

document.querySelector('.bFortune').addEventListener('click', printBFortune);

function printBFortune() {
    let input = document.querySelector('#input').value.toLowerCase();
    if (input != " ") {
        document.querySelector('.bFortune').innerText = getRandomFortune();
        document.querySelector('#input').value = " ";
    // console.log(input);
    } else {
        document.querySelector('.bFortune').innerText = "Try entering a month";
        document.querySelector('#input').value = " ";
    }
}

// =======================================================================

// Compliments

document.querySelector('.getCompl').addEventListener('click', showCompliment);

compliments = ["You're a smart cookie", "I like your style", "You have the best laugh", "I appreciate you", "You're strong", "Your perspective is refreshing", "You're an awesome friend", "You light up the room", "You deserve a hug right now", "You should be proud of yourself", "You're more helpful than you realize", "You have a great sense of humor", "You've got all the right moves", "On a scale from 1 to 10, you're an 11", "You are brave", "Aside from food. You're my favorite", "You are making a difference", "How is it that you always look great, even in shorts?", "Everything would be better if more people were like you!", "Being around you makes everything better!", "That thing you don't like about yourself is what makes you so interesting", "You're wonderful", "Jokes are funnier when you tell them", "You're better than a triple-scoop ice cream cone. With sprinkles", "Your hair looks stunning", "You're inspiring", "You have the best ideas", "You're great at figuring stuff out" ];



function getRandomCompliment() {
    return compliments[Math.floor(Math.random()*compliments.length)];
}

function showCompliment() {
    document.querySelector('p').innerText = getRandomCompliment();
    document.querySelector('#down').classList.add('hidden');
}