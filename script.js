//elementos a utilizar del DOM
const target = document.getElementById("target");
const mainInfo = document.getElementById("mainInfo");
const one  = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const boton = document.getElementById("boton");
//funciones
const oneChecked = () => {
    one.style.backgroundColor = "rgb(14, 13, 13)";
    one.style.color = "var(--white)";
    one.style.width = "55px";
    one.style.height = "55px";
    one.style.fontSize = "18px";
}
const twoChecked = () => {
    two.style.backgroundColor = "rgb(53, 50, 50)";
    two.style.color = "var(--white)";
    two.style.width = "55px";
    two.style.height = "55px";
    two.style.fontSize = "18px";
}
const threeChecked = () => {
    three.style.backgroundColor = "var(--white)";
    three.style.color = "var(--very-dark-blue)";
    three.style.width = "55px";
    three.style.height = "55px";
    three.style.fontSize = "18px";
}
const fourChecked = () => {
    four.style.backgroundColor = "var(--light-grey)";
    four.style.color = "var(--white)";
    four.style.width = "55px";
    four.style.height = "55px";
    four.style.fontSize = "18px";
}
const fiveChecked = () => {
    five.style.backgroundColor = "var(--orange)";
    five.style.color = "var(--white)";
    five.style.width = "55px";
    five.style.height = "55px";
    five.style.fontSize = "18px";
}
const oneActive_othersOff = () => {
    two.style.backgroundColor = "";
    two.style.color = "";
    two.style.width = "";
    two.style.height = "";
    two.style.fontSize = "";
    three.style.backgroundColor = "";
    three.style.color = "";
    three.style.width = "";
    three.style.height = "";
    three.style.fontSize = "";
    four.style.backgroundColor = "";
    four.style.color = "";
    four.style.width = "";
    four.style.height = "";
    four.style.fontSize = "";
    five.style.backgroundColor = "";
    five.style.color = "";
    five.style.width = "";
    five.style.height = "";
    five.style.fontSize = "";
}
const twoActive_othersOff = () => {
    one.style.backgroundColor = "";
    one.style.color = "";
    one.style.width = "";
    one.style.height = "";
    one.style.fontSize = "";
    three.style.backgroundColor = "";
    three.style.color = "";
    three.style.width = "";
    three.style.height = "";
    three.style.fontSize = "";
    four.style.backgroundColor = "";
    four.style.color = "";
    four.style.width = "";
    four.style.height = "";
    four.style.fontSize = "";
    five.style.backgroundColor = "";
    five.style.color = "";
    five.style.width = "";
    five.style.height = "";
    five.style.fontSize = "";
}
const threeActive_othersOff = () => {
    one.style.backgroundColor = "";
    one.style.color = "";
    one.style.width = "";
    one.style.height = "";
    one.style.fontSize = "";
    two.style.backgroundColor = "";
    two.style.color = "";
    two.style.width = "";
    two.style.height = "";
    two.style.fontSize = "";
    four.style.backgroundColor = "";
    four.style.color = "";
    four.style.width = "";
    four.style.height = "";
    four.style.fontSize = "";
    five.style.backgroundColor = "";
    five.style.color = "";
    five.style.width = "";
    five.style.height = "";
    five.style.fontSize = "";
}
const fourActive_othersOff = () => {
    one.style.backgroundColor = "";
    one.style.color = "";
    one.style.width = "";
    one.style.height = "";
    one.style.fontSize = "";
    two.style.backgroundColor = "";
    two.style.color = "";
    two.style.width = "";
    two.style.height = "";
    two.style.fontSize = "";
    three.style.backgroundColor = "";
    three.style.color = "";
    three.style.width = "";
    three.style.height = "";
    three.style.fontSize = "";
    five.style.backgroundColor = "";
    five.style.color = "";
    five.style.width = "";
    five.style.height = "";
    five.style.fontSize = "";
}
const fiveActive_othersOff = () => {
    one.style.backgroundColor = "";
    one.style.color = "";
    one.style.width = "";
    one.style.height = "";
    one.style.fontSize = "";
    two.style.backgroundColor = "";
    two.style.color = "";
    two.style.width = "";
    two.style.height = "";
    two.style.fontSize = "";
    three.style.backgroundColor = "";
    three.style.color = "";
    three.style.width = "";
    three.style.height = "";
    three.style.fontSize = "";
    four.style.backgroundColor = "";
    four.style.color = "";
    four.style.width = "";
    four.style.height = "";
    four.style.fontSize = "";
}
//eventos
one.addEventListener("click", (event) => {
    oneChecked();
    oneActive_othersOff();
    eleccionUsuario = 1;
})
two.addEventListener("click", (event) => {
    twoChecked();
    twoActive_othersOff();
    eleccionUsuario = 2;
})
three.addEventListener("click", (event) => {
    threeChecked();
    threeActive_othersOff();
    eleccionUsuario = 3;
})
four.addEventListener("click", (event) => {
    fourChecked();
    fourActive_othersOff();
    eleccionUsuario = 4;
})
five.addEventListener("click", (event) => {
    fiveChecked();
    fiveActive_othersOff();
    eleccionUsuario = 5;
})
boton.addEventListener("click", (event) => {
    event.preventDefault();
    if (eleccionUsuario === 1 || eleccionUsuario === 2 || eleccionUsuario === 3 || eleccionUsuario === 4 || eleccionUsuario === 5) {
        event.preventDefault();
        target.style.textAlign = "center";
        target.style.gap = "15px";
        target.style.padding = "30px";
        target.innerHTML = `<div><img src="/thank-you-img.png" alt="" width="200px">
                <div id="seleccionado">
                    <p>
                        You selected ${eleccionUsuario} out of 5
                    </p>
                </div>
                </div>
                <div class="main-info" id="mainInfo">
                    <h1>Thank you!</h1>
                    <p>We appreaciate you taking the time to give a rating. <br>If you ever need more support, don't hesitate to get in touch!</p>
                </div>`;
    }
})
