/// Editor buttons ///////////////////////////////////////////////////////////////////////////
const equationInput = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')
const insertBtn = document.querySelector('#insert-btn')
const symbolBtn = document.querySelector('.math-symbols-container')
const clearBtn = document.querySelector('#clear-btn')
const editorBtn =  document.querySelector("#editor-open-btn")
const editorCloseBtn = document.querySelector("#editor-close-btn")
const editorBox = document.querySelector('#editor-box')
const symbolsBox = document.querySelector("#symbols-box")
const symbolsBoxBtn = document.querySelector("#symbols-box-btn")
const editorContainer = document.querySelector(".editor-container")
let element = document.querySelector("trix-editor")

// Main section button variables /////////////////////////////////////////////////////////////
const limitBtn = document.querySelector('#limit-btn')
const integralBtn = document.querySelector('#integral-btn')
const productoryBtn = document.querySelector('#productory-btn')
const summationButton = document.querySelector('#summation-btn')
const directLimitBtn = document.querySelector('#direct-limit-btn')
const varIntegralBtn = document.querySelector('#var-integral-btn')
const coproductoryBtn = document.querySelector('#coproductory-btn')
const inverseLimitBtn = document.querySelector('#inverse-limit-btn')
const surfaceIntegralBtn = document.querySelector('#surface-integral-btn')
const limitSuperiorBtn = document.querySelector('#limit-superior-btn')
const volumeIntegralBtn = document.querySelector('#volume-integral-btn')
const limitInferiorBtn = document.querySelector('#limit-inferior-btn')
const curveIntegralBtn = document.querySelector('#curve-integral-btn')

// Basic section button variables ////////////////////////////////////////////////////////////
const logButton = document.querySelector('#log-btn')
const functionBtn = document.querySelector('#function-btn')
const sqrtBtn = document.querySelector('#sqrt-btn')
const fractionBtn = document.querySelector('#fraction-btn')

// Number sets buttons variables /////////////////////////////////////////////////////////////
const realNumberBtn = document.querySelector('#real-number-btn')
const complexNumberBtn = document.querySelector('#complex-number-btn')
const naturalNumberBtn = document.querySelector('#natural-number-btn')
const rationalNumberBtn = document.querySelector('#rational-number-btn')
const integerNumbersBtn =  document.querySelector('#integer-number-btn')

// Symbols and constants buttons variables ///////////////////////////////////////////////////
const piBtn = document.querySelector('#pi-btn')
const lambdaBtn = document.querySelector('#lambda-btn')
const eulerBtn = document.querySelector('#euler-btn')
const eisteinGravitationalBtn = document.querySelector('#eistein-gravitational-btn')
const eulerMascheroniBtn =document.querySelector('#euler-mascheroni-btn')
const imaginaryUnitBtn = document.querySelector('#imaginary-unit-btn')
const prouhetThueMorseBtn = document.querySelector('#prouhet-thue-morse-btn')
const ramanujanSoldnerBtn = document.querySelector('#ramanujan-soldner-btn')
const somosQuadraticRecBtn = document.querySelector('#somos-quadratic-recurrence-btn')
const goldenRadioBtn = document.querySelector('#golden-radio-btn')
const infinityBtn = document.querySelector('#infinity-btn')
const thethaBtn = document.querySelector('#thetha-btn')
const vacuumPermittivityBtn = document.querySelector('#vacuum-permittivity-btn')
const deltaBtn = document.querySelector('#delta-btn')

// Matrices buttons variables ////////////////////////////////////////////////////////////////
const bracketsMatrixBtn = document.querySelector('#brackets-matrix-btn')
const parenthesesMatrixBtn = document.querySelector('#parentheses-matrix-btn')
const bracesMatrixBtn = document.querySelector('#braces-matrix-btn')
const pipesMatrixBtn = document.querySelector('#pipes-matrix-btn')

// const realSymbolBtn = document.querySelector('#real-symbol-btn')
// const elementOfBtn = document.querySelector('#element-of-btn')
// const notElementOfBtn = document.querySelector('#not-element-of-btn')
// const subsetBtn = document.querySelector('#subset-btn')
// const plusMinusBtn = document.querySelector('#plus-minus-btn')


// Sections elements /////////////////////////////////////////////////////////////////////////
// Main section
const section_1 = document.querySelector("#section-1")
const section_1_btn = document.querySelectorAll("#section-1 button")
const hiddenSection_1= document.querySelector("#hidden-section-1")

// Constants Section
const constantsSection = document.querySelector("#constants-section")
const constantsSectionButtons = document.querySelectorAll("#constants-section button")
const hiddenConstantsSection = document.querySelector("#hidden-constants-section")

// Logical Section
const logicalSection = document.querySelector("#logical-section")
const logicalSectionButtons = document.querySelectorAll("#logical-section button")
const hiddenLogicalSection = document.querySelector("#hidden-logical-section")

// Arithmetic Comparison section
const comparisonSection = document.querySelector("#comparison-section")
const comparisonSectionButtons = document.querySelectorAll("#comparison-section button")
const hiddenComparisonSymbols = document.querySelector("#hidden-comparison-symbols")



/// Editor event listeners /////////////////////////////////////////////////////////////////////////
equationInput.addEventListener('keyup', () => {
    equationInput.focus();
    equationInput.value = equationInput.value.replaceAll('*', '⋅')
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
    // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

equationInput.addEventListener('keyup', () => {
    equationInput.focus();
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


/// Sections event listeners ////////////////////////////////////////////////////////////////////////
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
        hiddenSection_1.classList.remove('hide')
})

section_1.addEventListener('mouseout', ()=>{
        hiddenSection_1.classList.add('hide')
})

constantsSectionButtons.forEach(element => {
    element.addEventListener('mouseover', () => {
        hiddenConstantsSection.classList.remove('hide')
    })
})
constantsSectionButtons.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenConstantsSection.classList.add('hide')
    })
})
constantsSection.addEventListener('mouseover', ()=>{
        hiddenConstantsSection.classList.remove('hide')
})
constantsSection.addEventListener('mouseout', ()=>{
        hiddenConstantsSection.classList.add('hide')
})

logicalSectionButtons.forEach(element => {
    element.addEventListener('mouseover', () => {
        hiddenLogicalSection.classList.remove('hide')
    })
})

logicalSectionButtons.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenLogicalSection.classList.add('hide')
    })
})
logicalSection.addEventListener('mouseover', ()=>{
        hiddenLogicalSection.classList.remove('hide')
})
logicalSection.addEventListener('mouseout', ()=>{
        hiddenLogicalSection.classList.add('hide')
})

comparisonSectionButtons.forEach(element => {
    element.addEventListener('mouseover', () => {
        hiddenComparisonSymbols.classList.remove('hide')
    })
})
comparisonSectionButtons.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenComparisonSymbols.classList.add('hide')
    })
})

comparisonSection.addEventListener('mouseover', ()=>{
        hiddenComparisonSymbols.classList.remove('hide')
})

comparisonSection.addEventListener('mouseout', ()=>{
        hiddenComparisonSymbols.classList.add('hide')
})

/// Main section event listeners ////////////////////////////////////////////////////////////
limitBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\lim_{x \\rightarrow a} f(x) '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

integralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\int_{b}^{a} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

productoryBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\prod_{i}^{k} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

summationButton.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\sum_{i}^{k} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

directLimitBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\varinjlim '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

varIntegralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\int_{a}^{b} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

coproductoryBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\coprod '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

inverseLimitBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\varprojlim '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

surfaceIntegralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\iint '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

limitInferiorBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\varliminf '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

volumeIntegralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\iiint '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

limitSuperiorBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\varlimsup '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

curveIntegralBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\oint '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

/// Basic operations event listeners /////////////////////////////////////////////////////////
logButton.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\log_{b}{n} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

functionBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += 'f(x) '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

sqrtBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\sqrt{} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

fractionBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\frac{a}{b} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

/// Basic operations event listeners ///////////////////////////////////////////////////////////
naturalNumberBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathbb{N} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

integerNumbersBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathbb{Z} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

rationalNumberBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathbb{Q} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

realNumberBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathbb{R} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

complexNumberBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathbb{C} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

/// Sections event listeners ///////////////////////////////////////////////////////////////////
piBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\pi '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

lambdaBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\lambda '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

eulerBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += 'e '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

eisteinGravitationalBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\kappa '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

eulerMascheroniBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\gamma '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

imaginaryUnitBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mathrm{i} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

prouhetThueMorseBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\tau '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

ramanujanSoldnerBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\mu '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

somosQuadraticRecBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\sigma '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

goldenRadioBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\phi '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

infinityBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\infty '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

thethaBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\theta '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

vacuumPermittivityBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\epsilon '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

deltaBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\Delta '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

/// Matrix section event listeners /////////////////////////////////////////////////////////////
bracketsMatrixBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

parenthesesMatrixBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

pipesMatrixBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\begin{vmatrix}a & b \\\\ c & d\\end{vmatrix} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

bracesMatrixBtn.addEventListener('click', () => {
    equationInput.focus()
    equationInput.value += '\\begin{Bmatrix}a & b \\\\ c & d\\end{Bmatrix} '
    equationPreview.innerHTML = `\\(${equationInput.value}\\)`
    MathJax.Hub.Typeset()
})

///////////////////////////////////////////////////////////////////////////////////////////



// subsetBtn.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\subset '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// elementOfBtn.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\in '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// notElementOfBtn.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\notin '
//     equationPreview.innerHTML = `\\(${equationInput.value}\\)`
//     MathJax.Hub.Typeset()
// })

// plusMinusBtn.addEventListener('click', () => {
//     equationInput.focus()
//     equationInput.value += '\\pm '
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