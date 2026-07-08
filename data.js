/* ============================================================
   PORTFOLIO DATA FILE
   ============================================================
   This is the ONLY file you need to edit day-to-day.
   Add one entry to LEARNING_LOG every day you study.
   Add a PDF entry when Claude gives you a lesson PDF and you
   drop it into the /pdfs folder.
   Update PROJECTS as you complete each of the 8 curriculum projects.
   Update SKILLS status as you move from "learning" -> "practiced" -> "confident".

   After editing, just commit + push to GitHub. GitHub Pages
   redeploys automatically within ~60 seconds.
   ============================================================ */

// ---- CURRICULUM META (used for the "systemctl status" hero) ----
const CURRICULUM = {
  learnerName: "Anuj",
  targetRoles: ["Linux Administrator", "Cloud Engineer", "Junior DevOps Engineer"],
  startDate: "2026-07-06",   // Day 1 date — change if needed
  totalDays: 60,
  currentDay: 3,             // <-- UPDATE THIS every day you complete
  status: "active (running)" // change to "on-hold" or "complete" if needed
};

// ---- DAILY LEARNING LOG (newest entries at the TOP) ----
// level: "info" | "ok" | "warn"  -> controls the color of the log line
const LEARNING_LOG = [
  {
    day: 3,
    date: "2026-07-08",
    level: "info",
    tag: "LINUX.PERMISSIONS",
    summary: "Covered chmod/chown, octal vs symbolic notation, special permissions (SUID/SGID/sticky bit).",
    pdf: null // set to "pdfs/day03-permissions.pdf" once you save the file
  },
  {
    day: 2,
    date: "2026-07-07",
    level: "info",
    tag: "LINUX.FILESYSTEM",
    summary: "Filesystem hierarchy standard, mount points, inodes, directory structure walkthrough.",
    pdf: null
  },
  {
    day: 1,
    date: "2026-07-06",
    level: "ok",
    tag: "LINUX.INTRO",
    summary: "Linux basics, distros, shell fundamentals, first terminal commands.",
    pdf: null
  }
];

// ---- PROJECTS (the 8 curriculum projects) ----
// status: "planned" | "in-progress" | "done"
const PROJECTS = [
  {
    id: "p1",
    title: "Linux Server Setup",
    status: "planned",
    description: "Provision and harden a Linux server from scratch — users, groups, SSH, firewall, basic monitoring.",
    stack: ["Linux", "SSH", "UFW/iptables"],
    repo: "",
    pdf: null
  },
  {
    id: "p2",
    title: "Production Web Server",
    status: "planned",
    description: "Nginx/Apache reverse proxy, TLS, log rotation, systemd service management.",
    stack: ["Nginx", "systemd", "Let's Encrypt"],
    repo: "",
    pdf: null
  },
  {
    id: "p3",
    title: "AWS Three-Tier Architecture",
    status: "planned",
    description: "VPC, subnets, ALB, Auto Scaling, RDS — a real production-style AWS design.",
    stack: ["AWS", "VPC", "ALB", "RDS"],
    repo: "",
    pdf: null
  },
  {
    id: "p4",
    title: "Docker Deployment",
    status: "planned",
    description: "Containerize an app, multi-stage builds, Docker Compose for local orchestration.",
    stack: ["Docker", "Docker Compose"],
    repo: "",
    pdf: null
  },
  {
    id: "p5",
    title: "CI/CD Pipeline",
    status: "planned",
    description: "Automated build-test-deploy pipeline triggered on every git push.",
    stack: ["GitHub Actions", "Jenkins"],
    repo: "",
    pdf: null
  },
  {
    id: "p6",
    title: "Terraform Infrastructure",
    status: "planned",
    description: "Infrastructure as Code — the AWS 3-tier architecture rebuilt as reusable Terraform modules.",
    stack: ["Terraform", "AWS"],
    repo: "",
    pdf: null
  },
  {
    id: "p7",
    title: "Monitoring Stack",
    status: "planned",
    description: "Prometheus + Grafana monitoring and alerting for the deployed infrastructure.",
    stack: ["Prometheus", "Grafana"],
    repo: "",
    pdf: null
  },
  {
    id: "p8",
    title: "Final End-to-End DevOps Project",
    status: "planned",
    description: "Everything combined: IaC-provisioned infra, containerized app, CI/CD pipeline, monitoring, and alerting.",
    stack: ["AWS", "Terraform", "Docker", "CI/CD", "Prometheus"],
    repo: "",
    pdf: null
  }
];

// ---- SKILLS MATRIX ----
// status: "learning" | "practiced" | "confident"
const SKILLS = [
  { name: "Linux Fundamentals", status: "learning" },
  { name: "File Permissions & Ownership", status: "learning" },
  { name: "Shell Scripting", status: "learning" },
  { name: "Systemd & Process Mgmt", status: "learning" },
  { name: "Networking Basics", status: "learning" },
  { name: "AWS Core Services", status: "learning" },
  { name: "Docker", status: "learning" },
  { name: "CI/CD", status: "learning" },
  { name: "Terraform", status: "learning" },
  { name: "Monitoring (Prometheus/Grafana)", status: "learning" },
  { name: "Git & GitHub", status: "learning" }
];
