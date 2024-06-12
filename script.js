const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const dadosEnviados = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
        "mensagem": e.target.elements["mensagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(dadosEnviados));

    alert("Formulário enviado!");
    location.reload();
    window.scrollTo({
        top: 0
         })
        
})