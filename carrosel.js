// const de titulos e sinopse 
const sinopses = [
    {id: 1, 
        img:"img-1.jpg", 
        titulo: "One Piece", 
       ctg: "Anime", 
        spse: "One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou  as propriedades de borracha após ter comido uma fruta do diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o 'One Piece', a fim de se tornar o próximo Rei dos Piratas." ,
},
    {id: 2,  
        img: "img-2.png" , 
        titulo: "Doctor Who",
        ctg: "Serie", 
        spse: "A série acompanha Doctor, cientista de um planeta distante que viaja no tempo a bordo da TARDIS, uma nave que muda sua forma de acordo com seus arredores. Doctor também é capaz de alterar sua própria aparência." ,
    },
    {id: 3,  
        img:"img-3.png",
        titulo: "Até o Ultimo Homem", 
        ctg: "Filme", 
        spse: "Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.",
    },
    {id: 4, 
        img: "img-4.png" ,
        titulo: "Tom e Jerry", 
        ctg:"Desenho Animado ", 
        spse: "Tom é um gato determinado, porém impaciente, cujo objetivo de vida é capturar o ratinho Jerry. Porém, o pequeno animal é inteligente e cheio de habilidades. O clássico desenho acompanha as loucas e eletrizantes perseguições entre gato e rato.",
    },
];

//ligação de item do js ao html
const img = document.getElementById("img");
const titulo = document.getElementById("titulo");
const ctg= document.getElementById("categoria");
const spse = document.getElementById("sinopse");
// ligação do buttom
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

//valor inicial da ordem dos titulos e sinopse
let ordem = 0;

//Carregamento dos item
window.addEventListener("DOMContentLoaded" , function () {
   const item =  sinopses[ordem] ;
    img.scr = item.img;
    titulo.textContent = item.titulo;
    ctg.textContent = item.ctg;
    spse.textContent = item.spse;
});

//Apresenta Conteudo dos titulos e sinopse 
function apresentaConteudo(conteudo) {
    const item = sinopses[conteudo];
    img.scr = item.img;
    titulo.textContent = item.titulo;
    ctg.textContent = item.ctg;
    spse.textContent = item.spse;
}

//Proximo Conteudo
nextBtn.addEventListener("click",  function () {
    ordem++;
        if (ordem >  sinopses.length - 1)  {
            ordem = 0;
        }
    apresentaConteudo(ordem);
});

//Anterior Conteudo
prevBtn.addEventListener("click", function () {
    ordem--;
        if (ordem < 0) {
            ordem = sinopses.length - 1;
        }
    apresentaConteudo(ordem);
});

//Aleatorio Conteudo
randomBtn.addEventListener("click", function(){
    console.log("Hello");

    ordem = Math.floor(Math.random() * sinopses.length);
    apresentaConteudo(ordem);
});

