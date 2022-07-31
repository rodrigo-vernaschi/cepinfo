async function getCep() {
    let cep = document.getElementById("cepNumber").value
    try {
        if (cep < 8) {
            alert("Digite o CEP corretamente.\nO CEP deve conter 9 números.")
        } else {
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const response = await fetch(url)
            cepResult = await response.json()
    
            updateFields(cepResult)
            return cepResult
        }  
    } catch (error) {
        alert("CEP incorreto.\nO CEP deve conter 9 números.") 
    }
}

function updateFields(cepResult) {
    if (("erro" in cepResult)) {
        alert("CEP não encontrado.")
        cleanFields()
    } else {
        document.getElementById("streetOutput").value = cepResult.logradouro
        document.getElementById("neighborhoodOutput").value = cepResult.bairro
        document.getElementById("cityOutput").value = cepResult.localidade
        document.getElementById("estateOutput").value = cepResult.uf
    }
}

function cleanFields() {
    document.getElementById("cepNumber").value = ""
    document.getElementById("streetOutput").value = ""
    document.getElementById("neighborhoodOutput").value = ""
    document.getElementById("cityOutput").value = ""
    document.getElementById("estateOutput").value = ""
}

// Navbar Burger
document.addEventListener("DOMContentLoaded", () => {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    navbarBurgers.forEach( element => {
        element.addEventListener("click", () => {
            const target = element.dataset.target
            const $target = document.getElementById(target)

            element.classList.toggle("is-active")
            $target.classList.toggle("is-active")
        })
    })
})