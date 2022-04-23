//responsável por adaptar a tela do fórum
const q = (q)=>document.querySelector(q);
const qs = (q)=>document.querySelectorAll(q);
let c = 0;
let index = 0;

function resize(){
    if(window.matchMedia(`(max-width: 1350px)`)){
        q('.top-search').style.padding = '2rem 2rem 2rem 0rem';
        q('.forum-filter').style.margin = '.8rem 0rem 0rem 0rem';
        q('.forum-articles').style.margin = '8rem 0rem 0rem 0rem';
        q('.page-control').style.margin = '0rem';
        q('.forum-filter').style.display = 'flex';
    }
}

function normal(){
    if(window.matchMedia(`(max-width: 1350px)`)){
        q('.top-search').style.padding = '2rem 2rem 2rem 11.5rem';
        q('.forum-filter').style.margin = '.8rem 0rem 0rem 11.2rem';
        q('.forum-articles').style.margin = '8rem 0rem 0rem 12rem';
        q('.page-control').style.margin = '0rem 0rem 0rem 12rem';
        q('.forum-filter').style.display = 'none';
    }
}

//pega o index do post e abre a página
qs('.forum-articles article').forEach((post)=>{
    post.setAttribute('data-key', c);
    c++;
    post.addEventListener('click', (e)=>{
        index = parseInt(post.closest('[data-key]').getAttribute('data-key'));
        sessionStorage.setItem('index', index);
        window.location.href = '../pages/post-forum.html';
    })
})
