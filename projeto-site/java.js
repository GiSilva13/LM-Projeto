var Imagem1 = "img/Frida Kahlo_ Frieda and Diego Rivera, 1931.jpg";
var Imagem2 = "img/As duas Fridas, de Frida Kahlo - 1938.jpg"
var Imagem3 = "img/download (1).jpg";
var Imagem4 = "img/download (2).jpg";

function trocar(){
    document.getElementById('img1').src = Imagem1;
    let aux = Imagem1;
    Imagem1 = Imagem2;
    Imagem2 = Imagem3;
    Imagem3 = Imagem4;
    Imagem4 = aux;
}






