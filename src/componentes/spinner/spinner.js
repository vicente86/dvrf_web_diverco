
export function spinner(permanece){

    const elBody = document.querySelector("body");
    const containerSp = document.querySelector("#containerSp");

    const estiloGeralSp = `width: 100px; height: 100px; border-radius: 
    5px; position: absolute; left: 50%; bottom: 50px; transform: translanteX(-50%); z-index: 10;`;
    
    const estiloDivSpinner = `width: 50px; height: 50px; border-top: 5px solid green; border-radius: 50%;`;

    let cont = 0;
    let grau = 45;
    let minhaAnimacao;

    let containerSpn;
    let divspinner;

    function criarElementos(){
        containerSpn = document.createElement("div");
        containerSpn.setAttribute("id", "containerSp");
        divspinner = document.createElement("div");
        divspinner.classList.add("divspinner");
        containerSpn.appendChild(divspinner);
        divspinner.style.cssText = estiloDivSpinner;
        containerSpn.style.cssText = estiloGeralSp;
        elBody.appendChild(containerSpn);
    }

    function fanima(){
        
        const anima = () => {
            cont ++;
            
            minhaAnimacao = requestAnimationFrame(anima);
            try {
                if(cont % 4 == 0){
                    if(cont == 20){
                        divspinner.style.transform = `rotate(${grau}deg)`;
                        grau += 10;
                    }else {
                        divspinner.style.transform = `rotate(${grau}deg)`;
                        if(grau >= 360){ grau = 0;}
                        else { grau += 10;}
                    }
                }
            } catch (error) {
                console.log('error :>> ', error);
            }
            
            if(permanece == false){
                cancelAnimationFrame(minhaAnimacao)
                document.querySelector("#containerSp").remove();
            }
            
            
            
        }
        minhaAnimacao = requestAnimationFrame(anima);
    }
    
    if(containerSp !== null || undefined){
        fanima();

    }else {
        criarElementos();
        fanima();
    }

}
