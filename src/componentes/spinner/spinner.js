
export function spinner(permanece){

    const elBody = document.querySelector("body");
    const containerSp = document.querySelector("#containerSp");
    const estiloGeralSp = `width: 100px; height: 100px; position: absolute; left: 50%; 
    bottom: 50px; transform: translanteX(-50%); z-index: 10; display: flex; justify-content: center;`;

    let minhaAnimacao;
    let containerSpn;
    let img;

    // Cria dois elementos html no body para compor a animação.
    function criarElementos(){
        containerSpn = document.createElement("div");
        containerSpn.setAttribute("id", "containerSp");
        img = document.createElement("img");
        img.style.cssText = "width: 100px; height: 100px;";
        img.setAttribute("src", "../../src/assets/spinnerS.svg");
        containerSpn.appendChild(img);
        containerSpn.style.cssText = estiloGeralSp;
        elBody.appendChild(containerSpn);
    }

    // função da animação usando o método do javascript requestAnimationFrame()
    function fanima(){
        
        const anima = () => {
         
            minhaAnimacao = requestAnimationFrame(anima);
            
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
