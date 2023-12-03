function getProjects () {
  const projectContainer = document.querySelector('.projects-container')
  let projectsHTML = '<h2>Projects</h2>'

  for (let i = 0; i < projectsData.length; i++) {
    let portfolio = projectsData[i];

    projectContainer.innerHTML = `
      <div class="project">
        <div class="info">
          <h3>${portfolio.title}</h3>
          <p>${portfolio.description.p1}</p>
          <br>
          <p>${portfolio.description.p2}</p>
          <br>
          <h3>Tech</h3>
          <p>${portfolio.skills}</p>

          <div>
            <a href="${portfolio.live}" target="blank"><button>Live Site</button></a>
            <a href="${portfolio.github}" target="_blank"><button>Github Repo</button></a>
          </div>
       </div>

        <div class="image">
          <img srcset="${image}" alt="${portfolio.image.alt}">
        </div>
      </div>
    `
    console.log(portfolio.image.src)
  }

  console.log('projects function ran')
}
