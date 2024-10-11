function criptografar() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const criptografado = btoa(inputText); 
        document.getElementById('outputText').textContent = criptografado;
    } else {
        document.getElementById('outputText').textContent = 'Por favor, insira um texto para criptografar.';
    }
}

function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    if (email.includes('<') || email.includes('>')) {
        alert("Entrada inválida!");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
