let cadForm = document.getElementById('cadform')
let cadLog = document.getElementById('loginForm')
// sistema de cadastro
cadForm.addEventListener('submit', (event) => {
    event.preventDefault()

    var form = new FormData(cadForm)
    var username = form.get('username')
    var email = form.get('email')
    var senha = form.get('senha')

    const data = {
        user: username,
        email: email,
        password: senha
    }

    fetch('https://gigoback--basquerotofelip.repl.co/cadastrar', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converta o objeto em uma string JSON
    })
    .then((resp) => resp.json())
    .then(function(data) {
        let acert = data.message // saberemos se deu certo
        console.log(acert)
        if (acert == 'True'){
            localStorage.setItem("user", email);
            console.log(user)
            window.location="home.html"
        }
    })
    .catch(function(error) {
        console.log(error);
      });

})

cadLog.addEventListener('submit', (event) => {
    event.preventDefault()

    var form = new FormData(cadLog)
    var logg = form.get('user')
    var senha = form.get('senha')

    const data = {
        login: logg,
        password: senha
    }

    fetch('https://gigoback--basquerotofelip.repl.co/login', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converta o objeto em uma string JSON
    })
    .then((resp) => resp.json())
    .then(function(data) {
        let acert = data.message // saberemos se deu certo
        console.log(acert)
        if (acert == 'True'){
            localStorage.setItem("user", email);
            console.log(user)
            window.location="home.html"
        }
    })
    .catch(function(error) {
        console.log(error);
      });

})