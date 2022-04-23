const q = (q)=>document.querySelector(q);
const qs = (q)=>document.querySelectorAll(q);
//responsável por armazenar as informaçoes dos posts do fórum
let posts = [
    {title: 'Alguém para treinar francês?', description: 'Alguem aqui tem o interesse de começar a aprender o básico do francês?'},
    {title: 'O que significa disease?', description: 'Qual o significado da palavra disease?'},
    {title: "Diferença na pronúncia de 'world' e 'word'", description: 'Qual a diferença na pronúncia entre essas duas palavras?'},
    {title: 'qual o significado de "if you will" em ingles?', description: 'Gostaria de alguns exemplos'},
    {title: 'qual o significado de "lmao"?', description: 'É limão?'},
    {title: 'O que significa WAP?', description: 'Não sei o que é.'}
]
let index = sessionStorage.getItem('index');
document.title = posts[index].title;
q('.post h1').innerHTML = posts[index].title;
q('.post p').innerHTML = posts[index].description;

function resize(){
    if(window.matchMedia(`(max-width: 1350px)`)){
        q('.post').style.margin = '3rem 0rem 0rem 7rem'
    }
}

function normal(){
    if(window.matchMedia(`(max-width: 1350px)`)){
        q('.post').style.margin = '3rem 0rem 0rem 17rem'
    }
}