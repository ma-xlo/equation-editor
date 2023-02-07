
        tinymce.init({ 
            selector:'textarea#editor-questao',
            paste_data_images: true,
        });
        
        //Input and output variables
        const input = document.querySelector("#equation-area");
        const output = document.querySelector("#equation-box");

        //Buttons
        const btnBox = document.querySelector("#btn-box");
        const insertBtn = document.querySelector("#insert-btn");
        
        const sumBtn = document.querySelector("#sum-btn");
        const prodBtn = document.querySelector("#prod-btn");
        const sqrtBtn = document.querySelector("#sqrt-btn");
        const realBtn = document.querySelector("#real-btn");
        const pmBtn = document.querySelector("#pm-btn");
        const approxBtn = document.querySelector("#approx-btn");
        const piBtn = document.querySelector("#pi-btn");
        const eulerBtn = document.querySelector("#euler-btn");
        const integralBtn = document.querySelector("#integral-btn");
        const fracBtn = document.querySelector("#frac-btn");
        const deltaBtn = document.querySelector("#delta-btn");
        const logBtn = document.querySelector("#log-btn");
        const editorBtn = document.querySelector("#editor-btn");
        const modalBtn = document.querySelector("#modal-btn");
        const editorQuest = document.querySelector("#editor-questao");
        const eraserBtn = document.querySelector("#clear-btn");
        

        const displayEditor = () => {
            
            modalBtn.classList.toggle("disabled");

        }

        const displayBtnBox = () => {
            
            document.querySelector(".btn-box").classList.toggle("disabled");
        }

        const clearEditor = () => { 
            input.value = "";
            input.focus();
        }

        //Math Buttons
        const displaySum = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\sum_{i}^{k}"+input.value.slice(curPos));
            input.focus();
        }

        const displayProd = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\prod_{}^{}"+input.value.slice(curPos));
            input.focus();
        }

        const displaySqrt = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\sqrt[indice]{radicando}"+input.value.slice(curPos));
            input.focus();
        }

        const displayReal = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\mathbb{R}"+input.value.slice(curPos));
            input.focus();
        }

        const displayPm = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\pm"+input.value.slice(curPos));
            input.focus();
        }

        const displayApprox = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\cong"+input.value.slice(curPos));
            input.focus();
        }

        const displayPi = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\pi "+input.value.slice(curPos));
            input.focus();
        }

        const displayEuler = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"e"+input.value.slice(curPos));
            input.focus();
        }

        const displayIntegral= () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\int_{}^{}"+input.value.slice(curPos));
            input.focus();
        }

        const displayFrac = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\frac{}{}"+input.value.slice(curPos));
            input.focus();
        }

        const displayDelta = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\Delta"+input.value.slice(curPos));
            input.focus();
        }

        const displayLog = () => {
            let curPos = input.selectionStart;
            input.value = (input.value.slice(0,curPos)+"\\log_{}"+input.value.slice(curPos));
            input.focus();
        }
        
        //Generate the equation
        const displayMath = () => {
            if(input.value === "") 
                output.innerHTML = "";

            input.value = input.value.replace("*", "·");

            output.innerHTML = `\\(${input.value}\\)`;
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, output]);
        }

        //Buttons event listeners
        editorBtn.addEventListener("click", displayEditor);
        btnBox.addEventListener("click", displayBtnBox);

        sumBtn.addEventListener("click", displaySum);
        prodBtn.addEventListener("click", displayProd);
        sqrtBtn.addEventListener("click", displaySqrt);
        realBtn.addEventListener("click", displayReal);
        pmBtn.addEventListener("click", displayPm);
        approxBtn.addEventListener("click", displayApprox);
        piBtn.addEventListener("click", displayPi);
        logBtn.addEventListener("click", displayLog);
        integralBtn.addEventListener("click", displayIntegral);
        fracBtn.addEventListener("click", displayFrac);
        deltaBtn.addEventListener("click", displayDelta);
        eraserBtn.addEventListener("click", clearEditor);

        //Text area event listeners
        input.addEventListener("focus", displayMath);
        input.addEventListener("keyup", displayMath);

        insertBtn.addEventListener("click", () => {
			let div = document.getElementById('equation-box');
			html2canvas(div).then(
				function (canvas) {
					document.getElementById('img-screenshot').append(canvas);
					document.getElementById('editor-questao').value = canvas;
                    
                    
				})
            modalBtn.classList.toggle("disabled");

        });

        window.onclick = function(event) {
            if (event.target == modalBtn) {
              modalBtn.classList.toggle("disabled");
            }
          }

        document.querySelector("span").onclick = function() {
            modalBtn.classList.toggle("disabled");
          }
