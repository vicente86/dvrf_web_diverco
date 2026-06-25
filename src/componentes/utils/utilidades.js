
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