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
    if (tipotransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipotransacao == TipoTransacao.TRANSFERENCIA || tipotransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        valor -= saldo;
    }
    else {
        alert("Tipo de Transação é invalido");
        return;
    }
    ;
    elementoSaldo.textContent = saldo.toString();
    const novaTrasacao = {
        tipoTransacao: tipotransacao,
        valor: valor,
        data: data
    };
    console.log(novaTrasacao);
    elementoFormulario.reset();
});
