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