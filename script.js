setTimeout(() => {

document.getElementById("loader").style.display = "none";
},3000);

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.fontSize=(20+Math.random()*25)+"px";


heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,300);

document.getElementById("startBtn").addEventListener("click",()=>{

    document.querySelector(".hero").style.display="none";


    document.getElementById("giftSection").style.display="block";

});

const message = `Happy Birthday My Love ❤️

Today its one of the best day of my life because its the day you came into this world. Without which i would have never met you. 

Thank You for every smile, every laugh, every memory and every moment we shared together.

I know that we can't meet and we can't talk too much daily but my love for you wont fade it is increasing day by day and will increase More.

I hope this birthday brings you endless happiness, success, love and beautifull memories.

No matter where life takes us, I promise that you'll always have a special place in my heart.

Happy Birthday once again My Love. 

I Love You Soo Muchh 🥰🥰❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){
        
        
        document.getElementById("typewriter").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

document.getElementById("startBtn").addEventListener("click", () => {


    document.querySelector(".hero").style.display = "none";

    document.querySelector(".letter-section").style.display = "block";

    document.querySelector(".gallery").style.display = "block";

    document.getElementById("typewriter").innerHTML = "";

    i= 0;

    typeWriter();

});

const music = document.getElementById("bgMusic");

document.getElementById("startBtn").addEventListener("click", () => {

    document.querySelector(".hero").style.display = "none";
    document.querySelector(".letter-section").style.display = "block";
    document.querySelector(".gallery").style.display = "block";

    music.currentTime = 0;

    music.play().catch(error => {
        console.log("Music error:", error);
    });

    document.getElementById("typewriter").innerHTML = "";
    i = 0;
    typeWriter();
});