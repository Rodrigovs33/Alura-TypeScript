import { formataData, formatarValor } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formataData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
;
rendenizarSaldo();
export function rendenizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarValor(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        rendenizarSaldo();
    }
};
export default SaldoComponent;
