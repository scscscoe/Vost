document.addEventListener('DOMContentLoaded', (event) => {
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('message');
    const backgroundMusic = document.getElementById('backgroundMusic');

    backgroundMusic.play();

    submitBtn.addEventListener('click', () => {
        const userPassword = passwordInput.value;
        if (userPassword === '228') {
            messageDiv.innerHTML = '<p>Угадали!</p><img src="success.png" alt="Угадали!">';
            backgroundMusic.src = 'music2.mp3';
            backgroundMusic.play();
        } else {
            messageDiv.innerHTML = '<p>Не угадали!</p><img src="failure.png" alt="Не угадали!">';
            backgroundMusic.src = 'music.mp3';
            backgroundMusic.play();
        }
    });
});
