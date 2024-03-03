import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formataData, formatarValor } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato : HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato (): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGrupoTransacoes();
    let htmlRegistroTransacoes: String = "";
    elementoRegistroTransacoesExtrato.innerHTML = "";

    for(let grupoTransacao of gruposTransacoes){
        let htmlTransacaoitem: string = "";
        for(let Transacao of grupoTransacao.transacoes){
            htmlTransacaoitem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${Transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarValor(Transacao.valor)}</strong>
                </div>
                <time class="data">${formataData(Transacao.data, FormatoData.DIA_MES)}</time>
            </div>`;
        };

        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoitem}
        </div>
        `
    }

    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
