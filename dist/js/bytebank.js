let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
;
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("É obrigatorio preencher todos os campos!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipotransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipotransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipotransacao == "Tranferência" || tipotransacao == "Pagamento de Boleto") {
        valor -= saldo;
    }
    else {
        alert("Tipo de Transação é invalido");
        return;
    }
    ;
    elementoSaldo.textContent = saldo.toString();
    const novaTrasacao = {
        Tipotransacao: tipotransacao,
        valor: valor,
        data: valor
    };
    console.log(novaTrasacao);
    elementoFormulario.reset();
});
