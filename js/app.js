//Probar en Command Promp http-server o instalar
//npm i http-server
//npm install --global http-server

if(navigator.serviceWorker){//Verificamos si el navedador soporta el service worker
    //console.log("Soportamos ServiceWorker");
    //Identificar si estoy en local o en github para que la ruta tome la ruta del repositorio
    navigator.serviceWorker.register("./sw.js");//Hace referencia el service worker
}

//github.io/nombre