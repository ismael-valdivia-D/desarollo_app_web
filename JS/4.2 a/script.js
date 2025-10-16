console.log("page loaded...");

// Funciones de reproducción
function playVideo(element) {
    element.play();
    element.currentTime = 0;
}

function pauseVideo(element) {
    element.pause();
}

function cambioVideo(elemento) {
    // Cambio de Video
    const videoGrande = document.getElementById("mainVideo");
    let sourceVideoGrande = videoGrande.src;
    videoGrande.src = elemento.src;
    elemento.src = sourceVideoGrande;
    
    // Cambio de Texto
    const textoGrande = document.getElementById("texto");
    let textoGrandeContent = textoGrande.textContent;
    const textoPequeno = elemento.nextElementSibling;
    let textoPequenoContent = textoPequeno.textContent;
    textoGrande.textContent = textoPequenoContent;
    textoPequeno.textContent = textoGrandeContent;
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('mainVideo');

    video.pause();

    video.addEventListener('mouseenter', function () {
        video.play().catch(e => {
            console.warn("Playback failed:", e);
        });
    });

    video.addEventListener('mouseleave', function () {
        video.pause();
    });

    // Intercambio de video principal
    document.querySelectorAll('.video-small').forEach(function (item) {
        item.addEventListener('click', function () {
            const src = item.getAttribute('data-src');
            const poster = item.getAttribute('data-poster');
            video.src = src;
            video.poster = poster;
            video.load();
            video.play();
        });

        // Previsualización al pasar el mouse
        const preview = item.querySelector('.preview');
        item.addEventListener('mouseenter', function () {
            preview.style.display = 'block';
            preview.play();
            item.querySelector('.play-icon').style.display = 'none';
        });
        item.addEventListener('mouseleave', function () {
            preview.pause();
            preview.currentTime = 0;
            preview.style.display = 'none';
            item.querySelector('.play-icon').style.display = 'flex';
        });
    });
});