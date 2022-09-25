console.log("Hola mundo!!!");

self.addEventListener('install', (event) => {
    console.log("SW: Instalado");
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Instalaciones finalizadas");
            resolve('ok');
        }, 3000);
    });
    event.waitUntil(myPromise);
});

self.addEventListener('activate', (event) =>{
    console.log("SW: Activado...");
})

// self.addEventListener('fetch', (event) => {
//     //console.log(event.request.url);
//     if(event.request.url.includes('style.css')){
//         const respuesta = new Response(
//             `body{
//                 color: red;
//                 background-color: #ccc;
//             }`,
//             {
//                 headers:{
//                     'Content-Type':'text/css'
//                 }
//             }
//         );
//         event.respondWith(respuesta)
//     }
// });

// self.addEventListener('fetch', (event) => {
//     console.log(event.request.url);
//     fetch(event.request.url).then((resp)=>{
//         console.log(resp);
//         if(resp.ok){
//             event.respondWith(resp);
//         }else{
//             const generic = fetch('images/hamburguesa.png');
//             event.respondWith(generic);
//         }
//     }).catch((err)=>{
//         console.log("SW error: " + err);
//     })
//     // const resp = fetch(event.request.url);
//     // event.respondWith(resp);
// });

self.addEventListener('fetch', (event) => {   
    console.log(event.request.url);
    if(event.request.url.includes('png')){
        event.respondWith(fetch('./images/hamburguesa.png'));
    }
});