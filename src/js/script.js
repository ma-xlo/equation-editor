/// Editor buttons ///////////////////////////////////////////////////////////////////////////////////
const equationInput = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')
const insertBtn = document.querySelector('#insert-btn')
const symbolBtn = document.querySelector('.math-symbols-container')
const clearBtn = document.querySelector('#clear-btn')
const editorBtn =  document.querySelector("#editor-open-btn")
const editorCloseBtn = document.querySelector("#editor-close-btn")
const editorBox = document.querySelector('#editor-box');
const symbolsBox = document.querySelector("#symbols-box")
const symbolsBoxBtn = document.querySelector("#symbols-box-btn")
const editorContainer = document.querySelector(".editor-container")
let element = document.querySelector("trix-editor")

// Buttons  Variables ///////////////////////////////////////////////////////////////////////
const summationButton = document.querySelector('#summation-btn')
const productoryBtn = document.querySelector('#productory-btn')
const sqrtButton = document.querySelector('#sqrt-btn')
const integralBtn = document.querySelector('#integral-btn')
const logButton = document.querySelector('#log-btn')
const piButton = document.querySelector('#pi-btn')
const matrixBracketsButton = document.querySelector('#matrix-brackets-btn')
const symbolRButton = document.querySelector('#symbol-R-btn')
const elementOfButton = document.querySelector('#element-of-btn')
const notElementOfButton = document.querySelector('#not-element-of-btn')
const deltaButton = document.querySelector('#delta-btn')
const subsetButton = document.querySelector('#proper-subset-btn')
const limitBtn = document.querySelector('#limit-btn')


const section_1 = document.querySelector("#section-1")
const section_1_btn = document.querySelectorAll("#section-1 button")
const hiddenSection_1= document.querySelector("#hidden-section-1")

section_1_btn.forEach(element => {
    element.addEventListener('mouseover', () => {
            hiddenSection_1.classList.remove('hide')
    })
})

section_1_btn.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenSection_1.classList.add('hide')
    })
})


section_1.addEventListener('mouseover', ()=>{

    // if(hiddenSection_1.classList.contains('hide'))
        hiddenSection_1.classList.remove('hide')
    // else
        // hiddenSection_1.classList.add('hide')
})

section_1.addEventListener('mouseout', ()=>{

    // if(hiddenSection_1.classList.contains('hide'))
        hiddenSection_1.classList.add('hide')
    // else
        // hiddenSection_1.classList.add('hide')
})

/// Editor Event Listeners /////////////////////////////////////////////////////////////////////////
equationInput.addEventListener('keyup', () => {
    equationInput.focus();
    equationInput.value = equationInput.value.replaceAll('*', '⋅')
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

clearBtn.addEventListener('click', () => {
    equationPreview.innerHTML = equationInput.value = '';
    equationInput.focus();
})


symbolsBoxBtn.addEventListener('click', ()=>{
    symbolsBox.classList.toggle('hide');
})


editorCloseBtn.addEventListener('click', () => {
    editorBox.classList.add('hide');
    symbolsBox.classList.add('hide');
})

editorBtn.addEventListener('click', () => {
    
    editorBox.classList.remove('hide');
    equationInput.focus();
})


// Buttons Event Listeners ////////////////////////////////////////////////////////////////
limitBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\lim_{x \\rightarrow a} f(x) '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

summationButton.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\sum_{i}^{k} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

productoryBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\prod_{i}^{k} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

integralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\int_{b}^{a} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

// sqrtButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\sqrt{} '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// logButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\log_{b}{n} '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// matrixBracketsButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix} '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// piButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\pi '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// symbolRButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\mathbb{R} '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// elementOfButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\in '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// notElementOfButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\notin '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// deltaButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\Delta '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// subsetButton.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\subset '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

insertBtn.addEventListener('click', () => {
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    var attachment = new Trix.Attachment({ content: `${equationPreview.innerHTML}`})
    element.editor.insertAttachment(attachment)
    symbolsBox.classList.add('hide');
    editorContainer.classList.add('hide');
})