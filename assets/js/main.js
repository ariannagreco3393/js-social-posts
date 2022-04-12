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
        foto: 'https://i.picsum.photos/id/354/300/300.jpg?hmac=nrFV2skCGXr9LuJ58pBJDNjJWUYdjKYSWyVR99laXNA',
        data: '3/9/2021',
        testo: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        img: 'https://i.picsum.photos/id/354/300/300.jpg?hmac=nrFV2skCGXr9LuJ58pBJDNjJWUYdjKYSWyVR99laXNA',
        likes: 120
    },

    {
        id: 3,
        nome: 'Arianna Greco',
        foto: 'https://i.picsum.photos/id/354/300/300.jpg?hmac=nrFV2skCGXr9LuJ58pBJDNjJWUYdjKYSWyVR99laXNA',
        data: '12/4/2021',
        testo: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        likes: 120
    }
]