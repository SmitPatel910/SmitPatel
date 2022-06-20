/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Smit Patel",
  title: "Hi all, I'm Smit",
  subTitle: emoji(
    "Computer Science engineering student with excellent problem-solving skills and ability to perform well in a team. Passionate about solving problems through programming."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Cq69uYkpgCcJ4xammH_kyFEznoccw5vT/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SmitPatel910",
  githubRepo: "https://github.com/SmitPatel910?tab=repositories",
  linkedin: "https://www.linkedin.com/in/smitpatelcs/",
  gmail: "spate198@asu.edu",
  facebook: "https://www.facebook.com/SmitPatel0910/",
  instagram: "https://www.instagram.com/smit.patel.910/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASU.png"),
      subHeader: "Master of Computer Science",
      duration: "Aug. 2022 - Present",
      desc: "",
      descBullets: [
        "I am very excited to join ASU and pursue masters."
      ]
    },
    {
      schoolName: "Pandit Deendayal Energy University",
      logo: require("./assets/images/PDPU.jpg"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "July 2018 - June 2022",
      desc: "CGPA : 9.55",
      descBullets: [
        "Participated in different Hackathon's and worked on multiple projects.",
        "Did Internships in Data science and Software Engineering fields.",
        "Published Research papers of Cricket Database Management System, Parking Space Counter and Unconscious Person Detection."
      ]
    },
    {
      schoolName: "Gyanmanjari Vidyapith",
      logo: require("./assets/images/Gyanmanjari.jpg"),
      subHeader: "11th & 12th Board in Science Field",
      duration: "June 2016 - May 2018",
      desc:
        "Score : 94% & ACPC rank : 460 (top 10 in School)",
      descBullets: [
        "Observing things and deducing something from it has been my practice since childhood.", 
        "Learning constantly has always been my passion. This habit of observing things and my passion for learning new facts made me curious about computers and all the technical things working around me.",
        "Exceptional academic record throughout schooling ensured my admission to one of the top universities in India for Computer Engineering – Pandit Deendayal Energy University (PDEU, formerly PDPU), Gandhinagar."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern (Data Visualization)",
      company: "Saint Louis University",
      companylogo: require("./assets/images/SLUU.png"),
      date: "May 2021 – July 2021",
      desc:
        "Improved Facebook ads for targeted audience. Learned new skills and applied to daily tasks to improve efficiency and productivity. Conducted research collaboratively gathered information from multiple sources and presented results."
    },
    {
      role: "Software Engineering Intern (Full stack Developer)",
      company: "Astha Technology Solutions",
      companylogo: require("./assets/images/AsthaTechnology.jpg"),
      date: "December 2021 – February 2022",
      desc:
        "Worked on ReactJS and Bootstrap to build an Webapp-builder for creating different categories of websites using drag and drop features only without writing single lines of code. Integrated secured Stripe payment gateway so, users can purchase premium website templates for business."
    },
    // {
    //   role: "Petroleum Virtual Lab",
    //   company: "PDPU College Project",
    //   companylogo: require("./assets/images/PDPU2.jpg"),
    //   date: "April 2021 – current",
    //   desc:
    //     "During this time period I got role as a backend intern."
    // },
    {
      role: "Software Engineering Intern (Machine Learning)",
      company: "Verzeo (Microsoft Authorized)",
      companylogo: require("./assets/images/verzeo.png"),
      date: "October 2019 – November 2019",
      desc:
        "Created plans and communicated deadlines to complete projects on time. Worked on House Price prediction project.  Initially did outlier removal and dimensionality reduction. Then the model was trained using simple linear regression and built the model."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Real world projects which are developed during my bachelors time.",
  projects: [
    {
      image: require("./assets/images/ParkingSpaceCounter.jpg"),
      projectName: "Parking Space Counter",
      projectDesc: "Objective behindd this project was to provide nearest parking slot to reduce Petrol Consumption, Air Pollution, Vehicle vandalism and save users time while looking for parking slots.",
      footerLink: [
        {
          name: "Website",
          url: "https://parkingspacecountr.herokuapp.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/Parking_Space_Counter"
        }
        
      ]
    },
    {
      image: require("./assets/images/SortingAlgo.png"),
      projectName: "visualization of Sorting Algorithm",
      projectDesc: "With the knowledge of various sorting algorithms, I have developed Visualizer for all algorithm using HTML, CSS, JS and Google Charts.",
      footerLink: [
        {
          name: "Website",
          url: "https://smitpatel910.github.io/Sorting-Algorithm-Visualizer/"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/Sorting-Algorithm-Visualizer"
        }
      ]
    },
    {
      image: require("./assets/images/Income-Expense-Analysis.jpg"),
      projectName: "Income & Expense Analysis",
      projectDesc: "Designed web application to add different category’s expenses as well as incomes and then generate pdf report for total calculations as well as generates animated graphs to visualize all the income and expense easily.",
      footerLink: [
        {
          name: "Website",
          url: "https://income-expense-analysis.000webhostapp.com/"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/income-expense-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/Spotify.jpg"),
      projectName: "Spotify Clone",
      projectDesc: "Designed Spotify clone web application using flutter which has Signup and Login functinality also, user can like the song and access that liked song playlist.",
      footerLink: [
        {
          name: "Website",
          url: "https://smitpatel910.github.io/Spotify-Clone-host/#signIn"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/Flutter-Spotify_Clone"
        }
      ]
    },
    {
      image: require("./assets/images/DiskScheduling.webp"),
      projectName: "OS - Disk Scheduling",
      projectDesc: "Implemented disk scheduling algorithms visualizer with features such as, “Time Log View”, “Preemptive/Non-Preemptive” Options.",
      footerLink: [
        {
          name: "Website",
          url: "https://smitpatel910.github.io/OS-Disk-Scheduling/"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/OS-Disk-Scheduling"
        }
      ]
    },
    {
      image: require("./assets/images/HomepagePlugin.png"),
      projectName: "Website HomePage Plugin",
      projectDesc: "Implemented a website having favorite website shortcuts, World Clock, Google Search and many more functionality.",
      footerLink: [
        {
          name: "Website",
          url: "https://smitpatel910.github.io/Starthome-main/"
        },
        {
          name: "GitHub",
          url: "https://github.com/SmitPatel910/Starthome-main"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const achievementSection = {
  title: emoji("Top Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Secured first rank in Research Paper competition",
      subtitle:
      "ACM SRM University organized National level research paper competition and I secured first rank in that competition.",
      image: require("./assets/images/ACM.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12ZB40ALWrzomgNmwMdNArplkf9Qdnb0n/view?usp=sharing"
        },
        {
          name: "Instagram",
          url:
            "https://www.instagram.com/p/CNfEI7pHsDl/?utm_source=ig_web_copy_link"
        },
        {
          name: "Winner List on website",
          url:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E22AQHRXk-Qfle0qQ%2Ffeedshare-shrink_800%2F0%2F1618062768854%3Fe%3D1622073600%26v%3Dbeta%26t%3DP0uYenw5mtRE0-gTSwBrlgcGQQaO06cZmAVYjnM9tNQ&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fin%2Fthearyansrivastava&tbnid=8jchAl66FUmZxM&vet=12ahUKEwjYotL4rtvwAhUOD3IKHQIbAJ0QMygTegQIARBh..i&docid=RqrXvCNAGk6pGM&w=800&h=800&q=ACM%20SRM%20GPC&safe=strict&ved=2ahUKEwjYotL4rtvwAhUOD3IKHQIbAJ0QMygTegQIARBh"
        }
      ]
    },
    {
      title: "Hackathon COVID 19 presented by PDPU IIC",
      subtitle:
        "I have participated in this hackathon and create a model to detect Unconscious person that can be helpful to detect Unconscious person on lockdown time.",
      image: require("./assets/images/Hackathon2.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/19_yAFPWa2JifA81XlONnh3QgACXctpQ7/view?usp=sharing"
        }
      ]
    },

    {
      title: "Microsoft Cretified Certification",
      subtitle: "Completed Microsoft certified ML training and Internship as an Intern.",
      image: require("./assets/images/verzeo.png"),
      footerLink: [
        {
          name: "Training Certification", 
          url: "https://drive.google.com/file/d/1ZxdV2y4FcKkvDcG53TYcs23LozqIXLvf/view?usp=sharing"
        },
        {
          name: "Internship Certification",
          url: "https://drive.google.com/file/d/1H1vqt02_ArDQKpNHVEvOlNWpmyb7olyr/view?usp=sharing"
        },
        {
          name: "Final Project",
          url: "https://drive.google.com/drive/folders/17aBez7bs1f4LJZxrcygD-nuZd2HWbTea?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"",
  appointment_link: "https://calendly.com/smitpatel910/meeting",
  appointment_light_logo:  require("./assets/images/Appointment_light.png"),
  appointment_dark_logo:  require("./assets/images/Appointment_dark.png"),
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails
};
