

const symbolsBox = document.querySelector("#symbols-box")
const symbolsBoxBtn = document.querySelector("#symbols-box-btn")
symbolsBoxBtn.addEventListener('click', ()=>{
    symbolsBox.classList.toggle('hide');
})



const section_1 = document.querySelectorAll("#section-1")
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

const section_2 = document.querySelectorAll("#section-2")
const hiddenSection_2= document.querySelector("#hidden-section-2")

console.log(section_1)
section_2.forEach(element => {
    element.addEventListener('mouseover', () => {
            hiddenSection_2.classList.remove('hide')
    })
})

section_2.forEach(element => {
    element.addEventListener('mouseout', () => {
        hiddenSection_2.classList.add('hide')
    })
})

const clearBtn = document.querySelector('#clear-btn')
const editorBtn =  document.querySelector("#editor-open-btn")
const editorCloseBtn = document.querySelector("#editor-close-btn")
const editorBox = document.querySelector('#editor-box');

clearBtn.addEventListener('click', () => {
    equationPreview.innerHTML = inputBox.value = '';
    inputBox.focus();
})

editorCloseBtn.addEventListener('click', () => {
    editorBox.classList.add('hide');
    symbolBtn.classList.add('hide');
})

editorBtn.addEventListener('click', () => {
    
    editorBox.classList.remove('hide');
    inputBox.focus();
})