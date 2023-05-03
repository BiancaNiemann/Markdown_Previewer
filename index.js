const editorEl = document.getElementById("editor")
const previewEl = document.getElementById('preview')

/*const interpretMd = (origin) => previewEl.innerHTML = marked.parse(origin);

(() => interpretMd(document.getElementById('editor').value))();
document.getElementById('editor').addEventListener('input', (e) => interpretMd(e.target.value)); */

editorEl.addEventListener('input', function handleChange(e){
  const editorText = e.target.value
   previewEl.innerHTML = marked.parse(editorText)
                          })

                         // previewEl.innerHTML = marked.parse('# Bianca\n\nRendered by **marked**.')