javascript
document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name-input").value;
  var comment = document.getElementById("comment-input").value;
  saveComment(name, comment);
});

function saveComment(name, comment) {
  // Aquí puedes agregar la lógica para guardar el comentario en una base de datos o en algún otro lugar
  // También puedes mostrar el comentario en la sección de comentarios
  var commentElement = document.createElement("div");
  commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;
  document.getElementById("comments").appendChild(commentElement);
}