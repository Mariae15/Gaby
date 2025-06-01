function validarLogin() {
  const usuario = document.getElementById('username').value;
  const senha = document.getElementById('password').value;
  const erro = document.getElementById('error-message');

  const usuarioCorreto = 'gabriely';
  const senhaCorreta = 'musica123';

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert('Bem-vinda, Gabriely!');
    window.location.href = 'index.html';
    return false;
  } else {
    erro.textContent = 'Acesso negado. Somente Gabriely pode entrar.';
    return false; 
  }
}
