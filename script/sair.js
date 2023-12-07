var sair = document.getElementById('sair')

sair.addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('materia');
    window.location="index.html"
})