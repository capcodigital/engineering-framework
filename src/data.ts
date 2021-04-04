export const levels = [
  'Associate',
  'Consultant',
  'Senior Consultant',
  'Principal Consultant',
  'Managing Principal',
];

export const titles = {
  'Software Engineer': {
    Associate: 'Associate Engineer',
    Consultant: 'Engineer',
    'Senior Consultant': 'Senior Engineer',
    'Principal Consultant': 'Engineering Lead / Principal Engineer',
    'Managing Principal': 'Senior Engineering Lead / Distinguished Engineer',
  },
  'Quality Engineer': {
    Associate: 'Associate Test Engineer',
    Consultant: 'Test Engineer',
    'Senior Consultant': 'Senior Test Engineer',
    'Principal Consultant': 'Test Engineering Lead / Principal Test Engineer',
    'Managing Principal':
      'Senior Test Engineering Lead / Distinguished Test Engineer',
  },
};

export const sideBarData = [
  {
    category: 'Overview',
    competencies: ['Job Description', 'Framework Criteria', 'Performance'],
  },
  {
    category: 'Delivery',
    competencies: [
      'Creating and understanding code',
      'Testing',
      'Debugging',
      'Observability',
      'Architecture',
      'Cloud',
      'Data Design & Handling',
      'Security Awareness and Best Practise Implementation',
      'Technical Leadership',
    ],
  },
  {
    category: 'People',
    competencies: [
      'Management',
      'Feedback',
      'Effective Communication',
      'Teamwork',
      'Relationship Building',
      'Inclusion',
      'Mentoring',
      'Continuous Learning',
    ],
  },
  {
    category: 'Stakeholder',
    competencies: [
      'Dealing with Ambiguity & Risk',
      'Economic Thinking',
      'Decision Making',
      'Driving Alignment',
      'Business Acumen',
      'Strategic Work',
    ],
  },
];

export const contentData = {
  Associate: {
    Overview: [],
    Delivery: [
      {
        name: 'Creating and Understanding Code',
        specialism: 'Software Engineer',
        description:
          "Is able to gain context within the team's domain; Writes code with testability, readability, edge cases, and errors in mind.",
      },
      {
        name: 'Creating and Understanding Code',
        specialism: 'Quality Engineer',
        description:
          "Able to gain context within the team's domain; Writes test code with readability, edge cases, and errors in mind.",
      },
      {
        name: 'Testing',
        specialism: 'Software Engineer',
        description:
          'Knows the testing pyramid. Writes unit tests, sometimes with help from more senior engineers.',
      },
      {
        name: 'Testing',
        specialism: 'Quality Engineer',
        description:
          'Knows the testing pyramid. Writes higher level tests, sometimes with help from more senior engineers.',
      },
      {
        name: 'Debugging',
        specialism: 'All',
        description: 'Understands the basics of debugging and the tools used. ',
      },
      {
        name: 'Observability',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Architecture',
        specialism: 'All',
        description:
          'Is aware of overall service architecture. Designs basic functions, understands where their functions fit in the overall solution',
      },
      {
        name: 'Cloud',
        specialism: 'All',
        description:
          'Is aware of the overall landscape of cloud providers and how the organisation uses them.  Is aware of the importance of learning and understanding cloud technologies.',
      },
      {
        name: 'Data Design & Handling',
        specialism: 'All',
        description:
          'Understands the role that data plays and has worked with data in systems',
      },
      {
        name: 'Security Awereness & Best Practise Implementation',
        specialism: 'All',
        description:
          'Understands the importance and language of security concepts.',
      },
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
    ],
    People: [
      {
        name: 'Management',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Feedback',
        specialism: 'All',
        description:
          'Understands how to deliver praise and constructive feedback in a useful manner.  Actively seeks out feedback from their teammates and manager, and works to use feedback that they receive as a tool for growth.',
      },
      {
        name: 'Effective Communication',
        specialism: 'All',
        description:
          'Communicates effectively, clearly, concisely and in an audience-oriented way, in written and verbal form.  Understands their area of work and shares their knowledge frequently with their teammates. Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.',
      },
      {
        name: 'Teamwork',
        specialism: 'All',
        description:
          'Has daily conversation with the team about the progress of their work. Helps their teammates when requested. Gives or shares credit where due.',
      },
      {
        name: 'Relationship Building',
        specialism: 'All',
        description:
          'Works to build strong relationships with their teammates and manager.',
      },
      {
        name: 'Incllusion',
        specialism: 'All',
        description:
          "Openly shares their opinions and contributes to discussions in a respectful manner. Works with teammates to resolve disagreement in a healthy manner. Is open to changing their perspective and plans based on others' input. ",
      },
      {
        name: 'Mentoring',
        specialism: 'All',
        description: 'Seeks out mentorship to grow their own experience.',
      },
      {
        name: 'Continuous Learning',
        specialism: 'All',
        description:
          'Recognises the opportunities for both structured and unstructured learning and has a plan for continuous development',
      },
    ],
    Stakeholder: [
      {
        name: 'Dealing with AMbiguity & Risk',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Economic Thinking',
        specialism: 'All',
        description:
          'Understands the importance of weighing cost and value in decision making. Asks more senior engineers for help in applying this type of thinking to their work.',
      },
      {
        name: 'Decision Making',
        specialism: 'All',
        description:
          'Can articulate decisions required, identifies relevant context and prepares options for consideration.',
      },
      {
        name: 'Driving Alignment',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Business Acumen',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Strategic Work',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
    ],
  },
};
