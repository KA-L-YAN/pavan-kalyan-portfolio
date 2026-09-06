export const profile = {
  name: "Pavan Kalyan",
  fullName: "Pavan Kalyan Budamacharla",
  role: "Data Engineer",
  tagline: "Data Integration — AWS — Distributed Pipelines",
  location: "Hyderabad, India",
  email: "pk591947@gmail.com",
  phone: "+91 91004 47112",
  socials: {
    github: "https://github.com/KA-L-YAN",
    linkedin: "https://www.linkedin.com/in/pavan-kalyan-budamacharla-5a07451ba/",
    twitter: "https://x.com/Pavan_x_Kalyan",
  },
  resumeUrl: "/pavan-kalyan-resume.pdf",
  portrait: "/images/pavan-portrait.png",
  wide: "/images/pavan-wide.jpg",
};

export const hero = {
  eyebrow: "DATA ENGINEER — INTEGRATION — AWS",
  line1: "PAVAN",
  line2: "KALYAN",
  sub: "Moves data across systems for a living. Watches it fail, finds the exact stage that broke, fixes it, ships it faster than it was.",
};

export const builds = {
  index: "02",
  eyebrow: "THIS IS WHAT HE BUILDS",
  heading: "Pipelines that move real data, and don't fall over when it gets messy.",
  paragraphs: [
    "A data-focused software engineer working on production data-integration workflows — batch processing, database and file transfers, source-to-target movement across databases, SFTP and object storage.",
    "Day to day that means AWS Glue ETL jobs, S3 for file and object handling, SQS queues and dead-letter queues, CloudWatch logs, DynamoDB for scheduling and state, and EC2 operations — the full surface of a cloud integration stack, not just the parts that demo well.",
  ],
  stats: [
    { value: "90%", label: "runtime cut on two critical jobs — 175min → <15min" },
    { value: "5+", label: "source-to-target pipeline patterns in production" },
    { value: "1.5+", label: "years shipping integration workflows at scale" },
  ],
};

export const approach = {
  index: "03",
  eyebrow: "THIS IS HOW HE THINKS",
  heading: "Never treat the pipeline as a single black box.",
  paragraphs: [
    "When an integration fails, the instinct is to trace — through logs, through queues, through every stage the data actually crossed — until the failing component is isolated, not guessed at.",
  ],
  principles: [
    {
      number: "01",
      title: "Trace, don't guess",
      body: "Every failure gets traced across execution state and multi-stage flow before a fix is written — inspecting logs, queues, schedules, and source/target behavior in that order.",
    },
    {
      number: "02",
      title: "Find the bottleneck, not a workaround",
      body: "Two jobs running past 175 minutes weren't patched — they were profiled, decomposed, and rebuilt down to under 15 through actual pipeline-logic analysis.",
    },
    {
      number: "03",
      title: "Operate what you build",
      body: "Implementation, debugging, and operational support sit with the same person. Code that ships without a plan for its 3am failure mode isn't finished.",
    },
  ],
};

export const stackGroups = [
  {
    title: "AWS",
    items: ["S3", "Glue", "SQS", "CloudWatch", "DynamoDB", "EC2"],
  },
  {
    title: "Data & Databases",
    items: ["SQL", "Oracle", "MySQL", "PostgreSQL", "SFTP", "DB-to-DB transfers"],
  },
  {
    title: "Programming",
    items: ["Python", "Scala", "Java", "C"],
  },
  {
    title: "Engineering",
    items: ["Git", "Linux / Bash", "Docker", "Production support", "Debugging", "Perf tuning"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Production ETL at Tech Mahindra",
    role: "Associate Software Engineer, Backend & Data Integration",
    period: "Sep 2024 — Present",
    description:
      "Production data-integration workflows moving data between enterprise systems through database, API, SFTP and cloud-storage paths — including database-to-database, SFTP-to-S3, Oracle DB-to-S3 and S3-to-SFTP patterns.",
    detail:
      "Built and supported ETL workloads in AWS Glue alongside S3 file handling, SQS/DLQ queues, CloudWatch logging, DynamoDB scheduling and EC2 operations. Optimized two critical jobs from 175+ minutes down to under 15 — a ~90% runtime reduction — through bottleneck analysis and pipeline-logic rework.",
    tags: ["AWS Glue", "S3", "SQS", "CloudWatch", "DynamoDB", "EC2", "Oracle"],
    link: null as string | null,
  },
  {
    number: "02",
    title: "Deep Learning Bird Identification",
    role: "Research project",
    period: "Published — IJRAR",
    description:
      "CNN-based wildlife-identification model trained to 94% accuracy on a custom bird-species dataset, with the methodology written up and published as a research article.",
    detail:
      "Covers dataset preprocessing, transfer learning on pretrained vision architectures, and evaluation against held-out species classes.",
    tags: ["Python", "CNN", "Keras", "Computer Vision"],
    link: "https://github.com/KA-L-YAN/Bird-Species-Recognition",
  },
  {
    number: "03",
    title: "Vehicle Service Management System",
    role: "Personal project",
    period: "Java · Spring Boot · MySQL",
    description:
      "A role-based backend for vehicle service operations — service scheduling, inventory tracking and customer management with automated reminders.",
    detail:
      "JWT-secured REST APIs on Spring Security, a normalized relational schema, request validation and a layered service/repository architecture built to be extended, not rewritten.",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "REST APIs"],
    link: "https://github.com/KA-L-YAN/VehicleServiceManagement",
  },
  {
    number: "04",
    title: "ML Preprocessing at Blackbuck Engineers",
    role: "Project Intern, Machine Learning",
    period: "Jun 2023 — Sep 2023",
    description:
      "Python preprocessing scripts feeding large datasets into supervised and unsupervised learning workflows for retail-sales analytics.",
    detail:
      "Analyzed model-performance metrics and translated the technical results into terms the business side could act on — forecasting, segmentation, inventory signals.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    link: "https://github.com/KA-L-YAN/BB-Internship-Project",
  },
];

export const experience = [
  {
    period: "Sep 2024 — Present",
    org: "Tech Mahindra",
    role: "Associate Software Engineer, Backend & Data Integration",
    location: "Hyderabad, India",
    points: [
      "Production data-integration workflows across database, API, SFTP and cloud-storage paths.",
      "Source-to-target patterns: database-to-database, SFTP-to-S3, Oracle DB-to-S3, S3-to-SFTP.",
      "ETL workloads in AWS Glue with S3, SQS/DLQ, CloudWatch, DynamoDB and EC2.",
      "Optimized two critical jobs — 175+ min down to under 15 min, ~90% runtime reduction.",
    ],
  },
  {
    period: "Jun 2023 — Sep 2023",
    org: "Blackbuck Engineers Pvt. Ltd.",
    role: "Project Intern, Machine Learning",
    location: "Remote",
    points: [
      "Built Python preprocessing scripts for large supervised/unsupervised learning datasets.",
      "Analyzed model-performance metrics against stated business requirements.",
    ],
  },
];

export const education = [
  {
    period: "2021 — 2024",
    org: "NRI Institute of Technology",
    role: "B.Tech, Computer Science & Engineering (Data Science) — CGPA 8.85",
  },
  {
    period: "2023",
    org: "Indian Institute of Technology, Kanpur",
    role: "Non-Degree Students Programme — Large Data Analysis & ML",
  },
];

export const certifications = [
  "AWS Certified Machine Learning – Associate (2025)",
  "Microsoft Certified: Azure AI Engineer Associate (AI-102) (2025)",
  "Microsoft Certified: Azure Fundamentals (AZ-900) (2025)",
  "IBM Python for Data Science (2025)",
  "GitHub Copilot Certification (2025)",
];

export const contact = {
  index: "07",
  eyebrow: "THIS IS SOMEONE YOU'D WANT ON YOUR TEAM",
  heading: "Have a pipeline that keeps breaking at 3am?",
  sub: "Open to data engineering and backend integration roles — or just talking through a hard systems problem.",
};

/**
 * The hidden arcade. Not part of the scroll story — reached by the Konami code
 * or the dim marker in the footer.
 */
export const arcade = {
  name: "Pipeline Snake",
  kicker: "ACCESS GRANTED",
  title: "PIPELINE SNAKE",
  blurb:
    "A small retro arcade build. You are the pipeline — collect packets to raise throughput, and don't hit a corrupt record. When the job fails it tells you the stage and the cell it died on, because guessing at a failure is not how you debug one.",
  footnote: "VANILLA TYPESCRIPT ON CANVAS — NO ENGINE, NO DEPENDENCIES",
  playUrl: "https://ka-l-yan.github.io/pipeline-snake/",
  sourceUrl: "https://github.com/KA-L-YAN/pipeline-snake",
};
