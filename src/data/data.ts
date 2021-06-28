export const levels = [
  "Associate",
  "Consultant",
  "Senior Consultant",
  "Principal Consultant",
  "Managing Principal",
];

export const tagText = {
  "Technical Leadership": {
    "Principal Consultant": {
      "Software Engineer": { name: "Principal Engineer", short: "PE" },
      "Quality Engineer": { name: "Principal Quality Engineer", short: "PTE" },
      color: "#E36756",
    },
    "Managing Principal": {
      "Software Engineer": { name: "Distinguished Engineer", short: "DE" },
      "Quality Engineer": {
        name: "Distinguished Quality Engineer",
        short: "DTE",
      },
      color: "#ED4664",
    },
  },
  Management: {
    "Principal Consultant": {
      "Software Engineer": { name: "Engineering Lead", short: "EL" },
      "Quality Engineer": { name: "Quality Engineering Lead", short: "QEL" },
      color: "#5686E3",
    },
    "Managing Principal": {
      "Software Engineer": { name: "Senior Engineering Lead", short: "SEL" },
      "Quality Engineer": {
        name: "Senior Quality Engineering Lead",
        short: "SQEL",
      },
      color: "#8356E3",
    },
  },
};

export const titles = {
  "Software Engineer": {
    Associate: "Associate Engineer",
    Consultant: "Engineer",
    "Senior Consultant": "Senior Engineer",
    "Principal Consultant": "Engineering Lead / Principal Engineer",
    "Managing Principal": "Senior Engineering Lead / Distinguished Engineer",
  },
  "Quality Engineer": {
    Associate: "Associate Quality Engineer",
    Consultant: "Quality Engineer",
    "Senior Consultant": "Senior Quality Engineer",
    "Principal Consultant":
      "Quality Engineering Lead / Principal Quality Engineer",
    "Managing Principal":
      "Senior Quality Engineering Lead / Distinguished Quality Engineer",
  },
};

export const sideBarData = [
  {
    category: "Overview",
    competencies: ["Description", "You Have", "You Will"],
  },
  {
    category: "Delivery",
    competencies: [
      "Narrative",
      "Technical Leadership",
      "Coding",
      "Testing",
      "Debugging",
      "Observability",
      "Architecture",
      "Cloud",
      "Data Design & Handling",
      "Security",
    ],
  },
  {
    category: "People",
    competencies: [
      "Narrative",
      "Management",
      "Feedback",
      "Effective Communication",
      "Teamwork",
      "Relationship Building",
      "Inclusion",
      "Mentoring",
      "Continuous Learning",
    ],
  },
  {
    category: "Stakeholder",
    competencies: [
      "Narrative",
      "Ambiguity & Risk",
      "Economic Thinking",
      "Decision Making",
      "Driving Alignment",
      "Business Acumen",
      "Strategic Work",
    ],
  },
];
