
export function transicaoPag(){

    const elBody = document.querySelector("body");
    const containerSp = document.querySelector("#containerSp");
    const canvas = document.createElement("canvas");
    const estiloGeralSp = `width: 100%; height: 100svh; position: absolute; 
    left: 0px; top: 0px; z-index: 1000; background-color: #000; display: flex; justify-content: center; align-items: center;`;

    let minhaAnimacao;
    let containerSpn;
    let conta = 0;
    let porcento = 100;
    let opac = 1;
    
    // Cria dois elementos html no body para compor a animação.
    function criarElementos(){
        containerSpn = document.createElement("div");
        containerSpn.setAttribute("id", "containerSp");
        containerSpn.style.cssText = estiloGeralSp;
        elBody.appendChild(containerSpn);
    }

    // função da animação usando o método do javascript requestAnimationFrame()
    function fanima(){

        const anima = () => {
         
            minhaAnimacao = requestAnimationFrame(anima);
            
            document.querySelector("#containerSp").appendChild(canvas);
            
            if(conta % 2 == 0){
                porcento -= 1;
                if(porcento < 20 && porcento > 0){
                    if(opac > 0){
                        document.querySelector("#containerSp").style.opacity = `${opac}`;
                        opac -= 0.05
                    }
                }
            }

            elBody.style.position = "relative";
            
            canvas.setAttribute("width", "300px");
            canvas.setAttribute("height", "300px");
            
            const ctx = canvas.getContext("2d");
        
            let raf;
        
            const ball = {
                x: 100,
                y: 100,
                vx: 5,
                vy: 2,
                radius: 25,
                color: "blue",
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.fillStyle = this.color;
                    ctx.fill();
                },
            };
        
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ball.draw();
                ball.x += ball.vx;
                ball.y += ball.vy;
                ball.vy *= 0.99;
                ball.vy += 0.25;
        
                if (
                    ball.y + ball.vy > canvas.height - ball.radius ||
                    ball.y + ball.vy < ball.radius
                ) {
                    ball.vy = -ball.vy;
                }
                if (
                    ball.x + ball.vx > canvas.width - ball.radius ||
                    ball.x + ball.vx < ball.radius
                ) {
                    ball.vx = -ball.vx;
                }
        
                raf = window.requestAnimationFrame(draw);
            }
        
            raf = window.requestAnimationFrame(draw);

            
            ball.draw();
            
            if(porcento == 0){
                canvas.remove();
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
