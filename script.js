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
      <a href="https://github.com/ZohalMirkhel"><i class="fab fa-github"></i></a>
      <a href="https://www.facebook.com/profile.php?id=61559887775140"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.linkedin.com/in/zohal-mirkhel-840a7530a/"><i class="fa-brands fa-linkedin"></i></a>
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
          <a href="CV/Zohal Mirkhel CV.pdf" download="Zohal_Mirkhel_CV.pdf" class="edu-button">Download CV</a>
        </div>
      </div>
    `;
  }
});

// Projects section content initialization
const myProjects = document.getElementById("my-projects");
  const popUp = document.getElementById("pop-up");
  const popupContent = document.getElementById("popup-content");
  const closePop = document.getElementById("close-pop");
  const mainContent = document.getElementById("main-content");
  const body = document.body;
  
  const projects = [
    {
      title: "Product Landing Page",
      shortDescription: "This project is an e-commerce website dedicated to showcasing and selling traditional Afghan clothing and accessories. It features a responsive design, easy-to-use navigation, product listings, an email subscription form, and a search bar.",
      longDescription: "This project is an e-commerce website designed to showcase and sell traditional Afghan clothing and accessories. The website emphasizes user experience, responsiveness, and aesthetics. Key features include a dynamic banner slider, a user-friendly navigation bar, and detailed product listings with images, prices, and descriptions. It also includes an email subscription form for updates and promotions, a search bar for easy product searches, and a rich history section that provides cultural context for Afghan clothing. Additionally, the services section highlights key offerings such as fast shipping, easy returns, 24/7 support, and affordable prices. The contact information section provides multiple ways for users to reach out for support or inquiries. The entire site is built using HTML and CSS, ensuring a fully responsive and seamless experience across all devices.",
      image: "images/Product_Landing_Page.png",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/product-landing-page/",
      sourceLink: "https://github.com/ZohalMirkhel/product-landing-page",
    },
    {
      title: "Number Validator",
      shortDescription: "The Telephone Number Validator is a web application that allows users to validate and format phone numbers based on the selected country. The application then displays the validation result and the formatted number.",
      longDescription: "The Telephone Number Validator is an intuitive web application designed to validate and format phone numbers according to the standards of different countries. It provides a simple interface where users can enter a phone number into the input field and select the appropriate country code from a dropdown menu. By clicking the (Check) button, the application processes the input to validate its correctness and format it according to the selected country's phone number conventions.",
      image: "images/PhoneNumberValidator.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/Telephone-Number-Validator/",
      sourceLink: "https://github.com/ZohalMirkhel/Telephone-Number-Validator",
    },
    {
      title: "Cash Register",
      shortDescription: "The Cash Register web application is a robust tool for managing transactions and cash flow in a retail setting. It facilitates the calculation of change and the real-time updating of the cash drawer based on the amount of cash provided by the customer.",
      longDescription: "The Cash Register is a web application designed to calculate change and update the cash drawer based on the amount received from the customer. It features an input field for the received amount, a dropdown menu for selecting the payment method, and a button to process the transaction and display the change due. This application is designed to streamline the checkout process, ensuring accurate and efficient handling of cash transactions, reducing errors, and improving customer service.",
      image: "images/register.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://github.com/ZohalMirkhel/Build-a-Cash-Register",
      sourceLink: "https://zohalmirkhel.github.io/Build-a-Cash-Register/",
    },
    {
      title: "Pokémon Search App",
      shortDescription: "The Pokémon Search App is a web application designed to allow users to search for Pokémon by their name or ID. It provides detailed information and a sprite image of the searched Pokémon.",
      longDescription: "The Pokémon Search App is a comprehensive web application that enables users to search for Pokémon by entering either the name or ID of the Pokémon they wish to find. Upon initiating the search, the app displays an array of detailed information about the Pokémon, including its name, ID, weight, height, types, and various stats. Additionally, the app shows a sprite image of the Pokémon, giving users a visual representation. The user-friendly interface, adorned with a colorful Pokémon-themed banner, enhances the overall experience, making it easy and enjoyable to look up any Pokémon.",
      image: "images/PSA.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Spilne"],
      liveLink: "https://zohalmirkhel.github.io/Pok-mon-Search-App/",
      sourceLink: "https://github.com/ZohalMirkhel/Pok-mon-Search-App",
    },
    {
      title: "Portfolio Project",
      shortDescription: "This project is a portfolio website designed to showcase various web development projects. The website employs a sleek, dark-themed design with a focus on simplicity and modern aesthetics.",
      longDescription: "This portfolio website is designed to showcase various web development projects. It features a modern, minimalist design with a dark theme, providing a sleek and professional look. The website includes a navigation bar with links to Home, About, Work, and Contact sections, allowing easy access to different parts of the site. The website is fully responsive, ensuring that it provides a seamless user experience across various devices and screen sizes.",
      image: "images/Portfolio.png",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/portfolio_project/",
      sourceLink: "https://github.com/ZohalMirkhel/portfolio_project",
    },
    {
      title: "Tribute Page",
      shortDescription: "This project is a Tribute Page created to showcase a fictional web developer's skills and projects. It demonstrates the use of HTML and CSS to build a responsive and visually appealing website.",
      longDescription: "This project is a tribute page honoring Dr. Norman Borlaug, the man who saved a billion lives through his contributions to agriculture and the Green Revolution. The main features include a header with Dr. Borlaug's name and a tagline. The tribute page demonstrates the web developer's proficiency in creating a structured and engaging layout. It effectively uses HTML for content organization and CSS for styling and responsiveness, ensuring a seamless user experience across various devices.",
      image: "images/tp1.png",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/tribute-page/",
      sourceLink: "https://github.com/ZohalMirkhel/tribute-page",
    },
    {
      title: "Documentation Page",
      shortDescription: "This is a documentation page about space, covering various topics such as astronomy, the universe, stars, black holes, and galaxies. It serves as an educational resource for understanding the vast expanse beyond Earth's atmosphere.",
      longDescription: "The Space Documentation page is an extensive educational resource designed to provide comprehensive information about the vast expanse beyond Earth's atmosphere. Overall, the Space Documentation page is a meticulously organized and informative resource, designed to educate readers about the wonders of space. It combines historical context, scientific explanations, and engaging content to foster a deeper understanding of the universe and its myriad components.",
      image: "images/DemoPic.png",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/technical_documentation_page/",
      sourceLink: "https://github.com/ZohalMirkhel/technical_documentation_page",
    },
    {
      title: "Roman Number Converter",
      shortDescription: "The Roman Number Converter is a web application that allows users to convert Arabic numbers to Roman numerals. Simply enter a number in the input field and click the (Convert) button to see the Roman numeral equivalent. ",
      longDescription: "The Roman Number Converter is a user-friendly web application that simplifies the process of converting Arabic numbers to Roman numerals. The interface features a single input field where users can enter any Arabic number they wish to convert. By clicking the (Convert) button, the application quickly processes the input and displays the equivalent Roman numeral. The application thus not only provides a practical tool but also helps users learn about the historical numeral system.",
      image: "images/RNC.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/Roman-Numeral-Converter/",
      sourceLink: "https://github.com/ZohalMirkhel/Roman-Numeral-Converter",
    },
    {
      title: "Palindrome",
      shortDescription: "This web application determines if a given text is a palindrome. It features an input field to enter text, a button to initiate the check, and a display area for the result. The design is responsive, ensuring usability across various devices.",
      longDescription: "This web application simplifies the process of identifying palindromes by automating the comparison. When a user enters text into the input field and clicks the (Check) button, the application removes any non-alphanumeric characters and converts the text to a uniform case (usually lowercase) to ensure accurate comparison. It then reverses the cleaned text and compares it to the original cleaned version. If the two match, the text is declared a palindrome. The application’s design prioritizes user experience. Its responsive nature ensures that it functions well across various devices, while the clear and concise interface makes it accessible to users of all ages and technical backgrounds.",
      image: "images/Palindrome.png",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      liveLink: "https://zohalmirkhel.github.io/palindrome/",
      sourceLink: " https://github.com/ZohalMirkhel/palindrome",
    },
    {
      title: "Survey Form",
      shortDescription: "This web form collects user feedback to improve the freeCodeCamp platform. It asks for the user's name, email, age (optional), current role, recommendation likelihood, favorite features, improvement suggestions, and additional comments. Users are prompted to submit the form after completion.",
      longDescription: "This survey form is designed to collect detailed user feedback to improve the freeCodeCamp platform. With a modern and responsive design, the form ensures an optimal user experience across various devices. It includes several fields to capture comprehensive user input. The form concludes with a submit button for users to send their responses. This comprehensive survey aims to collect valuable insights from the user community to drive continuous improvement of the freeCodeCamp platform, enhancing its user-friendliness and effectiveness.",
      image: "images/sf.png",
      technologies: ["HTML", "CSS", "Git", "GitHub"],
      liveLink: "https://github.com/ZohalMirkhel/survey-form",
      sourceLink: "https://github.com/ZohalMirkhel/survey-form",
    },
  ];

  if (myProjects && popUp && popupContent && closePop) {
    myProjects.innerHTML = projects
      .map(
        (project, index) => `
      <div class="proj">
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" />
        <p>${project.shortDescription}</p>
        <button class="popup-button" onclick="showPopup(${index})">Learn More</button>
      </div>`
      )
      .join("");

    window.showPopup = function (index) {
      const project = projects[index];
      popupContent.innerHTML = `
        <button id="close-pop" class="close-btn">&times;</button>
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" />
        <p>${project.longDescription}</p>
        <p>Technologies: ${project.technologies.join(", ")}</p>
        <a class="popup-button" href="${project.liveLink}" target="_blank">Live Site</a>
        <a class="popup-button" href="${project.sourceLink}" target="_blank">GitHub Repository</a>
      `;
      popUp.classList.remove("hidden");
      mainContent.classList.add("blurred");
      body.classList.add("no-scroll");

      document.getElementById("close-pop").addEventListener("click", () => {
        popUp.classList.add("hidden");
        mainContent.classList.remove("blurred");
        body.classList.remove("no-scroll");
      });
    }
  }
    
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
