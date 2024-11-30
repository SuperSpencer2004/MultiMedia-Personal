
const body = document.body;
const foot = document.getElementById('foot');
const title = document.getElementById("header_title");
const head = document.querySelectorAll('a');

let bi = 0, bx = 0, bj = 0;
let fi = 0, fx = 0, fj = 0;
let picX = 0; picY = 0, reverse = 1;

if (window.location.pathname.endsWith('reciept.html')) {
    document.getElementById('r1').innerText = "I lied. I did change it. SLIGHTLY.";
    document.getElementById('r2').innerText = "";
    document.getElementById('r3').innerText = "Click to go back to the actual changes.";
}

//foot.style.backgroundColor = 'red';
function ON() {

    title.innerText = "Spencer's Page";

    setInterval(bodyColor, 20);
    if (bi > 218) {
        clearInterval(bodyColor);
    }

    setInterval(footColor, 20);
    if (fx > 162) {
        clearInterval(footColor);
    }

    if (window.location.pathname.endsWith('pp_aboutme.html')) {
        setInterval(aboutMeMove, 10);
    }

    // background-color: rgb(37, 72, 125);
    // background-color: rgb(174, 19, 19);

    if (window.location.pathname.endsWith('pp_home.html')) { //targets home
        console.log('yes');
        document.getElementById("homeP").innerText = "I'm cool :) \n\nI'm not changing the Oil Painting, Watercolor, Pastel, etc. I don't want to. You can't make me.";
        document.getElementById('welc').innerText = "This was so hard...";
        document.getElementById('hp1').src = "Smile.png";
        document.getElementById('hp2').src = "Landscape-hp2.webp";
        document.getElementById('hpN').src = "img/N.jpg";
        document.getElementById('hpO').src = "img/O.jpg";
        document.getElementById('hpP').src = "img/P.jpg";
        document.getElementById('hpE').src = "img/E.png";

        // document.getElementById('hNav2').;

    }

    if (window.location.pathname.endsWith('pp_aboutme.html')) {
        console.log('yes');
        document.getElementById('abP1').textContent = "I dunno, I'm autistic or something?"
        document.getElementById('logo').src = 'HotDog.png';
        //document.getElementById('abmPic').src = 'Smile.png';

        newP = document.createElement('p');
        newP.innerHTML = "I'm studying computer science. <br />";
        newP.innerHTML += "I live in Port Coquitlam. <br />";
        newP.innerHTML += "I'm a student at douglas college.<br />";
        newP.innerHTML += "I like making music.";
        document.getElementById('desc').appendChild(newP);


        newP2 = document.createElement('p')
        newP2.textContent = '*Image weirdly miss-sized intentionally*'
        newP2.style.color = 'white';
        document.getElementById('main').prepend(newP2);

    }

    if (window.location.pathname.endsWith('pp_contact.html')) {
        console.log('yes');
        document.getElementById('co1').style.color = 'black';
        document.getElementById('co1').innerText = "You know we don't get sent this, and the reciept.html screen is the same. Don't bother trying."
    }

    if (window.location.pathname.endsWith('pp_courses.html')) {
        console.log('yes');
        //document.getElementById('picLeft').onclick = 'AltitemLeft(pic.alt)';
        document.getElementById('Altpic').hidden = false;
        document.getElementById('Altpic2').hidden = false;
        document.getElementById('picLeft').hidden = true;
        document.getElementById('picRight').hidden = true;
    }

    if (window.location.pathname.endsWith('pp_portfolio.html')) {
        console.log('yes');

        // <audio controls>
        //     <source src='Music/Apo-Sertraline.wav' type="audio/wav">Apo-Sertraline</source>
        //     <br></br>
        //     <source src='Music/Cool Stuff.wav' type="audio/wav">Cool Stuff</source>
        //     <br></br>
        //     <source src='Metal System.wav' type="audio/wav">Metal System</source>
        // </audio>
        document.getElementById('main').innerHTML = "<br>I tried to get this to be able to play some of my music, but none of what i did worked :( <br>";
        document.getElementById('main').innerHTML = "<audio controls><source src='Music/Apo-Sertraline.wav' type='audio/wav'>Apo-Sertraline</source></audio><p class='px' id='ap'>Name: Apo-Sertraline</p><br/><br/><audio controls><source src='Music/Cool Stuff.wav' type='audio/wav'>Cool Stuff</source></audio><p class='px' id='cool'>Name: Cool Stuff</p><br/><br/><audio controls><source src='Music/Metal System.wav' type='audio/wav'>Metal System</source></audio><p class='px' id='ms'>Name: Metal System</p>";
        document.getElementById('main').style.justifyContent = 'left';
        document.getElementById('main').style.width = '60%';
    }

}

function footColor() {
    if (fj < 87) {
        fj++;
    }
    if (fi < 138) {
        fi++;
    }
    fx++;

    foot.style.backgroundColor = "rgb(" + (36 + fi) + "," + (106 - fj) + "," + (181 - fx) + ")";
    for (var i = 0; i < head.length; i++) {
        head[i].style.backgroundColor = "rgb(" + (36 + fi) + "," + (106 - fj) + "," + (181 - fx) + ")";
    }

}

function bodyColor() {
    bi++;
    bx--;
    bj--;

    try {
        const main = document.getElementById('main');
        main.style.backgroundColor = "rgb(" + (37 + bi) + "," + (bx + 72) + "," + (125 + bj) + ")";
    } catch {

    }

    body.style.backgroundColor = "rgb(" + (37 + bi) + "," + (bx + 72) + "," + (125 + bj) + ")";
    // 36, 106, 181
    // 0,  0,   255
}


function aboutMeMove() {

    if (reverse == 1) {
        picY++;
        picX++;
    } else {
        picY--;
        picX--;
    }


    var picAb = document.getElementById('abmPic');

    picAb.src = 'img/Spencer.JPEG';

    picAb.style.height = picY + "px";
    picAb.style.width = (picX * 2) + "px";

    if (picX < 50) {
        picX = 50;
        picY = 50;
        reverse = 1;
    }

    if (picX > 300) {
        reverse = -1;
    }

}