document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggleSidebar');
  const closeSidebarButton = document.getElementById('closeSidebar');

  function showSidebar() {
    sidebar.style.display = 'flex';
  }

  function hideSidebar(event) {
    event.preventDefault();
    sidebar.style.display = 'none';
  }

  function toggleSidebar(event) {
    event.preventDefault();
    if (sidebar.style.display === 'flex') {
      hideSidebar(event);
    } else {
      showSidebar();
    }
  }

  function navigateTo(event, sectionId) {
    event.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    hideSidebar(event);
  }

  if (toggleButton && closeSidebarButton) {
    toggleButton.addEventListener('click', toggleSidebar);
    closeSidebarButton.addEventListener('click', hideSidebar);
  }

  window.navigateTo = navigateTo;
  window.hideSidebar = hideSidebar;

  // Home page content initialization
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('#nav #navbar a');

  // Function to update the active link
  function updateActiveLink() {
      var currentSection = null;

      sections.forEach(function (section) {
          var rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              currentSection = section;
          }
      });

      if (currentSection) {
          var id = currentSection.getAttribute('id');
          links.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href').substring(1) === id) {
                  link.classList.add('active');
              }
          });
      }
  }

  // Observe sections using Intersection Observer
  var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              updateActiveLink();
          }
      });
  }, {
      threshold: 0.5
  });

  sections.forEach(function (section) {
      observer.observe(section);
  });

  // Update active link on page load and on scroll
  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink);


  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  const heroContent = document.querySelector('.hero-content');

  if (heroText && heroImage && heroContent) {
    heroText.innerHTML = `
      <div class="circle"></div>
      <h3>Hello, My Name is</h3>
      <h2>Zohal Mirkhel</h2>
      <h1>Web Developer</h1>
      <a href="#contact-popup" class="contact-btn" onclick="toggleContactPopup()">Contact Me</a>
      <a href="#contact" class="contact-btn-mobile">Contact Me</a>
    `;

    heroImage.innerHTML = `
      <img src="images/home.jpeg">
    `;

    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';
    socialLinks.innerHTML = `
      <a href="https://github.com/ZohalMirkhel"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="31" height="31" viewBox="0 0 50 50" fill="#fff">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg></a>
      <a href="https://www.facebook.com/profile.php?id=61559887775140"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="31" height="31" viewBox="0 0 32 32" fill="#fff">
<path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z"></path>
</svg></a>
      <a href="https://www.linkedin.com/in/zohal-mirkhel-840a7530a/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="31" height="31" viewBox="0 0 50 50" fill="#fff">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg></a>
    `;

    heroContent.appendChild(socialLinks);
  }

  // About page content initialization
  const aboutMe = document.getElementById('about-me');
  if (aboutMe) {
    aboutMe.innerHTML = `
      <div class="about-section">
        <div class="about-image">
          <img src="images/about.png">
        </div>
        <div class="about-text">
          <h2>About Me</h2>
          <p>I'm Zohal Mirkhel, a web developer with a keen eye for creating dynamic and user-friendly websites. My expertise spans across HTML, CSS, Java, JavaScript, SQL, WordPress, and Bootstrap. I take pride in writing clean, efficient code and crafting visually appealing, accessible sites. With HTML and CSS, I design elegant and responsive interfaces. My JavaScript skills enable me to develop interactive, seamless user experiences. I also bring robust backend solutions to life with Java and design efficient, scalable databases using SQL. Additionally, I customize WordPress themes and plugins to fit unique client requirements. I prioritize understanding my clients' needs to deliver innovative and detail-oriented solutions, ensuring each project not only meets but exceeds expectations.</p>
        </div>
      </div>
    `;
  }

  // Education section content initialization
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
          <a href="CV/Zohal Mirkhel CV.pdf" download="Zohal_Mirkhel_CV.pdf" class="edu-button">Download CV</a>
        </div>
      </div>
    `;
  }

  // Projects section content initialization
  const myProjects = document.getElementById('my-projects');
  const showMoreProjectsBtn = document.getElementById('load-more');
  const popUp = document.getElementById("pop-up");
  const popupContent = document.getElementById("popup-content");
  const closePop = document.getElementById("close-pop");
  const mainContent = document.getElementById("main-content");
  const body = document.body;

const projects = [
  {
    title: "Afghani Clothes Website",
    shortDescription: "An e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
    longDescription: "This e-commerce site sells traditional Afghan clothing and accessories. It features a dynamic banner slider, navigation, detailed product listings, a search bar, and a subscription form. The site emphasizes Afghan cultural heritage and offers fast shipping, easy returns, and 24/7 support.",
    image: [
      "images/Product_Landing_Page.png",
      "images/PL1.png",
      "images/Pl2.png",
      "images/PL3.png",
    ],
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/product-landing-page/",
    sourceLink: "https://github.com/ZohalMirkhel/product-landing-page",
  },
  {
    title: "Telephone Number Validator",
    shortDescription: "The Telephone Number Validator is a web application that allows users to validate and format phone numbers based on the selected country. The application then displays the validation result and the formatted number.",
    longDescription: "The Telephone Number Validator is an intuitive web application designed to validate and format phone numbers of different countries. It provides a simple interface where users can enter a phone number into the input field, select country, and by clicking the (Check) button, the application processes the input to validate its correctness according to the selected country's phone number conventions.",
    image: "images/PhoneNumberValidator.png",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/Telephone-Number-Validator/",
    sourceLink: "https://github.com/ZohalMirkhel/Telephone-Number-Validator",
  },
  {
    title: "Cash Register",
    shortDescription: "Cash Register is a tool for managing transactions and cash flow in a retail setting. It facilitates the calculation of change and the real-time updating of the cash drawer based on the amount of cash provided by customers.",
    longDescription: "The Cash Register web app calculates change and updates the cash drawer based on the amount received. It includes an input for the received amount, a payment method dropdown, and a button to process transactions and display change. This app ensures accurate, efficient cash handling, reducing errors and improving customer service.",
    image: "images/register.png",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveLink: "https://github.com/ZohalMirkhel/Build-a-Cash-Register",
    sourceLink: "https://zohalmirkhel.github.io/Build-a-Cash-Register/",
  },
  {
    title: "Pokémon Search App",
    shortDescription: "The Pokémon Search App is a web application designed to allow users to search for Pokémon by their name or ID. It provides detailed information and a sprite image of the searched Pokémon.",
    longDescription: "The Pokémon Search App is a web application that enables users to search for Pokémon. Upon initiating the search, the app displays information about the Pokémon. Additionally, the app shows a sprite image of the Pokémon. The user-friendly interface, adorned with a colorful Pokémon-themed banner, enhances the overall experience, making it easy and enjoyable to look up any Pokémon.",
    image: "images/PSA.png",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Spilne"],
    liveLink: "https://zohalmirkhel.github.io/Pok-mon-Search-App/",
    sourceLink: "https://github.com/ZohalMirkhel/Pok-mon-Search-App",
  },
  {
    title: "Portfolio Project",
    shortDescription: "This project is a portfolio website designed to showcase various web development projects. The website employs a sleek, dark-themed design with a focus on simplicity and modern aesthetics.",
    longDescription: "This portfolio website showcases web development projects with a modern, minimalist design and dark theme. It features a responsive layout, a navigation bar with links to Home, About, Work, and Contact sections, and offers a seamless user experience across all devices.",
    image: [
      "images/Portfolio.png",
      "images/portfolio2.png",
      "images/portfolio3.png",
      "images/portfolio4.png",
    ],
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/portfolio_project/",
    sourceLink: "https://github.com/ZohalMirkhel/portfolio_project",
  },
  {
    title: "Tribute Page",
    shortDescription: "This project is a Tribute Page created to showcase a fictional web developer's skills and projects. It demonstrates the use of HTML and CSS to build a responsive and visually appealing website.",
    longDescription: "This tribute page honors Dr. Norman Borlaug, the man who saved a billion lives through the Green Revolution. It showcases the developer's skill in creating a structured, engaging layout using HTML and CSS, with a responsive design for seamless viewing on all devices.",
    image: "images/tp1.png",
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/tribute-page/",
    sourceLink: "https://github.com/ZohalMirkhel/tribute-page",
  },
  {
    title: "Documentation Page",
    shortDescription: "This is a documentation page about space, covering various topics such as astronomy, the universe, stars, black holes, and galaxies. It serves as an educational resource for understanding the vast expanse beyond Earth's atmosphere.",
    longDescription: "The Space Documentation page is a comprehensive educational resource that offers in-depth information about space. It is meticulously organized, combining historical context, scientific explanations, and engaging content to educate readers and foster a deeper understanding of the universe and its many components.",
    image: [
      "images/DemoPic.png",
      "images/SD1.png",
      "images/SP5.png",
      "images/PS6.png",
    ],
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/technical_documentation_page/",
    sourceLink: "https://github.com/ZohalMirkhel/technical_documentation_page",
  },
  {
    title: "Roman Number Converter",
    shortDescription: "The Roman Number Converter is a web application that allows users to convert Arabic numbers to Roman numerals. Simply enter a number in the input field and click the (Convert) button to see the Roman numeral equivalent. ",
    longDescription: "The Roman Number Converter is a user-friendly web app that converts Arabic numbers to Roman numerals. Users enter a number in a single input field, click (Convert), and the app quickly displays the Roman numeral. It serves as both a practical tool and an educational resource on the historical numeral system.",
    image: "images/RNC.png",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/Roman-Numeral-Converter/",
    sourceLink: "https://github.com/ZohalMirkhel/Roman-Numeral-Converter",
  },
  {
    title: "Palindrome",
    shortDescription: "This web application determines if a given text is a palindrome. It features an input field to enter text, a button to initiate the check, and a display area for the result. The design is responsive, ensuring usability across various devices.",
    longDescription: "This web application automates palindrome detection. Users input text and click the (Check) button, which removes non-alphanumeric characters, converts the text to lowercase, and compares it to its reverse. If they match, the text is a palindrome. The app is designed for a great user experience, with a responsive, easy-to-use interface suitable for all ages and devices.",
    image: "images/Palindrome.png",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveLink: "https://zohalmirkhel.github.io/palindrome/",
    sourceLink: " https://github.com/ZohalMirkhel/palindrome",
  },
  {
    title: "Survey Form",
    shortDescription: "This web form collects user feedback to improve the freeCodeCamp platform. It asks for the user's name, email, age, current role, recommendation likelihood, favorite features, improvement suggestions, and additional comments.",
    longDescription: "This survey form collects user feedback to improve the freeCodeCamp platform. It features a modern, responsive design for optimal use across devices. The form includes various fields for comprehensive input and ends with a submit button. The aim is to gather valuable insights to enhance freeCodeCamp's user-friendliness and effectiveness.",
    image: "images/sf.png",
    technologies: ["HTML", "CSS", "Git", "GitHub"],
    liveLink: "https://github.com/ZohalMirkhel/survey-form",
    sourceLink: "https://github.com/ZohalMirkhel/survey-form",
  },
];

const showMoreSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" version="1.1" x="0px" y="0px" id="svg">
  <title>down-1</title>
  <desc>Created with Sketch.</desc>
  <g stroke="#000" stroke-width="1" fill="none" fill-rule="evenodd">
    <g fill="#fff" fill-rule="nonzero">
      <path d="M1.95,12 C1.95,6.44953826 6.44953826,1.95 12,1.95 C17.5504617,1.95 22.05,6.44953826 22.05,12 C22.05,17.5504617 17.5504617,22.05 12,22.05 C6.44953826,22.05 1.95,17.5504617 1.95,12 Z M4.05,12 C4.05,16.3906638 7.60933624,19.95 12,19.95 C16.3906638,19.95 19.95,16.3906638 19.95,12 C19.95,7.60933624 16.3906638,4.05 12,4.05 C7.60933624,4.05 4.05,7.60933624 4.05,12 Z M12,12.55 L14.2075379,10.3075379 C14.6175884,9.89748737 15.2824116,9.89748737 15.6924621,10.3075379 C16.1025126,10.7175884 16.1025126,11.3824116 15.6924621,11.7924621 L12.6924621,14.7924621 C12.2824116,15.2025126 11.6175884,15.2025126 11.2075379,14.7924621 L8.20753788,11.7924621 C7.79748737,11.3824116 7.79748737,10.7175884 8.20753788,10.3075379 C8.61758839,9.89748737 9.28241161,9.89748737 9.69246212,10.3075379 L12,12.55 Z"/>
    </g>
  </g>
</svg>
<span id="more-c">Show More</span>
`;

const showLessSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" version="1.1" x="0px" y="0px" id="svg">
  <title>up-1</title>
  <desc>Created with Sketch.</desc>
  <g stroke="#000" stroke-width="1" fill="none" fill-rule="evenodd">
    <g fill="#fff" fill-rule="nonzero">
      <path d="M22.05,12 C22.05,6.44953826 17.5504617,1.95 12,1.95 C6.44953826,1.95 1.95,6.44953826 1.95,12 C1.95,17.5504617 6.44953826,22.05 12,22.05 C17.5504617,22.05 22.05,17.5504617 22.05,12 Z M19.95,12 C19.95,16.3906638 16.3906638,19.95 12,19.95 C7.60933624,19.95 4.05,16.3906638 4.05,12 C4.05,7.60933624 7.60933624,4.05 12,4.05 C16.3906638,4.05 19.95,7.60933624 19.95,12 Z M12,11.45 L9.79246212,13.6924621 C9.38241161,14.1025126 8.71758839,14.1025126 8.30753788,13.6924621 C7.89748737,13.2824116 7.89748737,12.6175884 8.30753788,12.2075379 L11.3075379,9.20753788 C11.7175884,8.79748737 12.3824116,8.79748737 12.7924621,9.20753788 L15.7924621,12.2075379 C16.2025126,12.6175884 16.2025126,13.2824116 15.7924621,13.6924621 C15.3824116,14.1025126 14.7175884,14.1025126 14.3075379,13.6924621 L12,11.45 Z"/>
    </g>
  </g>
</svg>
<span id="more-c">Show Less</span>
`;

function displayProjects() {
  myProjects.innerHTML = projects
    .map(
      (project, index) => `
    <div class="proj" id="proj-${index}">
      <h3>${project.title}</h3>
      <div class="project-images">
          ${Array.isArray(project.image) ? `<img src="${project.image[0]}" alt="${project.title}" />` : `<img src="${project.image}" alt="${project.title}" />`}
      </div>
      <p id="desc">${project.shortDescription}</p>
      <button class="popup-button-more" onclick="showPopup(${index})">Learn More</button>
    </div>
    `
    )
    .join("");

  let currentItems = 2;
  const boxes = document.querySelectorAll('.proj');

  boxes.forEach((box, index) => {
    if (index < currentItems) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });

  showMoreProjectsBtn.innerHTML = showMoreSVG;

  showMoreProjectsBtn.onclick = () => {
    const moreText = showMoreProjectsBtn.querySelector('#more-c');
    
    if (moreText.innerText === "Show More") {
      for (let i = currentItems; i < currentItems + 2; i++) {
        if (boxes[i]) {
          boxes[i].style.display = 'block';
        }
      }
      currentItems += 2;
      if (currentItems >= boxes.length) {
        moreText.innerText = "Show Less";
        showMoreProjectsBtn.innerHTML = showLessSVG;
      }
    } else {
      currentItems = 2;
      boxes.forEach((box, index) => {
        if (index >= currentItems) {
          box.style.display = 'none';
        } else {
          box.style.display = 'block';
        }
      });
      moreText.innerText = "Show More";
      document.getElementById("project").scrollIntoView({ behavior: "smooth" });
      showMoreProjectsBtn.innerHTML = showMoreSVG;
    }
  }
}

  window.showPopup = function (index) {
  const project = projects[index];
  const imagesToShow = Array.isArray(project.image) ? project.image : [project.image];

  popupContent.innerHTML = `
    <button id="close-pop" class="close-btn">&times;</button>
    <h3>${project.title}</h3>
    <div class="pop-project-images ${imagesToShow.length === 1 ? 'single-image' : ''}">
      ${imagesToShow.map(image => `<img src="${image}" alt="${project.title}" />`).join('')}
    </div>
    <p>${project.longDescription}</p>
    <p id="tech">Technologies: ${project.technologies.join(", ")}</p>
    <a class="popup-button" id="live" href="${project.liveLink}" target="_blank">Live Site</a>
    <a class="popup-button" id="git" href="${project.sourceLink}" target="_blank">GitHub Repository</a>
    <button id="mobile-close-pop" class="close-btn-mobile">Close</button>
  `;
  
  popUp.classList.remove("hidden");
  mainContent.classList.add("blurred");
  body.classList.add("no-scroll");

  document.getElementById("close-pop").addEventListener("click", closePopup);
  document.getElementById("mobile-close-pop").addEventListener("click", closePopup);
}

function closePopup() {
  popUp.classList.add("hidden");
  mainContent.classList.remove("blurred");
  body.classList.remove("no-scroll");
}

displayProjects();

//Certification Part
  const certificationSection = document.getElementById("certification-section");
  const showMoreCertificatesBtn = document.getElementById("load-more-1");
  const moreText = document.getElementById("more-c");
  const certificate = {
    certificates: [
      { name: "Responsive Web Design", image: "certificates/responsivewebdesgin.PNG", link: "https://www.freecodecamp.org/certification/fcc1df38081-f0b1-432b-a943-4ffc5400744f/responsive-web-design" },
      { name: "JavaScript", image: "certificates/JS.PNG", link: "https://www.freecodecamp.org/certification/fcc1df38081-f0b1-432b-a943-4ffc5400744f/javascript-algorithms-and-data-structures-v8" },
      { name: "Introduction to Programming", image: "certificates/ITCWD.jpg", link: "#" },
      { name: "Capacity Building", image: "certificates/CB.jpg", link: "#" },
      { name: "Advanced HTML & CSS", image: "certificates/SOW.jpg", link: "#" }
    ],
  };

  certificationSection.innerHTML = `
    <div id="certification-section">
      <h2>Certification</h2>
      <div class="cert-list">
        ${certificate.certificates
          .map(
            (certificate) => `
          <div class="cert">
            <img src="${certificate.image}" alt="${certificate.name}"/>
            <h5><a href="${certificate.link}" target="_blank">${certificate.name}</a></h5>
          </div>`
          )
          .join("")}
      </div>
    </div>
  `;

  let currentItem = 2;
  const certItems = document.querySelectorAll('#certification-section .cert');

  certItems.forEach((item, index) => {
    if (index >= currentItem) {
      item.style.display = 'none';
    }
  });

  showMoreCertificatesBtn.innerHTML = showMoreSVG;

  showMoreCertificatesBtn.onclick = () => {
    if (moreText.innerText === "Show More") {
      for (let i = currentItem; i < currentItem + 2; i++) {
        if (certItems[i]) {
          certItems[i].style.display = 'block';
        }
      }
      currentItem += 2;
      if (currentItem >= certItems.length) {
        moreText.innerText = "Show Less";
        showMoreCertificatesBtn.innerHTML = showLessSVG;
      }
    } else {
      currentItem = 2;
      certItems.forEach((item, index) => {
        if (index >= currentItem) {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      });
      document.getElementById("certification").scrollIntoView({ behavior: "smooth" });
      moreText.innerText = "Show More";
      showMoreCertificatesBtn.innerHTML = showMoreSVG;
    }
  };
//Skills Section
  const skills = {
    languages: ["HTML", "CSS", "JS", "Java", "WordPress", "Bootstrap"],
    professionalSkills: ["Team Work", "Multi Task", "Critical thinking", "Communication", "Time management", "Creativity"],
    softSkills: ["Ideas", "Teamwork", "Clean Code", "Code Review"]
  };

  const skillsContainer = document.getElementById('skills');

  if (skillsContainer) {
    skillsContainer.innerHTML = `
      <h2>Skills</h2>
      <div id="skills-content">
        <div class="list">
          <div class="skills-category">
            <h3 class="skills-header" data-target="#languages-list">Languages</h3>
            <ul class="skills-list" id="languages-list"></ul>
          </div>
          <div class="skills-category">
            <h3 class="skills-header" data-target="#professional-skills-list">Professional Skills</h3>
            <ul class="skills-list" id="professional-skills-list"></ul>
          </div>
          <div class="skills-category">
            <h3 class="skills-header" data-target="#soft-skills-list">Soft Skills</h3>
            <ul class="skills-list" id="soft-skills-list"></ul>
          </div>
        </div>
        <div class="image">
          <div id="skills-image">
            <img src="images/skills.png" alt="Skills Image">
          </div>
        </div>
      </div>
    `;

    // Append list items to respective lists
    const languagesList = document.getElementById('languages-list');
    const professionalSkillsList = document.getElementById('professional-skills-list');
    const softSkillsList = document.getElementById('soft-skills-list');

    skills.languages.forEach(language => {
      const listItem = document.createElement('li');
      listItem.textContent = language;
      languagesList.appendChild(listItem);
    });

    skills.professionalSkills.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.textContent = skill;
      professionalSkillsList.appendChild(listItem);
    });

    skills.softSkills.forEach(skill => {
      const listItem = document.createElement('li');
      listItem.textContent = skill;
      softSkillsList.appendChild(listItem);
    });

    // Add click event to toggle visibility of lists
    document.querySelectorAll('.skills-header').forEach(header => {
      header.addEventListener('click', () => {
        const targetList = document.querySelector(header.dataset.target);
        
        if (targetList.classList.contains('visible')) {
          targetList.classList.remove('visible');
        } else {
          document.querySelectorAll('.skills-list.visible').forEach(list => {
            list.classList.remove('visible');
          });
          targetList.classList.add('visible');
        }
      });
    });
  }
// Contact form handling
  const contactForm = document.getElementById("contact-form");

  emailjs.init("K2brMF3hp-e0iQwyI");

  if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = document.getElementById("email").value;
          const name = document.getElementById("name").value;
          const message = document.getElementById("message").value;

          if (email !== email.toLowerCase()) {
            alert("Email must be in lower case", "error");
          } else {
            emailjs.send("service_dg7cbvb", "template_c6y2nbj", {
              from_name: name,
              from_email: email,
              message: message,
            })
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert("Your Message Has Been Sent Successfully!");
            }, (err) => {
              console.error('FAILED...', err);
              alert("Can't Send Your Message at the Moment, Please Try Again!");
            });
            contactForm.reset();
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
  function showCustomMessage(message, type) {
    const existingMessage = document.querySelector('.custom-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageContainer = document.createElement("p");
    messageContainer.textContent = message;
    messageContainer.className = `custom-message ${type === "success" ? "success-message" : "error-message"}`;
    contactForm.appendChild(messageContainer);
  }

  
  var footer = document.getElementById("footer");
  footer.innerHTML = "Developed by Zohal Mirkhel";
});

