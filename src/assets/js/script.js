const inputBox = document.querySelector('#equation-input')
const equationPreview = document.querySelector('#equation-preview')
const clearBtn = document.querySelector('#clear-btn');
const editorCloseBtn = document.querySelector("#editor-close-btn")
const container = document.querySelector('.container');
const editorBtn =  document.querySelector("#editor-btn")
const insertBtn = document.querySelector('#insert-btn')
var element = document.querySelector("trix-editor")



inputBox.addEventListener('keyup', () => {
    inputBox.focus();
    inputBox.value = inputBox.value.replaceAll('*', '⋅')
    equationPreview.innerHTML = `\\(${inputBox.value}\\)`
    MathJax.Hub.Typeset()
    //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})

clearBtn.addEventListener('click', () => {
    equationPreview.innerHTML = inputBox.value = '';
})

editorCloseBtn.addEventListener('click', () => {
    container.classList.add('hide');
})

editorBtn.addEventListener('click', () => {
    container.classList.remove('hide');
    inputBox.focus();
})

insertBtn.addEventListener('click', () => {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    var attachment = new Trix.Attachment({ content: `${equationPreview.innerHTML}`})
    element.editor.insertAttachment(attachment)
    container.classList.add('hide');
})