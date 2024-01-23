import { atualizarSaldo, getSaldo } from "./saldo-component.js";
import { Transacao } from "../types/transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";

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
    
    let tipotransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
    let saldo: number = getSaldo();

    if(tipotransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;

    }else if(tipotransacao == TipoTransacao.TRANSFERENCIA || tipotransacao == TipoTransacao.PAGAMENTO_BOLETO){
        saldo -= valor;

    }else{
        
        alert("Tipo de Transação é invalido");
        return;
    };
    
    atualizarSaldo(saldo);

    const novaTrasacao: Transacao = {
        tipoTransacao: tipotransacao,
        valor: valor,
        data: data
    }

    console.log(novaTrasacao);
    elementoFormulario.reset();
});

