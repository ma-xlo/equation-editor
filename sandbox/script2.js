const inputBox = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')
const clearBtn = document.querySelector('#clear-btn');
const editorCloseBtn = document.querySelector("#editor-close-btn")
const container = document.querySelector('.container');
const editorBtn =  document.querySelector("#editor-btn")
const insertBtn = document.querySelector('#insert-btn')
const symbolBtn = document.querySelector('.math-symbols-container')
const symbolsBoxBtn = document.querySelector('#symbols-box-btn')
let element = document.querySelector("trix-editor")

// Buttons  Variables ///////////////////////////////////////////////////////////////////////
const summationButton = document.querySelector('#summation-btn')
const productoryButton = document.querySelector('#productory-btn')
const sqrtButton = document.querySelector('#sqrt-btn')
const integralButton = document.querySelector('#integral-btn')
const logButton = document.querySelector('#log-btn')
const piButton = document.querySelector('#pi-btn')
const matrixBracketsButton = document.querySelector('#matrix-brackets-btn')
const symbolRButton = document.querySelector('#symbol-R-btn')
const elementOfButton = document.querySelector('#element-of-btn')
const notElementOfButton = document.querySelector('#not-element-of-btn')
const deltaButton = document.querySelector('#delta-btn')
const subsetButton = document.querySelector('#proper-subset-btn')

// Panels variables ///////////////////////////////////////////////////////////////////////
const section_1 = document.querySelectorAll("#section-1 button")
const hiddenSection_1= document.querySelector("#hidden-section-1")
console.log(section_1)
section_1.forEach(element => {
    element.addEventListener('mouseover', () => {
            hiddenSection_1.classList.remove('hide')
    })
})

section_1.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenSection_1.classList.add('hide')
    })
})


panel1.addEventListener('mouseover', ()=>{

    if(panel1Hidden.classList.contains('hide'))
        panel1Hidden.classList.remove('hide')
    else
        panel1Hidden.classList.add('hide')
})

inputBox.addEventListener('keyup', () => {
    inputBox.focus();
    inputBox.value = inputBox.value.replaceAll('*', '⋅')
    equationPreview.innerHTML = `\\(${inputBox.value}\\)`
    MathJax.Hub.Typeset()
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

clearBtn.addEventListener('click', () => {
    equationPreview.innerHTML = inputBox.value = '';
    inputBox.focus();
})

editorCloseBtn.addEventListener('click', () => {
    container.classList.add('hide');
    symbolBtn.classList.add('hide');
})

editorBtn.addEventListener('click', () => {
    
    container.classList.remove('hide');
    inputBox.focus();
})

symbolsBoxBtn.addEventListener('click', () => {
    symbolBtn.classList.toggle('hide')
    inputBox.focus()
})

insertBtn.addEventListener('click', () => {
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    var attachment = new Trix.Attachment({ content: `${equationPreview.innerHTML}`})
    element.editor.insertAttachment(attachment)
    symbolsBox.classList.add('hide');
    container.classList.add('hide');
})


// Buttons Event Listeners ////////////////////////////////////////////////////////////////
// summationButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\sum_{}^{} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// productoryButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\prod_{}^{} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// sqrtButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\sqrt{} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// integralButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\int_{}^{} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// logButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\log_{b}{n} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// matrixBracketsButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })


// piButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\pi '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// symbolRButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\mathbb{R} '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// elementOfButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\in '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// notElementOfButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\notin '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// deltaButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\Delta '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })

// subsetButton.addEventListener('click', () => {
//     inputBox.focus()
//     inputBox.value += '\\subset '
//     equationPreview.innerHTML = `\\(${inputBox.value}\\)`
//     MathJax.Hub.Typeset()
// })


