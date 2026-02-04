function validarCPF() {
    let cpf = document.getElementById("cpf").value;
    let resultado = document.getElementById("resultado");

    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        resultado.innerHTML = "❌ CPF inválido!";
        resultado.style.color = "red";
        return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let digito1 = (soma * 10) % 11;
    digito1 = digito1 === 10 ? 0 : digito1;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    let digito2 = (soma * 10) % 11;
    digito2 = digito2 === 10 ? 0 : digito2;

    if (
        digito1 === parseInt(cpf.charAt(9)) &&
        digito2 === parseInt(cpf.charAt(10))
    ) {
        resultado.innerHTML = "✅ CPF válido!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ CPF inválido!";
        resultado.style.color = "red";
    }
}
