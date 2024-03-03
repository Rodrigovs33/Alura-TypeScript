import { Transacao } from "../types/transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    try
    {
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

        const novaTrasacao: Transacao = {
            tipoTransacao: tipotransacao,
            valor: valor,
            data: data
        }

        Conta.registrarTransacao(novaTrasacao)
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch(erro){
        alert(erro.message);
    }

});

