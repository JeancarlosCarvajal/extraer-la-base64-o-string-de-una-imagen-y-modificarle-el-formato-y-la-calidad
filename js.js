// Extrae la Base64 de una imagen
document.getElementById('enviar').addEventListener('click', 
    function(e) { 
        // Identificamos el elemento Imagen
        var img = document.getElementById("imagen");
        // Identificamos donde colocaremos la respuesta
        var respuesta = document.getElementById("respuesta");
        // Creamos un Lienzo o Canvas
        var canvas = document.createElement("canvas"); 
        // Asiganmos ancho y alto al canvas
        canvas.width = img.width;
        canvas.height = img.height;
        // Abrimos las puertas a las propiedades del canvas
        var ctx = canvas.getContext("2d");
        // Dibujamos la imagen dentro del Canvas
        ctx.drawImage(img, 0, 0);
        // Extraemos la Base64 en el formato y la Calidad especificada
        var dataURL = canvas.toDataURL("image/webp", 0.6); 
        // Removemos el canvas temporal
        canvas.remove();
        // Asignamos la respuesta dentro del Texarea
        respuesta.innerHTML = dataURL; 
});