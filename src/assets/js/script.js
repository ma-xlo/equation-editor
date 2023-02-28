const inputBox = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')


inputBox.addEventListener('keyup', () => {
    equationPreview.innerHTML = `\\(${inputBox.value}\\)`
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

//\(x = {-b \pm \sqrt{b^2-4ac} \over 2a}\)