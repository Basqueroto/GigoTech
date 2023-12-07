let sair = document.getElementById('sair')
let formDy = document.getElementById('ffD')
var user = ''


formDy.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('enter')
    let perguntas = document.getElementsByClassName('perguntas')


    var listaResp = []
    for (let i = 0; i < perguntas.length; i++) {

        listaResp.push(document.getElementsByClassName('certa')[i].classList[1])
        if (document.getElementsByClassName('certa')[i].checked){
            listaResp.push(true)
        }
        else {
            listaResp.push(false)
        }
    }

    console.log(listaResp)

    user = localStorage.getItem("user");
    command = localStorage.getItem('materia')

    const data = {
        materia: command,
        user: user,
        respostas: listaResp
    }

    fetch('https://gigoback--basquerotofelip.repl.co/resposta', {
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
            window.location="home.html"
        }
    })
    .catch(function(error) {
        console.log(error);
      });
})

// mat
function fisica() {
    console.log('dentro de fisica')
    localStorage.setItem('materia', 'fisica')
    window.location="quests.html"
}

function biologia() {
    console.log('dentro de biologia')
    localStorage.setItem('materia', 'biologia')
    window.location="quests.html"
}

function quimica() {
    console.log('dentro de quimica')
    localStorage.setItem('materia', 'quimica')
    window.location="quests.html"
}

function matematica() {
    console.log('dentro de matemática')
    localStorage.setItem('materia', 'matematica')
    window.location="quests.html"
}

function portugues() {
    console.log('dentro de portugues')
    localStorage.setItem('materia', 'portugues')
    window.location="quests.html"
}

function historia() {
    console.log('dentro de historia')
    localStorage.setItem('materia', 'historia')
    window.location="quests.html"
}

function arte() {
    console.log('dentro de arte')
    localStorage.setItem('materia', 'arte')
    window.location="quests.html"
}

function ingles() {
    console.log('dentro de ingles')
    localStorage.setItem('materia', 'ingles')
    window.location="quests.html"
}

function sociologia() {
    console.log('dentro de sociologia')
    localStorage.setItem('materia', 'sociologia')
    window.location="quests.html"
}


//
let body = document.getElementById('charge')

function limpaReturn (dict) {
    retirar2 = 'ObservedDict(value='
    retirar3 = 'ObservedList(value='
    retirar4 = ')'

    let texto
    texto = dict.replaceAll(retirar2, ' ')
    texto = texto.replaceAll(retirar3, ' ')
    texto = texto.replaceAll(retirar4, ' ')

    texto = texto.replaceAll("'", '"')
    texto = texto.replaceAll("'", '"')
    
    console.log(texto)
    return texto
}

function charge () {
    user = localStorage.getItem("user");
    command = localStorage.getItem('materia')
    console.log(user)
    console.log(command)
    const data = {
        materia: command,
        email: user
    }
    acert = ''
    fetch('https://gigoback--basquerotofelip.repl.co/form', {
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
        if (acert){
            console.log(acert)
            console.log(typeof(acert))

            obj = limpaReturn(acert)
            obj = JSON.parse(obj)
            console.log(obj)

            //formDy

            for(let i = 0; i < obj.length; i++){
                var dQest = document.createElement('div')
                dQest.classList.add('perguntas')

                let quest = document.createElement('p')
            
                quest.innerHTML = obj[i].questao.enunciado
                quest.classList.add('pergunt')
                dQest.appendChild(quest)

                let divalter = document.createElement('div')
                divalter.classList.add('divAlter')
                for (let j = 0; j < obj[i].questao.options.length; j++){
                    let respDiv = document.createElement('div')
                    respDiv.classList.add('alternativ')
                    
                    let alternativa = document.createElement('input')
                    alternativa.type = 'radio'
                    alternativa.name = i
                    alternativa.classList.add(i)
                    alternativa.classList.add(obj[i].tema)

                    let label = document.createElement('p')
                    label.innerHTML = obj[i].questao.options[j]
                    if (label.innerHTML == obj[i].questao.resposta_correta){
                        alternativa.classList.add('certa')
                    }

                    respDiv.appendChild(alternativa)
                    respDiv.appendChild(label)
                    
                    divalter.appendChild(respDiv)
                }
                dQest.appendChild(divalter)
                formDy.appendChild(dQest)
            }

            var submitBtn = document.createElement('button')
            submitBtn.type = 'submit'
            submitBtn.innerHTML = 'enviar'
            submitBtn.classList.add('btnFF')

            formDy.appendChild(submitBtn)
            
        }
    })
    .catch(function(error) {
        console.log(error);
      });
}

