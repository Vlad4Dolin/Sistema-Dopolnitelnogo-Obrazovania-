
        // Получаем модальные окна
        var loginModal = document.getElementById("loginModal");
        var registerModal = document.getElementById("registerModal");
        
        // Получаем кнопки, которые открывают модальные окна
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        
        // Получаем элементы закрытия
        var closeLogin = document.getElementById("closeLogin");
        var closeRegister = document.getElementById("closeRegister");

        // Когда пользователь нажимает на кнопку "Вход", открывается модальное окно
        loginBtn.onclick = function() {
          loginModal.style.display = "block";
        }

        // Когда пользователь нажимает на кнопку "Регистрация", открывается модальное окно
        registerBtn.onclick = function() {
          registerModal.style.display = "block";
        }

        // Когда пользователь нажимает на (x), закрывается модальное окно входа
        closeLogin.onclick = function() {
          loginModal.style.display = "none";
        }

        // Когда пользователь нажимает на (x), закрывается модальное окно регистрации
        closeRegister.onclick = function() {
          registerModal.style.display = "none";
        }

        // Когда пользователь кликает в любое место за пределами модального окна, оно закрывается
        window.onclick = function(event) {
          if (event.target == loginModal) {
            loginModal.style.display = "none";
          } else if (event.target == registerModal) {
            registerModal.style.display = "none";
          }
        }
