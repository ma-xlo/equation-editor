const inputBox = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')


inputBox.addEventListener('keyup', () => {

    inputBox.value = inputBox.value.replaceAll('*', '⋅')

    equationPreview.innerHTML = `\\(${inputBox.value}\\)`
    MathJax.Hub.Typeset()
    //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);


})
