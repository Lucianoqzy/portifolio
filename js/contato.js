const formulario = document .querySelector("#formulario");
const resposta = document.querySelector("#resposta");

formulario .addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    resposta.textContent = `Obrigado, ${nome}, sua mensagem foi enviada com sucesso.`;
const mensagem = document.querySelector("#mensagem").value.trim()

    if (mensagem.length < 10) {
        resposta.textContent = "minimo de 10 caracteres";
        resposta.classList.add("erro");
    } else {
        resposta.textContent = `Obrigado, ${nome}, sua mensagem foi enviada com sucesso.`;
        resposta.classList.remove("erro");
        formulario.reset();
    }
});