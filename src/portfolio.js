/* Customized portfolio.js for Adaora Nwogbo */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Adaora Nwogbo",
  title: "Hi, I'm Adaora",
  subTitle: emoji(
    "Data Analyst with a strong foundation in compliance, business control, and risk management. Skilled in Power BI, SQL, and Excel, with a passion for transforming raw data into actionable insights and compelling visual stories."
  ),
  resumeLink: "", // To be added later
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Audra505",
  linkedin: "https://www.linkedin.com/in/adaora-nwogbo/",
  gmail: "", // leave blank if not sharing
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "DATA STORYTELLING | COMPLIANCE | ANALYTICS",
  skills: [
    emoji("⚡ Develop dynamic dashboards and reports with Power BI, Excel, and Tableau"),
    emoji("⚡ Translate complex compliance and control data into clear visual narratives"),
    emoji("⚡ Conduct root cause analysis and process improvements using SQL and BI tools"),
    emoji("⚡ Combine policy, process, and technology insights to support decision-making")
  ],
  softwareSkills: [
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "SharePoint", fontAwesomeClassname: "fas fa-share-alt" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Nigeria, Nsukka",
      logo: require("./assets/images/harvardLogo.png"), // Replace later
      subHeader: "B.Sc. in Economics with Minor in Information Technology",
      duration: "2012 – 2016",
      desc: "Built strong foundations in economic modeling, data interpretation, and systems thinking."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Power BI / Excel / Tableau", progressPercentage: "90%" },
    { Stack: "SQL / Data Wrangling", progressPercentage: "80%" },
    { Stack: "Compliance & Risk Analysis", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Business Control Specialist",
      company: "Bank of America",
      date: "Jul 2023 – Jan 2025",
      desc: "Built and maintained policy tracking dashboards in SharePoint, transforming static documentation into interactive, data-driven tools that enhanced navigation, data input, and streamlined stakeholder access."
    },
    {
      role: "Business / Reporting Analyst (via iTalent Digital)",
      company: "Meta",
      date: "2022 – 2023",
      desc: "Mapped detailed privacy workflows, built executive-ready decks, and delivered compliance insights to cross-functional teams, driving 30% improvement in operational efficiency."
    },
    {
      role: "Compliance Analyst",
      company: "Wells Fargo",
      date: "2021 – 2022",
      desc: "Led investigation of 50+ escalated complaints under remediation policy; improved case accuracy and reduced repeat issues by 30%."
    }
  ]
};

const bigProjects = {
  title: "Portfolio Projects",
  subtitle: "DASHBOARDS & INSIGHTS",
  projects: [
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "Connecticut Real Estate Market Analysis",
      projectDesc: "Town-level sales and price trends with YoY/MoM performance, custom KPIs, and interactive storytelling in Power BI.",
      footerLink: [
        {
          name: "View Report",
          url: "https://github.com/Audra505/Connecticut-Real-Estate-Market-Analysis/blob/main/Power%20BI%20Report.md"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "AdventureWorks Sales Dashboard",
      projectDesc: "Product and customer analysis with top/bottom performers, custom drill-throughs, and revenue insights.",
      footerLink: [
        {
          name: "View Report",
          url: "https://github.com/Audra505/Adventureworks-Sales-Analysis/blob/main/Power%20BI%20Report.md"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Courses and credentials showcasing my data & compliance expertise",
  achievementsCards: [
    {
      title: "Power BI & SQL Bootcamp (3 months)",
      subtitle: "Completed immersive training in business intelligence, dashboard design, and advanced DAX techniques.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: []
    },
    {
      title: "Scrum Master & Salesforce Certified",
      subtitle: "Applied agile and CRM principles in compliance and business analysis roles.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blog Posts",
  subtitle: "Coming soon: reflections on data, compliance, and career growth.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = { title: "", subtitle: "", talks: [], display: false };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };

const resumeSection = {
  title: "Resume",
  subtitle: "Download my full resume (coming soon)",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's collaborate or connect — open to freelance and full-time roles.",
  number: "",
  email_address: ""
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource: { showGithubProfile: "true", display: true },
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
