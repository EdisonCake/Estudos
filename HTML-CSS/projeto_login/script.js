const iconeBolo = document.getElementById('bolo')

// Ao clicar em "Register", alterna para a página de cadastro.
document.getElementById('register').addEventListener("click", function () {
  var login = document.getElementById('container')
  var signup = document.getElementById('container2')

  if (signup.classList.contains("hidden")) {
    signup.classList.remove("hidden", "fade-out");
    signup.classList.add("fade-in");
    login.classList.remove("fade-in");
    login.classList.add("fade-out");
    setTimeout(function () {
      login.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  } else {
    login.classList.remove("hidden", "fade-out");
    login.classList.add("fade-in");
    signup.classList.remove("fade-in");
    signup.classList.add("fade-out");
    setTimeout(function () {
      signup.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  };
})

// Ao clicar em "cancelar", volta para a tela de login.
document.getElementById('cancel').addEventListener("click", function () {
  var login = document.getElementById('container')
  var signup = document.getElementById('container2')

  if (login.classList.contains("hidden")) {
    login.classList.remove("hidden", "fade-out");
    login.classList.add("fade-in");
    signup.classList.remove("fade-in");
    signup.classList.add("fade-out");
    setTimeout(function () {
      signup.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  } else {
    signup.classList.remove("hidden", "fade-out");
    signup.classList.add("fade-in");
    login.classList.remove("fade-in");
    login.classList.add("fade-out");
    setTimeout(function () {
      login.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  }
})

// Ao digitar a senha, o bolinho fechará o olho.
document.getElementById('senha').addEventListener('focus', function () {

  var senha = document.getElementById('senha')

  if (senha.type = 'password') {
    iconeBolo.src = 'src/images/cake-2.webp';
  } else {
    iconeBolo.src = 'src/images/cake-3.webp';
  };
});

// Ao clicar em "mostrar senha" é exibida a senha
document.getElementById('show-password').addEventListener('change', function () {
  var pass = document.getElementById('senha')
  if (this.checked) {
    pass.type = 'text';
    iconeBolo.src = 'src/images/cake-3.webp';
  } else {
    pass.type = 'password';
    iconeBolo.src = 'src/images/cake-2.webp';
  };
});

// Ao parar de digitar a senha, o bolinho abrirá os olhos.
document.getElementById('username').addEventListener('focus', function () {
  iconeBolo.src = 'src/images/cake.webp'
})

// Ao clicar em "esqueci minha senha", será direcionado para a página de recuperação de senha.
document.getElementById('forgot-password').addEventListener('click', function() {

  var login = document.getElementById('container')
  var recover = document.getElementById('container3')

  if (recover.classList.contains("hidden")) {
    recover.classList.remove("hidden", "fade-out");
    recover.classList.add("fade-in");
    login.classList.remove("fade-in");
    login.classList.add("fade-out");
    setTimeout(function () {
      login.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  } else {
    login.classList.remove("hidden", "fade-out");
    login.classList.add("fade-in");
    recover.classList.remove("fade-in");
    recover.classList.add("fade-out");
    setTimeout(function () {
      recover.classList.add("hidden");
    }, 500); // Espera a animação terminar antes de adicionar a classe hidden
  };
})

// Ao clicar em "enviar", será enviada a senha, exibida uma mensagem, e a página será atualizada.
document.getElementById('send').addEventListener('click', function() {
  var info = document.getElementById('information')
  var mail = document.getElementById('mail')
  var send = document.getElementById('send')

  info.classList.remove('hidden')
  mail.classList.add('hidden')
  send.classList.add('hidden')

  setTimeout(function() {
    location.reload();
  }, 3000);
  
})