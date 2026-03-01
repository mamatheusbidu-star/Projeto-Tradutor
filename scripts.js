/*
https://api.mymemory.translated.net/get?q=
Hello%20World!
&langpair=en|it

fetch -> chamar API
await e async -> esperar resposta da api
json ->
*/
let inputTexto = document.querySelector(".input-texto")
let idioma = document.querySelector(".idioma")
let traducao = document.querySelector(".traducao")
async function traduzir(){ // Função escrever e traduzir


let endereco = "https://api.mymemory.translated.net/get?q=" 
+ inputTexto.value + "&langpair=pt-BR|" + idioma.value

let resposta = await fetch(endereco)
let dados = await resposta.json()

traducao.innerHTML = dados.responseData.translatedText

console.log(dados)
}

function OuvirVoz() {
    let voz = window.webkitSpeechRecognition

    let reconhecimento = new voz()

    reconhecimento.lang = "pt-BR"

    reconhecimento.onresult = (evento) => {
        inputTexto.textContent = evento.results[0][0].transcript
        traduzir()
    }

    reconhecimento.start()
}
