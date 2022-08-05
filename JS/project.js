

const urlProjects = ("https://jsonplaceholder.typicode.com/posts/1")

// Calling an external API - call an externa API to showcase one of the recent projects
function getThere() {
    fetch(urlProjects)
      .then((response) => response.json())
      .then((res) => {
        let apiData = `
            <div class="projectPageMainHeader">
                <div class="projectPageMainHeader">
                    <h1>${res.title}</h1>
                </div>
                <div class="projectPageMainHeaderBottom">
                    <div class="projectPageMainHeaderBottomLeft">
                        <p>UI Design & App Development</p>
                    </div>
                    <div class="projectPageMainHeaderBottomRight">
                        <p>Completed on&nbsp;</p>
                        <p> June 22,2021</p>
                    </div>
                </div>
            </div>
            <div class="projectPageMainBody">
                <div id="projectPageMainBodyImg">
                    <img src="../midterm-project-project-assets/projects-section/${res.id}.jpg" alt="Geometrical image">
                </div>
                <div id="projectPageMainBodyText">
                    <p>${res.body}</p>
                </div>
            </div>`;

        document.querySelector(".projectPageMain").innerHTML = apiData;
      })
  }
  
  getThere();
