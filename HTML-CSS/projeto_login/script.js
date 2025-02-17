
const username = document.getElementById('user');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmPassword');
const iconeSenha = document.getElementById('iconeSenha');
const iconeBolo = document.getElementById('iconeBolo');
const confirmar = document.getElementById('btn-confirm')

const follow = document.getElementById('btn-signup')
const cancel = document.getElementById('btn-cancel')
const login = document.getElementById('login')
const signup = document.getElementById('signup')

const senha1 = document.getElementById('sgn-senha');
const senha2 = document.getElementById('confirmPassword');

// Evento para quando o campo de senha estiver sendo digitado
senha.addEventListener('input', function() {
  if (senha.value.length > 0) {
    // Altere para o caminho da imagem que deseja exibir enquanto digita
    iconeBolo.src = 'src/images/cake-2.webp';
  } else {
    iconeBolo.src = 'src/images/cake.webp'; // Volta para a imagem original quando o campo está vazio
    senha.type = 'password'; // Garante que o campo volta ao tipo 'password'
    iconeSenha.src = 'src/images/visibility.png'; // Volta para o ícone original
  }
});

// Evento para quando o ícone de olho é clicado
iconeSenha.addEventListener('click', function() {
  if (senha.type === 'password') {
    senha.type = 'text';
    iconeSenha.src = 'src/images/visibility-off.png'; // Altere para o caminho do ícone de olho aberto
    if (iconeBolo.src.endsWith('cake-2.webp')) {
      iconeBolo.src = 'src/images/cake-3.webp'; // Altere para o caminho da imagem que deseja exibir ao mostrar a senha
    } else {
      iconeBolo.src = 'src/images/cake.webp';
    }
  } else {
    senha.type = 'password';
    iconeSenha.src = 'src/images/visibility.png'; // Altere para o caminho do ícone de olho fechado
    iconeBolo.src = 'src/images/cake-2.webp'; // Altere para o caminho da imagem que deseja exibir ao ocultar a senha
  }
});

// Evento para quando o campo de username estiver em foco
username.addEventListener('focus', function() {
  iconeBolo.src = 'src/images/cake.webp'; // Volta para a imagem original quando o campo de username está em foco
}); 

senha.addEventListener('focus', function() {
    if (senha.type = 'password') {
        iconeBolo.src = 'src/images/cake-2.webp';
        if (iconeSenha.src === 'src/images/visibility-off.png') {
            iconeSenha.src = 'src/images/visibility.png';
        };
    } else {
        iconeBolo.src = 'src/images/cake-3.webp';
        if (iconeSenha.src === 'src/images/visibility.png') {
            iconeSenha.src = 'src/images/visibility-off.png';
        };
    };
})

// Evento para ocultar ou exibir as páginas de login ou cadastro
follow.addEventListener('click', function() {
    login.classList.add('hidden')
    signup.classList.remove('hidden')
})

cancel.addEventListener('click', function() {
    login.classList.remove('hidden')
    signup.classList.add('hidden')
})

// Verificando se as senhas batem na hora do cadastro
confirmar.addEventListener('click', function() { 
    const exibir1 = senha1.value;
    const exibir2 = senha2.value;
})