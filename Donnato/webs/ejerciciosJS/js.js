function calcularDivision() {
    var dist = parseFloat(document.getElementById("dist").value);
    var time = parseFloat(document.getElementById("time").value);

    if (time !== 0) {
        var resultado = dist / time;
        document.getElementById("resultado").innerHTML = "La velociad es: " + resultado;
    } else {
        document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
    }
    
    event.preventDefault();
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
});

function getEdad() {
    var edad = parseFloat(document.getElementById("edad").value);
    var resultadoText = "";
    var imagenSrc = "";

    if (!isNaN(edad)) {
        if (edad >= 0 && edad <= 11) {
            resultadoText = "Niñez";
            imagenSrc = "assets/image/niñez.jpg";
        } else if (edad > 11 && edad <= 21) {
            resultadoText = "Adolescencia";
            imagenSrc = "assets/image/adolescencia.jpg";
        } else if (edad > 21 && edad <= 35) {
            resultadoText = "Juventud";
            imagenSrc = "assets/image/juventud.jpg";
        } else if (edad > 35 && edad <= 56) {
            resultadoText = "Madurez";
            imagenSrc = "assets/image/madurez.jpg"; 
        } else {
            resultadoText = "Vejez";
            imagenSrc = "assets/image/vejez.jpg";
        }
    } else {
        resultadoText = "Ingrese una edad válida.";
    }

    document.getElementById("resultado2").innerHTML = resultadoText;

    var imagen = document.getElementById("imagenEdad");
    if (imagen) {
        imagen.src = imagenSrc;
        document.getElementById("resultado2").innerHTML = resultadoText;

        var imagen = document.getElementById("imagenEdad");
        if (imagen) {
            imagen.src = imagenSrc;
            imagen.style.maxWidth = "200px"; // Ajusta este valor según tus necesidades
            imagen.style.height = "auto";
    }
}
}

function calcularIVA() {
    var precioSinIVA = parseFloat(document.getElementById("precio").value);
    var ivaPorcentaje = parseFloat(document.getElementById("iva").value);

    if (!isNaN(precioSinIVA) && !isNaN(ivaPorcentaje)) {
        var iva = (precioSinIVA * ivaPorcentaje) / 100; 
        var precioConIVA = precioSinIVA + iva;

        document.getElementById("resultado3").innerHTML = "El IVA es: " + iva.toFixed(2) + " y el precio con IVA es: " + precioConIVA.toFixed(2);
    } else {
        document.getElementById("resultado3").innerHTML = "Por favor, ingrese valores válidos para el precio sin IVA y el porcentaje de IVA.";
    }
    function getEdad() {
    // ... (tu código anterior)

    document.getElementById("resultado2").innerHTML = resultadoText;

    var imagen = document.getElementById("imagenEdad");
    if (imagen) {
        imagen.src = imagenSrc;
        imagen.style.maxWidth = "200px"; // Ajusta este valor según tus necesidades
        imagen.style.height = "auto";
    }
}
};