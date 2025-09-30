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
});