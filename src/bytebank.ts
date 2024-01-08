let saldo = 3000
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
};


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(!elementoFormulario.checkValidity()){
        alert("É obrigatorio preencher todos os campos!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;
    
    let tipotransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipotransacao == "Depósito") {
        saldo += valor;
    }else if(tipotransacao == "Tranferência" || tipotransacao == "Pagamento de Boleto"){
        valor -= saldo;
    }else{

        alert("Tipo de Transação é invalido");
        return;
    };
    
    elementoSaldo.textContent = saldo.toString();

    const novaTrasacao = {
        Tipotransacao: tipotransacao,
        valor: valor,
        data: valor
    }

    console.log(novaTrasacao);
    elementoFormulario.reset();
});

