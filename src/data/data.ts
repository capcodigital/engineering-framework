export const levels = [
  'Associate',
  'Consultant',
  'Senior Consultant',
  'Principal Consultant',
  'Managing Principal',
];

export const tagText = {
  'Technical Leadership': {
    'Principal Consultant': {
      'Software Engineer': { name: 'Principal Engineer', short: 'PE' },
      'Quality Engineer': { name: 'Principal Test Engineer', short: 'PTE' },
      color: '#E36756',
    },
    'Managing Principal': {
      'Software Engineer': { name: 'Distinguished Engineer', short: 'DE' },
      'Quality Engineer': { name: 'Distinguished Test Engineer', short: 'DTE' },
      color: '#ED4664',
    },
  },
  Management: {
    'Principal Consultant': {
      'Software Engineer': { name: 'Engineering Lead', short: 'EL' },
      'Quality Engineer': { name: 'Test Engineering Lead', short: 'TEL' },
      color: '#5686E3',
    },
    'Managing Principal': {
      'Software Engineer': { name: 'Senior Engineering Lead', short: 'SEL' },
      'Quality Engineer': {
        name: 'Senior Test Engineering Lead',
        short: 'STEL',
      },
      color: '#8356E3',
    },
  },
};

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
    competencies: ['Job Description', 'You Have', 'You Will'],
  },
  {
    category: 'Delivery',
    competencies: [
      'Framework Criteria',
      'Technical Leadership',
      'Creating and understanding code',
      'Testing',
      'Debugging',
      'Observability',
      'Architecture',
      'Cloud',
      'Data Design and Handling',
      'Security Awareness and Best Practise Implementation',
    ],
  },
  {
    category: 'People',
    competencies: [
      'Framework Criteria',
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
      'Framework Criteria',
      'Dealing with Ambiguity and Risk',
      'Economic Thinking',
      'Decision Making',
      'Driving Alignment',
      'Business Acumen',
      'Strategic Work',
    ],
  },
];
