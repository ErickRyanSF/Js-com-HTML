const frm = document.querySelector("input")
const resp = document.querySelector("h3")

function mostrar(){
  const livro = frm.value 
  resp.innerText = "Seu livro favorito é " + livro + "? Tem bom gosto!!!"
}