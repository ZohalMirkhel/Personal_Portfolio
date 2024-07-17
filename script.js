// Function to show the sidebar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Home page content initialization
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  const heroContent = document.querySelector('.hero-content');

  heroText.innerHTML = `
      <div class="circle"></div>
      <h3>Hello, My Name is</h3>
      <h2>Zohal Mirkhel</h2>
      <h1>Web Developer</h1>
      <a href="#contact" class="contact-btn">Contact Me</a>
      
  `;

  heroImage.innerHTML = `
      <img src="images/home.jpeg">
  `;

  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';
  socialLinks.innerHTML = `
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
  `;

  heroContent.appendChild(socialLinks);
});

// About page content initialization
document.addEventListener("DOMContentLoaded", () => {
  const aboutMe = document.getElementById('about-me');
  if (aboutMe) {
    aboutMe.innerHTML = `
      <div class="about-section">
        <div class="about-image">
          <img src="images/about.png">
        </div>
        <div class="about-text">
          <h2>About me</h2>
          <p>I'm Zohal Mirkhel, a web developer with a keen eye for creating dynamic and user-friendly websites. My expertise spans across HTML, CSS, Java, JavaScript, SQL, WordPress, and Bootstrap. I take pride in writing clean, efficient code and crafting visually appealing, accessible sites. With HTML and CSS, I design elegant and responsive interfaces. My JavaScript skills enable me to develop interactive, seamless user experiences. I also bring robust backend solutions to life with Java and design efficient, scalable databases using SQL. Additionally, I customize WordPress themes and plugins to fit unique client requirements. I prioritize understanding my clients' needs to deliver innovative and detail-oriented solutions, ensuring each project not only meets but exceeds expectations.</p>
        </div>
      </div>
    `;
  }
});

//Education
document.addEventListener("DOMContentLoaded", () => {
  const myEdu = document.getElementById('my-edu');
  if (myEdu) {
    myEdu.innerHTML = `
      <div class="edu-section">
        <div class="edu-text">
          <h2>Education</h2>
          <p>I am pursuing a Bachelor of Science in Information Technology at the American University of Afghanistan, building on a strong academic foundation from Wahdat High School. My education includes advanced programming, network security, database management, and software development. This rigorous curriculum, combined with practical projects and internships, has equipped me with the skills to tackle real-world challenges. Additionally, as a WordPress Developer with Oriental Consultants, I have developed and maintained high-performance websites, collaborating with design teams to optimize user experiences. These experiences have solidified my technical abilities and enhanced my problem-solving skills and teamwork.</p>
        </div>
        <div class="edu-image">
          <img src="images/cv.png" alt="Education Image">
          <a href="CV/Zohal Mirkhel CV.pdf" download="Zohal_Mirkhel_CV.pdf" class="edu-button">Download</a>
        </div>
      </div>
    `;
  }
});



// Skills section content initialization
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skills = {
      languages: ["HTML", "CSS", "JS", "Java", "WordPress", "Bootstrap"],
      tools: ["Git", "GitHub"]
    };

    const skillsList = document.createElement('ul');
    skillsList.className = 'skills-list';

    skills.languages.forEach(language => {
      const listItem = document.createElement('li');
      listItem.textContent = language;
      skillsList.appendChild(listItem);
    });

    skills.tools.forEach(tool => {
      const listItem = document.createElement('li');
      listItem.textContent = tool;
      skillsList.appendChild(listItem);
    });

    skillsSection.appendChild(skillsList);
  }
});

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const errorMessage = document.getElementById("error-message");

  if (contactForm && errorMessage) {
    contactForm.addEventListener("submit", (event) => {
      const email = document.getElementById("email").value;
      if (email !== email.toLowerCase()) {
        event.preventDefault();
        errorMessage.classList.remove("hidden");
      } else {
        errorMessage.classList.add("hidden");
      }
    });

    const formFields = ["name", "email", "message"];
    formFields.forEach((field) => {
      const input = document.getElementById(field);
      if (input) {
        input.value = localStorage.getItem(field) || "";
        input.addEventListener("input", () => {
          localStorage.setItem(field, input.value);
        });
      }
    });
  }
});
