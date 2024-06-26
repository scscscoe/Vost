ddocument.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var successMusic = document.getElementById('successMusic');

    // Проверка, если браузер не поддерживает <audio>
    if (!backgroundMusic || !successMusic) {
        console.error('Your browser does not support HTML5 <audio> element.');
        return;
    }

    // Воспроизведение фоновой музыки при загрузке страницы
    backgroundMusic.play().catch(function(error) {
        console.error('Error playing background music:', error);
    });

    // При успешном вводе пароля
    function handleSuccessfulPassword() {
        document.getElementById('result').innerHTML = '<p>Реализуй сайт</p>';
        backgroundMusic.pause(); // Приостанавливаем фоновую музыку
        successMusic.currentTime = 0; // Сбрасываем время воспроизведения
        successMusic.play().catch(function(error) {
            console.error('Error playing success music:', error);
        });

        // Показываем изображение на 3 секунды
        var imageContainer = document.getElementById('imageContainer');
        var resultImage = document.getElementById('resultImage');

        resultImage.style.display = 'block'; // Показываем изображение

        setTimeout(function() {
            resultImage.style.display = 'none'; // Скрываем изображение
        }, 3000); // Показываем изображение на 3 секунды
    }

    // Обработчик клика на кнопку "Проверить пароль"
    document.getElementById('checkPasswordBtn').addEventListener('click', function() {
        var password = '228'; // Пароль
        var userInput = document.getElementById('passwordInput').value.trim(); // Получаем значение из поля ввода и удаляем лишние пробелы

        if (userInput === password) {
            handleSuccessfulPassword();
        } else {
            // Неправильный пароль
            document.getElementById('result').innerHTML = '<p>Неправильный пароль</p>';

            // Показываем изображение на 3 секунды
            var imageContainer = document.getElementById('imageContainer');
            var resultImage = document.getElementById('resultImage');

            resultImage.style.display = 'block'; // Показываем изображение

            setTimeout(function() {
                resultImage.style.display = 'none'; // Скрываем изображение
            }, 3000); // Показываем изображение на 3 секунды
        }
    });
});
