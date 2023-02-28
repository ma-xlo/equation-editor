const inputBox = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')
const clearBtn = document.querySelector('#clear-btn');

inputBox.addEventListener('keyup', () => {
    inputBox.value = inputBox.value.replaceAll('*', '⋅')
    equationPreview.innerHTML = `\\(${inputBox.value}\\)`
    MathJax.Hub.Typeset()
    //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

clearBtn.addEventListener('click', () => {
    equationPreview.innerHTML = inputBox.value = '';
})
