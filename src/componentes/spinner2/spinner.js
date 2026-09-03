
export function spinner(permanece){

    const elBody = document.querySelector("body");
    const containerSp = document.querySelector("#containerSp");
    const estiloGeralSp = `width: 98%; height: 110px; position: absolute; 
    bottom: 200px; z-index: 10; display: flex; justify-content: center;`;

    let minhaAnimacao;
    let containerSpn;
    let divspi = null;
    let setaS = null;
    let grau = 10;
    let conta = 0;

    // Cria dois elementos html no body para compor a animação.
    function criarElementos(){
        containerSpn = document.createElement("div");
        setaS = document.createElement("p");
        containerSpn.setAttribute("id", "containerSp");
        divspi = document.createElement("div");
        divspi.style.cssText = `width: 50px; height: 50px; border: 7px solid #00ff001a; border-left: 7px solid #00ff00; border-radius: 50%; position: relative; transition: all 0.3s ease-in-out;`;
        setaS.style.cssText = `color: #00ff00; font-size: 18pt; position: absolute; left: -17px; top:-5px; rotate: -60deg;`;
        setaS.innerHTML = `&#x2B50;`;
        divspi.appendChild(setaS);
        containerSpn.appendChild(divspi);
        containerSpn.style.cssText = estiloGeralSp;
        elBody.appendChild(containerSpn);
    }

    // função da animação usando o método do javascript requestAnimationFrame()
    function fanima(){
        
        const anima = () => {
         
            minhaAnimacao = requestAnimationFrame(anima);
            if(conta % 3 == 0){
                grau += 10;
                if(divspi !== null){
                    divspi.style.transform = `rotate(${grau}deg)`;
                }
            }

            if(permanece == false){
                cancelAnimationFrame(minhaAnimacao);
                document.querySelector("#containerSp").remove();
            }
            conta ++;      
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
