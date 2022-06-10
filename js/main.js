const calcular = document.querySelector("#button") 

// Função para mostrar a Tabela 
function mostrarTabela (imc, peso) {
    let varIMC = imc;
    let varPeso = peso;
    let varTextoTabela = document.querySelector("#textoTabela");

    let magreza = document.getElementById("magreza");
    let normal = document.getElementById("normal");
    let sobrepeso = document.getElementById("sobrepeso");
    let obesidade = document.getElementById("obesidade");

    if (imc < 16.4) {
        magreza.classList.add('tabela-verde');

        normal.classList.remove('tabela-verde');
        sobrepeso.classList.remove('tabela-verde');
        obesidade.classList.remove('tabela-verde');

        var p1 = 49.1;

        var paragrafoWeight01 = document.querySelector("#p01").innerHTML = `${p1}`;

        varTextoTabela.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <strong> ${paragrafoWeight01} kg. </strong>`;

    }else if (imc < 25.1) {
        normal.classList.add('tabela-verde');

        magreza.classList.remove('tabela-verde');
        sobrepeso.classList.remove('tabela-verde');
        obesidade.classList.remove('tabela-verde');

        var p1 = 49.1;
        var p2 = 75.1;

        var paragrafoWeight01 = document.querySelector("#p01").innerHTML = `${p1}`;
        var paragrafoWeight02 = document.querySelector("#p02").innerHTML = `${p2}`;

        varTextoTabela.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <strong> ${paragrafoWeight01} e ${paragrafoWeight02} kg. </strong>`;

    }else if (imc < 29.7) {
        sobrepeso.classList.add('tabela-verde');
        
        magreza.classList.remove('tabela-verde');
        normal.classList.remove('tabela-verde');
        obesidade.classList.remove('tabela-verde');

        var p1 = 75.1;
        var p2 = 88.9;

        var paragrafoWeight01 = document.querySelector("#p01").innerHTML = `${p1}`;
        var paragrafoWeight02 = document.querySelector("#p02").innerHTML = `${p2}`;

        varTextoTabela.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <strong> ${paragrafoWeight01} e ${paragrafoWeight02} kg. </strong>`;
    }else {
        obesidade.classList.add('tabela-verde');

        magreza.classList.remove('tabela-verde');
        normal.classList.remove('tabela-verde');
        sobrepeso.classList.remove('tabela-verde');

        var p1 =  88.9;

        var paragrafoWeight01 = document.querySelector("#p01").innerHTML = `${p1}`;

        varTextoTabela.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre <strong> ${paragrafoWeight01} kg. </strong>`;

    }
} 

// Função que mostra os resultados
function mostrarResultado() {
    const mostrar = document.querySelector(".disabled");
    mostrar.style.display = "block";
}

// Função para Calcular o IMC
function calcularIMC(peso, altura) {
    return ((parseFloat(peso) / (parseFloat(altura) ** 2))).toFixed(2);
}

// Função para o IMC
function imc() {
    const idade = document.querySelector("#idade").value
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    const resultado = document.querySelector("#resultado-item")

    document.getElementById("preenhcer").innerHTML = "";

    if(idade !== '' && altura !== '' && peso !== '') {
       const valorIMC = calcularIMC(peso, altura); // Chamando a Função para o Cálculo de IMC

       mostrarResultado(); // Função para mostrar os Resultados depois de Clicar no botão Calcular
       mostrarTabela(valorIMC, peso); // Função para mostrar a Tabela depois de Clicar no botão Calcular
       resultado.innerHTML = `${valorIMC}`
    }else {
        resultado = document.getElementById("preenhcer").innerHTML = "Campos não Preenchidos";
        // resultado.innerHTML = "Campos não Preenchidos"
    }
}

// Evento de Click no botão Calcular
calcular.addEventListener('click', (evento) => {
    evento.preventDefault()
    imc()

    document.getElementById("formulario").reset();
    document.getElementById("idade").focus();
})

