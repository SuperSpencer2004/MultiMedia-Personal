const courses = ["Fundamentals Of Data Analytics", "MultiMedia Web Development", "Systems Analysis And Design"];

let image = document.getElementById('pic');
let cName = document.getElementById('className');


function itemLeft(picAlt) {


    console.log(picAlt);

    if (picAlt == 'Funda') {
        image.src = "SystemsPicture.png";
        image.alt = "Sys";
        cName.innerText = "Systems Analysis And Design";
    } else if (picAlt == 'Sys') {
        image.src = "MultiMediaPicture.png";
        image.alt = "Mul";
        cName.innerText = "MultiMedia Web Development";
    } else if (picAlt == "Mul") {
        image.src = "FundamentalsPicture.png"
        image.alt = "Funda";
        cName.innerText = "Fundamentals Of Data Analytics";
    }

}

function itemRight(picAlt) {

    if (picAlt == 'Funda') {
        image.src = "MultiMediaPicture.png";
        image.alt = "Mul";
        cName.innerText = "MultiMedia Web Development";
    } else if (picAlt == 'Sys') {
        image.src = "FundamentalsPicture.png"
        image.alt = "Funda";
        cName.innerText = "Fundamentals Of Data Analytics";
    } else if (picAlt == "Mul") {
        image.src = "SystemsPicture.png";
        image.alt = "Sys";
        cName.innerText = "Systems Analysis And Design";
    }

}


//bc, mul, os, aise
function AltitemRight(picAlt) {

    if (picAlt == 'BC' || picAlt == 'Funda') {
        image.src = "MultiMediaPicture.png";
        image.alt = "Mul";
        cName.innerText = "MultiMedia Web Development";
    } else if (picAlt == 'Mul') {
        image.src = "img/OS.webp"
        image.alt = "OS";
        cName.innerText = "Operating Systems";
    } else if (picAlt == "OS" || picAlt == 'Sys') {
        image.src = "img/AISE.jpg";
        image.alt = "AISE";
        cName.innerText = "Adv Integrated Software Development";
    } else if (picAlt == "AISE" || picAlt == 'Mul') {
        image.src = 'img/BC.webp'
        image.alt = "BC"
        cName.innerText = "Business Communications"
    }

}

//bc, mul, os, aise
function AltitemLeft(picAlt) {

    if (picAlt == 'OS' || picAlt == 'Sys') {
        image.src = "MultiMediaPicture.png";
        image.alt = "Mul";
        cName.innerText = "MultiMedia Web Development";
    } else if (picAlt == 'AISE') {
        image.src = "img/OS.webp"
        image.alt = "OS";
        cName.innerText = "Operating Systems";
    } else if (picAlt == "BC" || picAlt == 'Funda') {
        image.src = "img/AISE.jpg";
        image.alt = "AISE";
        cName.innerText = "Adv Integrated Software Development";
    } else if (picAlt == "Mul") {
        image.src = 'img/BC.webp'
        image.alt = "BC"
        cName.innerText = "Business Communications"
    }

}

