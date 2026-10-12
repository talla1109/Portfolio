export const profile = {
  name: "John Harold Talla",
  photo: "/lala.jpg", 
  shortName: "John",
  role: "BSIT Student & Aspiring Web Developer",
  school: "Cavite State University – Tanza Campus",
  section: "BSIT 3-3",
  tagline:
    "I am a BSIT student and aspiring web developer focused on building modern, responsive, and efficient websites, with growing expertise in HTML, CSS, JavaScript, and React.",
  email: "johnharoldtalla@gmail.com", 
  location: "Cavite, Philippines",
  socials: [
    { label: "GitHub", href: "https://github.com/talla1109" }, 
    { label: "Facebook", href: "https://www.facebook.com/Tal.JHT" }, 
    { label: "Vercel", href: "https://vercel.com/unknown-a82c/~/deployments" }, 
  ],
};

export const about = {
  paragraphs: [
    "I'm a third-year Bachelor of Science in Information Technology student at Cavite State University – Tanza Campus, section BSIT 3-3.",
    "I learn best by building. My coursework has me writing XML and XSLT, designing SQL databases, implementing data structures in Python, and building responsive interfaces with Bootstrap, JavaScript, and now React with Tailwind CSS.",
    "I like projects that solve a real problem, like my capstone, which helps a neighborhood sari-sari store track stock, expiry dates, and customer credit.",
  ],
  interests: [
    "Web application development",
    "Database design",
    "Data structures and algorithms",
    "Local-business technology",
    "Responsive UI design",
  ],
  skills: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Tailwind CSS", level: 75 },
    { name: "SQL / MySQL", level: 80 },
    { name: "Python", level: 70 },
    { name: "XML (DTD, XSLT, XPath)", level: 80 },
    { name: "Bootstrap 5", level: 80 },
  ],
};

// category: "Web" | "Database" | "Data Structures"
export const projects = [
  {
    id: "CATERING SERVICE WEBSITE",
    title: "NORAL TIYAN CATERING SERVICE WEBSITE",
    category: "Web",
    tag: "Capstone",
    summary:
      "Development monitor inventory, Booking, reservation service, display different service ,provide contact info and location business.",
    details: [
      "Main feature: online booking, recervation service, different service available, provide contact information, local business, monitor inventory menu category and package.",
      
    ],
    tech: ["Web App", "Database", "Inventory", "Credit Ledger"],
    colors: ["#1c6b45", "#f2b632"],
    glyph: "SG",
  },
  {
    id: "xml-portfolio",
    title: "XML Technologies Portfolio",
    category: "Web",
    tag: "ITEC 60",
    summary:
      "Personal portfolio website powered by XML data and processed with several XML technologies.",
    details: [
      "Integrates XML, DTD, XSLT, XPath, DOM, and SAX-style processing.",
      "Loads content dynamically using AJAX with XMLHttpRequest.",
      "Delivered with full documentation.",
    ],
    tech: ["XML", "DTD", "XSLT", "XPath", "AJAX"],
    colors: ["#123524", "#7fc8a0"],
    glyph: "XML",
  },
  {
    id: "dtd-bin",
    title: "DTD/XML Submission Bin",
    category: "Web",
    tag: "ITEC 60",
    summary: "Single-file web portal for submitting and checking DTD/XML work.",
    details: [
      "Built as one HTML application with a dark, monospace look.",
      "Practices XML structure, entity declarations, and attribute constraints.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "XML"],
    colors: ["#10231a", "#f2b632"],
    glyph: "</>",
  },
  {
    id: "error-log",
    title: "Error Log with Doubly Linked List",
    category: "Data Structures",
    tag: "Python",
    summary:
      "Error log for a web application backed by a Python doubly linked list.",
    details: [
      "Append and delete run in O(1) by relinking node pointers directly.",
      "Shows how the choice of data structure affects log performance.",
    ],
    tech: ["Python", "Linked List", "Big-O"],
    colors: ["#1c6b45", "#cfdcd3"],
    glyph: "DLL",
  },
  {
    id: "syntax-validator",
    title: "Template Syntax Validator",
    category: "Data Structures",
    tag: "Stack",
    summary:
      "Stack-based checker for matching brackets in PHP template syntax, with a step-through visualizer.",
    details: [
      "Pushes opening brackets and pops on matching closers to catch mismatches.",
      "Interactive visualizer lets you step through the stack one character at a time.",
    ],
    tech: ["Stack", "Parsing", "Visualizer"],
    colors: ["#123524", "#f2b632"],
    glyph: "{ }",
  },
  {
    id: "registry",
    title: "University Registry Database",
    category: "Database",
    tag: "MySQL",
    summary: "MySQL student registry with queries for filtering and reporting.",
    details: [
      "Covers table creation, inserts with auto-increment IDs, LIKE and NOT IN filters.",
      "Aggregate queries grouped by sex, joins, subqueries, and cleanup with DROP.",
    ],
    tech: ["MySQL", "JOIN", "Subqueries", "Aggregates"],
    colors: ["#1c6b45", "#eef3ef"],
    glyph: "SQL",
  },
  {
    id: "calculator",
    title: "JavaScript Calculator",
    category: "Web",
    tag: "JavaScript",
    summary: "Arithmetic calculator with input validation and an animated interface.",
    details: [
      "Validates input before computing results.",
      "Animated UI responds to each button press.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    colors: ["#10231a", "#7fc8a0"],
    glyph: "+−×÷",
  },
  {
    id: "bootstrap-lab",
    title: "Bootstrap 5 Responsive Layout",
    category: "Web",
    tag: "Lab 01",
    summary: "Multi-section responsive page built with Bootstrap's grid system.",
    details: [
      "Uses rows, columns, and breakpoints to adapt from phone to desktop.",
      "Built in Visual Studio Code.",
    ],
    tech: ["Bootstrap 5", "HTML", "CSS"],
    colors: ["#123524", "#cfdcd3"],
    glyph: "B5",
  },
];

export const resume = {
  education: [
    {
      title: "Bachelor of Science in Information Technology",
      place: "Cavite State University – Tanza Campus",
      period: "Third year, BSIT 3-3",
      note: "Coursework: XML Technologies, Data Structures, Databases, Web Development, Application Development and Emerging Technologies.",
    },
  ],
  // Academic experience, since these are coursework and class projects.
  experience: [
    {
      title: "Capstone Project Developer: NORAL TIYAN CATERING SERVICE WEBSITE",
      place: "BSIT Program, CvSU Tanza",
      period: "2026",
    },
    {
      title: "Web Developer, XML Technologies Portfolio",
      place: "DCIT 26, CvSU Tanza",
      period: "2026",
    },
    {
      title: "Laboratory Projects",
      place: "DCIT 26, CvSU Tanza",
      period: "SY 2026–2027",
      note: "Building React and Tailwind CSS applications deployed on Vercel.",
    },
  ],
  skills: [
    "HTML5",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap 5",
    "Python",
    "MySQL",
    "XML / XSLT / XPath",
    "Git & GitHub",
    "Visual Studio Code",
  ],
};
