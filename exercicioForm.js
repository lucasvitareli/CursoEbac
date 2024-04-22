
function validarFormulario(event) {
    event.preventDefault() //Impede o envio do formulário padrao


// Obtém os valores dos campos
    var campoA = parseFloat(document.getElementById('campoA').value)
    var campoB = parseFloat(document.getElementById('campoB').value)

// Verifica se o número B é maior que o numero A 
    if (campoB > campoA) {
    document.getElementById('msg').style.color = 'white'
    document.getElementById('msg').style.backgroundColor = 'green'
    document.getElementById('msg').innerText = "Válido! B é maior que A."
    
    } else {
    window.alert ('Formulário inválido, o valor do Campo A nao pode ser maior ou igual ao valor do campo B')
    document.getElementById('msg').style.color = 'white'
    document.getElementById('msg').style.backgroundColor = 'red'
    document.getElementById('msg').innerText = "Inválido! B precisa ser maior que A."
    }
}

document.getElementById('meuFormulario').addEventListener('submit', validarFormulario);

/**/