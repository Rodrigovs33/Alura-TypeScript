let saldo: number = 3000

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = formatarValor(saldo)
};

if(elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formataData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
};
