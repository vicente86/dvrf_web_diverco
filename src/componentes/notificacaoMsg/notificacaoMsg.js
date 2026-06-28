/** 
 * @param {string} bgc verde ou amarelo 
 * @param {string} titulo 
 * @param {string} contexto 
 * @param {number} ml é o tempo em milisegundos da animação, que por padrão é 3000
 */
export function MenssagemModal(bgc = "", titulo = "", contexto = "", ml = 3000){
    const elBody = document.querySelector("body")
    const contMsMD = document.querySelector(".contMsMD")
    const maxcont = Math.floor((ml/1000) * 61) + 2
    
    const estiloGeralEl1 = `
        width: 300px; 
        margin-bottom: 5px; 
        min-height: 40px; 
        background-color: ${bgc == 'verde'? 'green' :bgc == 'amarelo'? 'yellow' :bgc == 'vermelho' ? 'red' : 'yellow' }; color: ${bgc == 'verde' || bgc == 'vermelho' ? 'white' : 'black'}; 
        border-radius: 5px;
    `
     
    if(elBody !== null && elBody !== undefined){
        
        if(contMsMD !== null){

            contMsMD.style.cssText = `display: flex; flex-direction: column; width: 300px; height: auto; margin-bottom: 10px; position: fixed; right: 5px; bottom: 10px; z-index: 200;`
            const el1 = document.createElement("div")
            const el2 = document.createElement("div")
            const el3 = document.createElement("div")
            const el4 = document.createElement("progress")

            const idgerado = `modalanima${Math.floor(Math.random() * (2000 - 1) + 1)}`
            el1.setAttribute("id", idgerado)
            el1.style.cssText = estiloGeralEl1
            el2.style.cssText = `text-align: center; padding: 5px 0px; font-weight: 600;`
            el3.style.cssText = `text-align: center; padding: 2px; font-weight: 400;`
            el4.style.cssText = `width: 100%;`
            
            el2.innerText = titulo
            el3.innerText = contexto
            el4.setAttribute("value", "0")
            el4.setAttribute("max", `${pInt(maxcont, 1)}`)

            el1.appendChild(el2)
            el1.appendChild(el3)
            el1.appendChild(el4)

            contMsMD.appendChild(el1)

            // Animação
            let start
            let cont = 0

            function anima(timestamp){

                if(start == undefined) start = timestamp
                
                let progresso = timestamp - start
                cont ++
            
                animacao(cont, el1, maxcont, el4)

                if(progresso <= ml){
                    requestAnimationFrame(anima)
                }else {
                    el1.remove()
                }
                
            }
            
            requestAnimationFrame(anima)
            
        }
        else {

            const elPrincipal = document.createElement("div")
            elPrincipal.setAttribute("class", "contMsMD")
            elPrincipal.style.cssText = `display: flex; flex-direction: column; width: 300px; height: auto; margin-bottom: 10px; position: fixed; right: 5px; bottom: 10px; z-index: 200;`
            elBody.appendChild(elPrincipal)
    
            const el1 = document.createElement("div")
            const el2 = document.createElement("div")
            const el3 = document.createElement("div")
            const el4 = document.createElement("progress")

            const idgerado = `modalanima${Math.floor(Math.random() * (2000 - 1) + 1)}`
            el1.style.cssText = estiloGeralEl1
            el2.style.cssText = `text-align: center; padding: 5px 0px; font-weight: 600;`
            el3.style.cssText = `text-align: center; padding: 2px; font-weight: 400;`
            el4.style.cssText = `width: 100%;`
            
            el1.setAttribute("id", idgerado)
            el2.innerText = titulo
            el3.innerText = contexto
            el4.setAttribute("value", "0")
            el4.setAttribute("max", `${pInt(maxcont, 1)}`)

            el1.appendChild(el2)
            el1.appendChild(el3)
            el1.appendChild(el4)

            elPrincipal.appendChild(el1)

            
            let start
            let cont = 0

            function anima(timestamp){

                if(start == undefined) start = timestamp
                
                let progresso = Math.floor(timestamp - start)
                cont ++

                animacao(cont, el1, maxcont, el4) 

                if(progresso <= ml){
                    requestAnimationFrame(anima)
                }else {
                    el1.remove()
                }
                
            }
            
            requestAnimationFrame(anima)
        }
        

    }    
}

// gera um número inteiro reprensentando a porcentagem
function pInt(max = 0, num = 0){
    return Math.floor(max * num);
}

//
function animacao(cont, el1, max, el4){

    // 0%  10%  11%  14%  18%  80%  100%
    // 182 iterações equivalentes a 3000 milisegundos

    // Primeira parte da animação de 0% a 10%
    if(pInt(max, 0.01) == cont){el1.style.scale = "0.1"} if(pInt(max, 0.02) == cont){el1.style.scale = "0.2"} if(pInt(max, 0.03) == cont){el1.style.scale = "0.3"} 
    if(pInt(max, 0.04) == cont){el1.style.scale = "0.4"} if(pInt(max, 0.05) == cont){el1.style.scale = "0.6"} if(pInt(max, 0.06) == cont){el1.style.scale = "0.7"} 
    if(pInt(max, 0.07) == cont){el1.style.scale = "0.8"} if(pInt(max, 0.09) == cont){el1.style.scale = "0.9"} if(pInt(max, 0.1) == cont){el1.style.scale = "1"}

    // Segunda parte mais ou menos de 11% a 18%
    if(pInt(max, 0.11) == cont){el1.style.transform = "rotate(0deg)";} if(pInt(max, 0.12) == cont){el1.style.transform = "rotate(5deg)";} 
    if(pInt(max, 0.13) == cont){el1.style.transform = "rotate(-5deg)";} if(pInt(max, 0.14) == cont){el1.style.transform = "rotate(0deg)";} 
    if(pInt(max, 0.15) == cont){el1.style.transform = "rotate(5deg)";} if(pInt(max, 0.16) == cont){el1.style.transform = "rotate(-5deg)";} 
    if(pInt(max, 0.18) == cont){el1.style.transform = "rotate(0deg)";}
    
    //Terceira parte mais ou menos de 80% a 100%
    if(cont >= pInt(max, 0.8)){el1.style.transform = `translateX(${(cont - pInt(max, 0.8))*(15)}px)`;}

    el4.setAttribute("value", `${cont*1.25}`);
}