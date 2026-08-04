
export const nomesMesesPT = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
export const nomesMesesUS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const diasSemanaUS = ["Sun", "Mom", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const diasSemanaPT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function criaArray(qtde){
    let arr = [];
    
    if(qtde == null || qtde == undefined){
        qtde = 0;
    }

    for(let i = 0; i < qtde; i++){
        arr.push(i);
    }
    return arr;
}

export const pessoas = [
        {id: 1, nome: "Ana Silva", cidade: "Recife", estado: "Pernambuco", siglaEstado: "PE"},
        {id: 2, nome: "Carlos Eduardo", cidade: "São Paulo", estado: "São Paulo", siglaEstado: "SP"},
        {id: 3, nome: "Mariana Costa", cidade: "Belo Horizonte", estado: "Minas Gerais", siglaEstado: "MG"},
        {id: 4,nome: "Lucas Pereira",cidade: "Curitiba",estado: "Paraná", siglaEstado: "PR"},
        {id: 5,nome: "Beatriz Lima",cidade: "Salvador",estado: "Bahia",siglaEstado: "BA"},
        {id: 6, nome: "Jina Silva", cidade: "Recife", estado: "Pernambuco", siglaEstado: "PE"},
        {id: 7, nome: "Amelha Eduardo", cidade: "São Paulo", estado: "São Paulo", siglaEstado: "SP"},
        {id: 8, nome: "Marcela Costa", cidade: "Belo Horizonte", estado: "Minas Gerais", siglaEstado: "MG"},
        {id: 9,nome: "Braga Pereira",cidade: "Curitiba",estado: "Paraná", siglaEstado: "PR"},
        {id: 10,nome: "Rafaela Lima",cidade: "Salvador",estado: "Bahia",siglaEstado: "BA"}
    ];