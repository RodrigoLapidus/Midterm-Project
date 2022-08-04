//Declaro dos variables con rutas diferentes para injectar la variable dentro de la llamada fetch t así puedo probar que me retorna cada variable

const url1 = ("http://jsonplaceholder.typicode.com/posts/?_limit=3");
const url2 = ("https://jsonplaceholder.typicode.com/posts")


https://jsonplaceholder.typicode.com/posts/1

// Calling an external API - bcall an externa API to showcase recent projects
function getHere() {
  fetch(url1)
    .then((response) => response.json())
    .then((res) => {
      let apiData = "";
      res.forEach((articulo) => {
        apiData += `
              <div class="projectBoxes">
              <div id="simplify">
                  <div class="projectImg">
                      <img src="../midterm-project-project-assets/projects-section/1.jpg" alt="Geometric image 1">
                  </div>
                  <div class="projectText">
                      <div>
                          <p class="projectTextHeading">${articulo.title}</p>
                          <p class="projectTextWritten">${articulo.body}</p>
                      </div>
                      <div class="learnMore">
                          <a href="../HTML/projectpage.html">Learn more</a>
                      </div>
                  </div>
              </div>
          </div>
              `;
      });
      document.querySelector(".recentProjectBoxes").innerHTML = apiData;
    });
}

getHere();





