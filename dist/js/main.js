const projectContainer = document.querySelector('.project-container');
const projectContent = document.querySelector('.left-content');

window.addEventListener('resize', () => {
  var windowWidth = window.innerWidth;
  console.log(windowWidth);
});


const portfolioLink = document.querySelector('.portfolio_link');
const profileLink = document.querySelector('.profile_link');
const aboutmeLink = document.querySelector('.aboutme_link');
const nav = document.querySelector('.nav');

const showPortfolio = () => {
  console.log('show portfolio');
  console.log(nav.children[0]);
  aboutmeLink.classList.remove('active');
  profileLink.classList.remove('active');
  portfolioLink.classList.add('active');
  

  projectContent.innerHTML = `
    <div class="tab tab-fade">
      <div class="c-title">
        <h1>P<span class="o-replacement"></span>rtfolio</h1>
      </div>

      <div class="portfolio-list">
        
        <div class="list">
          <img src="../dist/img/MyBurger.jpeg">
          <div class="list-details">
            <h4>Technology: </h4>
            <p> 
              <span>HTML</span>
              <span>SCSS</span>
              <span>Javascript</span>
            </p>
          </div>
        </div>

        <div class="list">

        <img src="../dist/img/travelX.jpeg">
          <div class="list-details">
            <h4>Technology: </h4>

            <p> 
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </div>

        <div class="list">

        <img src="../dist/img/p3.jpg">
          <div class="list-details">
            <h4>Technology: </h4>
            <p> 
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  `
}
const showProfile = () => {
  console.log('show portfolio');
  console.log(nav.children[0]);
  aboutmeLink.classList.remove('active');
  profileLink.classList.add('active');
  portfolioLink.classList.remove('active');
  

  projectContent.innerHTML = `
  <div class="tab tab-fade">
    <div class="c-title">
      <h1>Pr<span class="o-replacement"></span>file</h1>
    </div>
    <div class="p-text">
        <h1>Hi I'm Ren! :)</h1>
        <h4>Web Designer & Front - End Developer</h4>
        <p> I build websites that communicates well to the user.
        <div class="social-icon">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-github-square"></i>
          <i class="fab fa-behance-square"></i>
        </div>
    </div>
  </div>
  `
}
const showAboutme = () => {
  console.log('show portfolio');
  console.log(nav.children[0]);
  aboutmeLink.classList.add('active');
  profileLink.classList.remove('active');
  portfolioLink.classList.remove('active');
  

  projectContent.innerHTML = `
  <div class="tab tab-fade">
    <div class="c-title">
        <h1>Ab<span class="o-replacement"></span>ut me</h1>
    </div>
    <div class="p-text">
        <p>I am a professional web developer for 5 years</p>
    </div>
  </div>
  `
}

portfolioLink.addEventListener('click', showPortfolio);
profileLink.addEventListener('click', showProfile);
aboutmeLink.addEventListener('click', showAboutme);

window.onload(showProfile());