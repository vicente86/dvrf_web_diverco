

export function spinner(permanece = false, limite = 1000){

    const elBody = document.querySelector("body");
    const containerSp = document.querySelector("#containerSp");

    const estiloGeralSp = `width: 100px; height: 100px; border-radius: 5px; position: absolute; left: 50%; bottom: 50px; transform: translanteX(-50%); z-index: 10;`;
    const estiloDivSpinner = `width: 50px; height: 50px; border-top: 5px solid green; border-radius: 50%;`;
    let minhaAnimacao;

    let cont = 0;
    let grau = 45;
    let l = limite

    if(permanece == true){
        
        if(containerSp !== null){
            if(permanece == false){
                containerSp.remove();
                console.log("Desapareceu MEU CARALHO =============================");
            }
    
        }else {
            if(permanece == true){
    
                const containerSpn = document.createElement("div");
                containerSpn.setAttribute("id", "containerSp");
                const divspinner = document.createElement("div");
                divspinner.classList.add("divspinner");
                containerSpn.appendChild(divspinner);
                divspinner.style.cssText = estiloDivSpinner;
                containerSpn.style.cssText = estiloGeralSp;
                elBody.appendChild(containerSpn);
    
                // Animação
                function anima(){
    
                    cont ++;
                    console.log("permanece => ", permanece);
    
                    if(cont <= l){
                        
                        minhaAnimacao = requestAnimationFrame(anima);
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

                        if(cont == 500){
                            console.log('permanece :>> ', permanece);
                            cancelAnimationFrame(minhaAnimacao)
                        }
                        
                    }else {
                        containerSpn.remove();
                    }
                    
                }
                minhaAnimacao = requestAnimationFrame(anima);
            }
    
        }
    }else {

        console.log("NÃO ENTROU NA ANIMAÇÃO =============================");
        l = 20

    }


}

