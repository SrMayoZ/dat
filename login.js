document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar las credenciales (esto es solo un ejemplo, no se deben almacenar contraseñas de esta manera)
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        document.getElementById('loginError').textContent = 'Usuario o contraseña incorrectos';
    }
});
