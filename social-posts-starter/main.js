// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes


// step 1 : creo il mio array che dovra contenere i miei oggetti con all interno i dati speifici per ogni post 

const post = [
    {
        imgProfilo: 'https://picsum.photos/id/1/200/200',
        author: 'Paolo Rossi',
        time: '4 giorni fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima   iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/id/12/200/200',
        totlike: 125,
    },
    {
        imgProfilo: 'https://picsum.photos/id/4/200/200',
        author: 'Paolo Rossi',
        time: '4 giorni fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima   iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/id/10/200/200',
        totlike: 34,
    },
    {
        imgProfilo: 'https://picsum.photos/id/56/200/200',
        author: 'Paolo Rossi',
        time: '4 giorni fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima   iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/id/23/200/200',
        totlike: 50,
    },
    {
        imgProfilo: 'https://picsum.photos/id/67/200/200',
        author: 'Paolo Rossi',
        time: '4 giorni fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima   iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/id/35/200/200',
        totlike: 60,
    },
    {
        imgProfilo: 'https://picsum.photos/id/6/200/200',
        author: 'Paolo Rossi',
        time: '4 giorni fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima   iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imgPost: 'https://picsum.photos/id/40/200/200',
        totlike: 70,
    },
];

console.log(post);

// step: richiamo il conteinar dove dovró inserire il contenuto dei miei posto
const container = document.getElementById('container');

// step: richiamo la funzione creata per andare a generare i miei post
genNewPost (post, container);


// step: creo una funzione che al suo interno avra un for dove andro a creare contenuto all'interno del mio container

// come parametri utilizzo post e container perche 
// post e il mio array con i mie oggetti cioe quello che devo mettere
// container perche e dove devo inserire i miei dati
function genNewPost (post, container) {  
    for(let i = 0; i < post.length; i++) {
        
        // creo un variabile 
        const cardPost = post[i];


        // inserisco affettivamente contenuto nell html
        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${cardPost.imgProfilo} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${cardPost.author}</div>
                        <div class="post-meta__time">${cardPost.time}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${cardPost.text}</div>
            <div class="post__image">
                <img src=${cardPost.imgPost} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${cardPost.totlike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }
}