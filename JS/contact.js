const url = "http://jsonplaceholder.typicode.com/comments";

document.getElementById("contactUsForm").addEventListener("submit", addPost);


// Enviar mediante el fetch method un post usando un objeto dentro del fetch como segundo parametroque dentro del mismo pasaremos cierta informacion, esta informacion es asociada con los HTTP methods, [CREATE, READ, UPDATE, DELETE]. Vamos a enviar la informacion del formulario al API falso y veremos como se registra el ID correspondiente a la sequencia de objetos que nos presenta el API.
function addPost(preventForm) {
  preventForm.preventDefault(); // Omite que se envie la info del formulario

  // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Using fetch to push to API
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
        body: message,
        tel: phone
    }),
  })
    .then((response) => response.json())
    .then((dataDeFormulario) => {
      console.log(dataDeFormulario);
    });
}
