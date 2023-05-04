const editorEl = document.getElementById("editor")
const previewEl = document.getElementById('preview')
const editorSizeEl = document.getElementById('editor-size')
const editorBox = document.getElementById('editor-box')
const previewBox = document.getElementById('preview-box')
const previewSizeEl = document.getElementById('preview-size')

let editorLarge = false
let previewLarge = false

window.addEventListener('load', ()=> {
  marked.setOptions({
    gfm: true,
    breaks: true
  })
  previewEl.innerHTML = marked.parse(editorEl.value)
})

editorEl.addEventListener('input', function handleChange(e) {
  const editorText = e.target.value
  marked.setOptions({
    gfm: true,
    breaks: true
  })
  previewEl.innerHTML = marked.parse(editorText)
})

editorSizeEl.addEventListener('click', ()=> {
  if (editorLarge === false){
    editorLarge = true
  } else {
    editorLarge = false
  }

  if(editorLarge === false){
    editorBox.style.height = "300px"
    editorEl.style.height = "250px"
    editorSizeEl.classList.add("fa-arrows-alt")
    editorSizeEl.classList.remove("fa-compress")
    
  } else {
    editorBox.style.height = "800px"
    editorSizeEl.classList.remove("fa-arrows-alt")
    editorSizeEl.classList.add("fa-compress")
    editorEl.style.height = "750px"
  }
})

previewSizeEl.addEventListener('click', ()=> {
  if (previewLarge === false){
    previewLarge = true
  } else {
    previewLarge = false
  }

  if(previewLarge === false){
    previewBox.style.height = "600px"
    previewSizeEl.classList.add("fa-arrows-alt")
    previewSizeEl.classList.remove("fa-compress")
    
  } else {
    previewBox.style.height = "1200px"
    previewSizeEl.classList.remove("fa-arrows-alt")
    previewSizeEl.classList.add("fa-compress")
  }
})
