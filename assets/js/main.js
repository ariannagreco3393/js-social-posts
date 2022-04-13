/* 
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.

Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
*/

const posts = [
    {
        id: 1,
        nome: 'Phil Mangione',
        foto: 'https://i.picsum.photos/id/354/300/300.jpg?hmac=nrFV2skCGXr9LuJ58pBJDNjJWUYdjKYSWyVR99laXNA',
        data: '6/25/2021',
        testo: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        img: 'https://i.picsum.photos/id/354/300/300.jpg?hmac=nrFV2skCGXr9LuJ58pBJDNjJWUYdjKYSWyVR99laXNA',
        likes: 80
    },

    {
        id: 2,
        nome: 'Sofia Perlari',
        foto: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
        data: '3/9/2021',
        testo: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        img: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        likes: 120
    },

    {
        id: 3,
        nome: 'Arianna Greco',
        foto: 'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
        data: '12/4/2021',
        testo: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        img: ' ',
        likes: 12
    },

]

/* 
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/

//seleziono elemento della DOM che contiene i post

const postsElement = document.querySelector('.posts')
console.log(postsElement);

//uso foreach per il ciclo

const post = posts.forEach((element) => {
    //console.log(element.id, element.nome, element.foto);

    /*  const id = element.id
     const nome = element.nome
     const foto = element.foto
     const data = element.data
     const testo = element.testo
     const img = element.img
     const likes = element.likes */

    //console.log(id, nome, foto, data, testo, img, likes);

    const postMarkup = `
    <div class="post" id="${element.id}">
                    <div class="heading">
                        <div class="heading_foto">
                            <img class="foto_user"
                                src="${element.foto}"
                                alt="">
                        </div>
                        <div class="heading_text">
                            <div class="nome">${element.nome}</div>
                            <div class="data">${element.data}</div>
                        </div>
                    </div>
                    <p class="post_text">${element.testo}.</p>
                    <div class="img_post">
                        <img src="${element.img}"
                            alt="">
                    </div>
                    <div class="post_footer">
                        <button class="btn"><i class="fa-solid fa-thumbs-up"></i>Mi Piace</button>
                        <p class="likes_number">Piace a <span class="number">${element.likes}</span>  persone</p>
                    </div>
                </div>
    `

    postsElement.insertAdjacentHTML('beforeend', postMarkup);


});


/* 
  Milestone 3
  Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter 
  dei likes relativo. 
  Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
  */

//seleziono il bottone
const btnElement = document.querySelectorAll('.btn')
//console.log(btnElement);

const addLike = []
console.log(addLike);

btnElement.forEach((element, index) => {
    //ascolto per il click
    element.addEventListener('click', function () {
        //coloro di blue al click
        element.classList.toggle('blue')

        //incremento il like
        posts[index].likes++
        //console.log(posts[index].likes++);
        const postElement = document.getElementById(`${posts[index].id}`)
        //console.log(postElement);
        const spanElement = postElement.querySelector('.number')
        spanElement.innerHTML = posts[index].likes

        //salviamo in un seocndo array gli id dei post con like

        if (!addLike.includes(posts[index].id)) {
            addLike.push(posts[index].id)
        }


    })
});
















