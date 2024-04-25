function pegarNota() {
    Let nota = localStorage.getItem("nota")

    Let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
} 

pegarNota()