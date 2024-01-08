// Tipos primitivos 

let valor: number = 3000; 
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22; 

// Arrays 

const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);


// enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}


// tipos Personalizados (type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao;
    Data: Date;
    valor: number;
}


const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    Data: new Date(),
    valor:0
}