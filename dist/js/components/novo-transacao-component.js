import { atualizarSaldo, getSaldo } from "./saldo-component.js";
import { TipoTransacao } from "../types/TipoTransacao.js";

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
    let saldo = getSaldo();

    if (tipotransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipotransacao == TipoTransacao.TRANSFERENCIA || tipotransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é invalido");
        return;
    };
    
    atualizarSaldo(saldo);

    const novaTrasacao = {
        tipoTransacao: tipotransacao,
        valor: valor,
        data: data
    };
    console.log(novaTrasacao);
    elementoFormulario.reset();
});
