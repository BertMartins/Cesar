function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = parseInt(document.getElementById("chave").value);
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        let codigoChar = mensagem.charCodeAt(i);
        if (codigoChar >= 65 && codigoChar <= 90) {
            resultado += String.fromCharCode(((codigoChar - 65 + chave) % 26) + 65);
        } else if (codigoChar >= 97 && codigoChar <= 122) {
            resultado += String.fromCharCode(((codigoChar - 97 + chave) % 26) + 97);
        } else {
            resultado += mensagem.charAt(i);
        }
    }

    document.getElementById("resultado").value = resultado;
}

function descriptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = parseInt(document.getElementById("chave").value);
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        let codigoChar = mensagem.charCodeAt(i);
        if (codigoChar >= 65 && codigoChar <= 90) {
            resultado += String.fromCharCode(((codigoChar - 65 - chave + 26) % 26) + 65);
        } else if (codigoChar >= 97 && codigoChar <= 122) {
            resultado += String.fromCharCode(((codigoChar - 97 - chave + 26) % 26) + 97);
        } else {
            resultado += mensagem.charAt(i);
        }
    }

    document.getElementById("resultado").value = resultado;
}
