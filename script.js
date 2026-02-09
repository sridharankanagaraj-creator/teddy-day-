document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const userNameSpan = document.getElementById('userName');

    if (nameForm) {
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('nameInput').value.trim();
            if (name) {
                localStorage.setItem('teddyDayName', name);
                window.location.href = 'wishes.html';
            }
        });
    }

    if (userNameSpan) {
        const name = localStorage.getItem('teddyDayName') || 'Friend';
        userNameSpan.textContent = name;
    }

    // Ensure background music plays
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.volume = 0.3; // Set volume to 30%
        bgMusic.play().catch(function(error) {
            console.log('Autoplay prevented:', error);
        });
    }
});
