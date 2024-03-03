import { formataData, formatarValor } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;



if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formataData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
};

export function getSaldo(): number {
    return saldo;
};

atualizarSaldo(saldo);

export function atualizarSaldo(novoSaldo: number ): void {
    saldo = novoSaldo;
    
    if(elementoSaldo != null) {
    elementoSaldo.textContent = formatarValor(saldo);
    };
};