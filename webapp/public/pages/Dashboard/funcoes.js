// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    // window.alert(`Seja bem-vindo, ${nome}!`);
    b_usuario.innerHTML = nome;

    // finalizarAguardar();
  } else {
    window.location = "../Cadastro/login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.EMAIL_USUARIO = "";
  sessionStorage.NOME_USUARIO = "";
  sessionStorage.CNPJ_USUARIO = 0;
  sessionStorage.ID_USUARIO = 0;
  sessionStorage.IS_LOGGED = false;
  // finalizarAguardar();
  window.location = "../Cadastro/login.html";
}

// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}
