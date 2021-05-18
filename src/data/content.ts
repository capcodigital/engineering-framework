const contentData = {
  Associate: {
    Overview: [
      {
        name: 'Job Description',
        specialism: 'Software Engineer',
        description:
          'An associate developer has limited experience and is relatively new to the practice of software development. Their focus should be on acquiring skills and improving their capabilities. On the consulting side they should be focused on improving their communication and team work skills as these will be important for future leadership opportunities.',
      },
      {
        name: 'You Have',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Theoretical background such as a university or college program in Computer Science (Technology)</li><li>Coop / internship or equivalent work experience</li><li>Desire / drive to scale your business and technology knowledge</li></ul>',
      },
      {
        name: 'You Will',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Focus on increasing competencies in Software Development</li><li>Enhance communication and relationship management skills with stakeholders.</li></ul>',
      },
      {
        name: 'Job Description',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Quality Engineer',
        description: 'Coming Soon.',
      },
    ],
    Delivery: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Completes tasks with some guidance, and produces deliverables with infrequent/minor corrections</li> <li>Delivers in a timely manner and demonstrates adequate knowledge of content and processes</li><li>Ability to handle increasingly complex tasks with minimal direction while maintaining quality</li></ul>',
        description2:
          'Bob’s code is of reasonable quality.  Closer attention could be made to his coding style as it is inconsistent at times. He sometimes forgets to actually run the code before committing. This had led to a few broken builds, but nothing serious.',
        description3:
          'Alice has a consistent and readable coding style.  She has good attention to detail especially around handling edge cases.  Even though she has limited experience, she has successfully executed minor refactoring to improve the codebase.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Coding',
        specialism: 'Software Engineer',
        description:
          "Is able to gain context within the team's domain; Writes code with testability, readability, edge cases, and errors in mind.",
      },
      {
        name: 'Coding',
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
        name: 'Security',
        specialism: 'All',
        description:
          'Understands the importance and language of security concepts.',
      },
    ],
    People: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Interact with all team members in a professional and collaborative manner</li> <li>Maintain effectiveness during changing circumstances and successfully fulfills responsibilities</li> <li>Positive impact to the working environment</li><li>Proactively seeks development opportunities, pre-empting the skills or content required for delivery</li></ul>',
        description2:
          'Alice gets along well with her teammates. She reaches out for help when she needs it, and offers assistance to those who ask. For her current project, a new testing framework was introduced that Alice wasn’t familiar with. She spent time reading the documentation, and is now able to produce high quality unit tests using the framework.',
        description3:
          'Bob joined the project during the early phases of development.  As the project ramped up, Bob proactively welcomed each new member, and helped facilitate onboarding activities.  During one of the grooming sessions,  Bob observed that the team had little experience around one of the features. Bob took the initiative to read about various implementations of that feature, which helped the team significantly during technical design sessions.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
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
        name: 'Inclusion',
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
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Aware of project stakeholders and conscious of the need to build relationships with them </li> <li>Highly professional and responsive</li> <li>Actively seeks alignment and understanding with stakeholders’ needs</li></ul>',
        description2:
          'Alice often researches comparable frameworks for her projects and spends time understanding how more advanced features might work. Using this knowledge, she provides valuable feedback in order to better meet the project requirements.',
        description3:
          'Alice often researches comparable frameworks for her projects and spends time understanding how more advanced features might work. Using this knowledge, she provides valuable feedback in order to better meet the project requirements.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Dealing with Ambiguity & Risk',
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
  Consultant: {
    Overview: [
      {
        name: 'Job Description',
        specialism: 'Software Engineer',
        description:
          'A consultant developer has delivered on a few projects and has developed one or more areas of expertise.  They should continue to acquire skills but also focus on becoming experts in a few. On the consulting side their focus on developing expertise should position them well as leaders within projects.  They should proactively seek out leadership opportunities.',
      },
      {
        name: 'You Have',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Demonstrated an ability to deliver on a small number of projects</li><li>Have an intermediate level of expertise in one or more technical subjects</li><li>Demonstrated an ability to be fungible in learning or acclimating new technologies</li></ul>',
      },
      {
        name: 'You Will',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Continue to acquire skills but also focus on becoming an expert in a few</li><li>Gain expertise to position yourself as a leader within projects </li><li>Actively seek out leadership opportunities</li><li>Have an excellent understanding of standard processes  used to deliver a project</li></ul>',
      },
      {
        name: 'Job Description',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Quality Engineer',
        description: 'Coming Soon.',
      },
    ],
    Delivery: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Ability to handle increasingly complex tasks with minimal direction</li><li>Produce high quality deliverables</li><li>Deliver in a timely manner and demonstrate intermediate knowledge of content and processes</li><li>Considered a SME of at least part of an application</li></ul>',
        description2:
          'Alice is a very consistent performer on the team.  She almost always finishes on time with very few bugs.  Her coding style is clean, consistent and uses a lot of best practices like non repeating code and favouring simplicity.',
        description3:
          'Bob is extremely productive on the team.  His code is clean and thorough. Bob is also beginning to have a multi-faceted approach to building solutions.  His code considers: threading, memory management, separation of concerns, performance etc.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Coding',
        specialism: 'Software Engineer',
        description:
          "Understands a portion of the team's domain within which, they consistently write functions that are easily testable, easily understood by other engineers, and accounts for edge cases and errors. Uses code comments effectively.",
      },
      {
        name: 'Coding',
        specialism: 'Quality Engineer',
        description:
          "Understands a portion of the team's domain within which, they consistently write test fixtures that are easily understood by other engineers, accounting for edge cases and errors. Uses comments or documentation effectively.",
      },
      {
        name: 'Testing',
        specialism: 'Software Engineer',
        description:
          'Understands the testing pyramid, writes unit tests in accordance with it, as well as higher level tests with help from more senior engineers. Always tests expected edge cases and errors as well as the happy path.',
      },
      {
        name: 'Testing',
        specialism: 'Quality Engineer',
        description:
          'Understands the testing pyramid, writes higher level tests in accordance with it. Always tests expected edge cases and errors as well as the happy path.  Is aware of some overall test automation approaches used within the organisation.',
      },
      {
        name: 'Debugging',
        specialism: 'All',
        description:
          'Uses a systematic approach to debug issues located within a single service.',
      },
      {
        name: 'Observability',
        specialism: 'All',
        description:
          "Is aware of the organisation's monitoring philosophy and the operational data for their team’s domain.",
      },
      {
        name: 'Architecture',
        specialism: 'Software Engineer',
        description:
          'Designs functions that are aligned with best practice engineering standards within the team. Is aware of different architectural design patterns.',
      },
      {
        name: 'Architecture',
        specialism: 'Quality Engineer',
        description:
          'Designs test automation that is aligned with best practice engineering standards within the team. Is aware of different architectural design patterns.',
      },
      {
        name: 'Cloud',
        specialism: 'All',
        description:
          'Is aware of the overall landscape of cloud providers and how the organisation uses them.  Has gained some knowledge or experience with at least one provider.',
      },
      {
        name: 'Data Design & Handling',
        specialism: 'All',
        description:
          'Understands the importance of data handling and design; Is able to design and build systems which manage data.',
      },
      {
        name: 'Security',
        specialism: 'All',
        description:
          'Understands the importance and language of security concepts. Utilises this knowledge to ask more senior engineers for help on making decisions that may have security implications.',
      },
    ],
    People: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Actively seeking out leadership opportunities</li><li>Maintain effectiveness during changing circumstances and successfully fulfill their responsibilities</li><li>Uses knowledge and experience to help other team members</li><li>Proactively seeks development opportunities, pre-empting the skills or contents required for delivery</li></ul>',
        description2:
          'Alice took the initiative to streamline interactions between developers and a vendor UX team.  By listening carefully to both teams she worked with BAs and UX designers to define several templates that the teams used to request artifacts/information from each other.',
        description3:
          'Bob worked on a POC that had tight deadlines.  During meetings with the client, Bob asked a lot of question to help understand the scope and intent of the POC.  Based on Bob’s findings he recommended that we build the POC using a prototyping tool instead of actually developing the POC in order to cut cost and save time.',
      },
      {
        name: 'Management',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Feedback',
        specialism: 'All',
        description:
          'Understands the importance and language of security concepts. Utilises this knowledge to ask more senior engineers for help on making decisions that may have security implications.',
      },
      {
        name: 'Effective Communication',
        specialism: 'All',
        description:
          "Usually communicates effectively, clearly, concisely and in an audience-oriented way in written and verbal form both technical and non technical subjects, to their teammates. Understands their work domain, shares their knowledge frequently with their teammates and contributes to their team's documentation.  Actively listens to others and ensures they are understood. Pays attention to nonverbal communication.",
      },
      {
        name: 'Teamwork',
        specialism: 'All',
        description:
          'When requested, helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Gives or shares credit where due.',
      },
      {
        name: 'Relationship Building',
        specialism: 'All',
        description:
          'Works to build strong relationships with their teammates, manager, and product counterpart.',
      },
      {
        name: 'Inclusion',
        specialism: 'All',
        description:
          "Openly shares their opinions and contributes to discussions in a respectful manner. Approaches disagreement with their teammates non-defensively with inquisitiveness. Uses contradictory opinions as a basis for constructive, productive conversations. Is open to changing their perspective and plans based on others' input.",
      },
      {
        name: 'Mentoring',
        specialism: 'All',
        description:
          'Seeks out mentorship to grow their own experience. Sometimes mentors their teammates in an open, respectful, flexible, empathetic manner.',
      },
      {
        name: 'Continuous Learning',
        specialism: 'All',
        description:
          'Consistently pursues continuous learning in order to increase skills.  Has gained advanced knowledge in at least one technical domain that is relevant to the team.',
      },
    ],
    Stakeholder: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Proactively cultivates relationships with stakeholders</li><li>Keeps stakeholders informed, raises risks/issues, anticipates stakeholder needs</li><li>Awareness of and/or participate in the design of processes to effectively manage stakeholders</li></ul>',
        description2:
          'Alice took the initiative to streamline interactions between developers and a vendor UX team.  By listening carefully to both teams she worked with BAs and UX designers to define several templates that the teams used to request artifacts/information from each other.',
        description3:
          'Bob worked on a POC that had tight deadlines.  During meetings with the client, Bob asked a lot of question to help understand the scope and intent of the POC.  Based on Bob’s findings he recommended that we build the POC using a prototyping tool instead of actually developing the POC in order to cut cost and save time.',
      },
      {
        name: 'Dealing with Ambiguity & Risk',
        specialism: 'All',
        description:
          'Usually handles risk, change, and uncertainty within their personal scope of work effectively. Clarifies expectations with their teammates.  Escalates any blockers, delays, and cost ballooning to their team daily. Usually decides and acts responsibly without having the total picture during routine business, and when in high pressure situations.',
      },
      {
        name: 'Economic Thinking',
        specialism: 'All',
        description:
          'When taking action, weighs cost and value in order to take the most economic action with help from more senior engineers. Sometimes uses this type of thinking to make suggestions to teammates.',
      },
      {
        name: 'Decision Making',
        specialism: 'All',
        description:
          'Can articulate decisions required, identifies relevant context and prepares options and recommendations for consideration.  Strives to be objective and reflects on their own biases when making decisions. Holds themselves accountable for decision and outcomes.',
      },
      {
        name: 'Driving Alignment',
        specialism: 'All',
        description:
          "Has conversations based on organisational strategy and principles with their teammates when appropriate. Strongly oriented towards goals and works towards their team's goals.",
      },
      {
        name: 'Business Acumen',
        specialism: 'All',
        description:
          'Has a good understanding of client engagements and how to represent the company well.',
      },
      {
        name: 'Strategic Work',
        specialism: 'All',
        description: "Understands the organisation's engineering strategy.",
      },
    ],
  },
  'Senior Consultant': {
    Overview: [
      {
        name: 'Job Description',
        specialism: 'Software Engineer',
        description:
          'A senior consultant developer leads teams to deliver high quality solutions.  They are considered SMEs on multiple technical topics and contribute valuable knowledge to the practice.',
      },
      {
        name: 'You Have',
        specialism: 'Software Engineer',
        description:
          '<ul><li> SME on multiple technology issues and contribute valuable knowledge to the practice</li><li>Led development teams (led a stream)</li><li>Delivered high quality solutions </li></ul>',
      },
      {
        name: 'Traditional / Leadership Path',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Continue to build technical and relationship skills scaling towards program management</li><li>Begin demonstrating an  ability to straddle more than one activity stream </li><li>Scale leadership acumen to a level of expertise</li></ul>',
      },
      {
        name: 'Technical / Independent Contributor',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Ability to take a strategic and future oriented approach to knowledge sharing in the practice</li><li>Drive recommendations for building practice level knowledge in up and coming technology areas</li><li>Scale deep technical expertise in a minimum of one area </li><li>  Breadth of technical capabilities and transferable / fungible skills</li><li>Recognize organizational needs and help others scale acumen in that area</li></ul>',
      },
      {
        name: 'Job Description',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Quality Engineer',
        description: 'Coming Soon.',
      },
    ],
    Delivery: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Define solutions for moderate/complex problems</li><li>Manage delivery of the solution </li> <li> Produce high quality deliverables</li><li> Deliver in a timely manner and demonstrate specialist skills and experience, proven through project delivery </li><li> Demonstrate multiple areas of expertise</li></ul>',
        description2:
          'Bob cares about the quality of the code he delivers. His code is clean, thorough, and is always accompanied by tests.  Bob is adept with his language of choice and is aware of software design principles such as SOLID, KISS, etc.',
        description3:
          'Alice is recognized within Capco as a go-to person for frontend application development. Alice was tasked to define a generic framework to generate web forms for an existing client onboarding application, which already has a number of existing forms in place. She successfully led the team in creating the framework and integrated it into the application and replaced the existing forms.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Coding',
        specialism: 'Software Engineer',
        description:
          "Understands their team's domain at a high level and can gather sufficient context to work productively within it. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring and when it is appropriate to use them.",
      },
      {
        name: 'Coding',
        specialism: 'Quality Engineer',
        description:
          "Understands their team's domain at a high level and can gather sufficient context to work productively within it. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results. Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: 'Testing',
        specialism: 'Software Engineer',
        description:
          'Understands the testing pyramid, and writes unit and higher level tests in accordance with it. Always writes tests to handle expected edge cases and errors gracefully, as well as happy paths.',
      },
      {
        name: 'Testing',
        specialism: 'Quality Engineer',
        description:
          'Understands the testing pyramid, and writes higher level tests in accordance with it. Always writes tests to handle expected edge cases and errors gracefully, as well as happy paths. Is aware of, and contributes to test automation approaches used within the organisation.',
      },
      {
        name: 'Debugging',
        specialism: 'All',
        description:
          'Proficient at using systematic debugging to diagnose all issues across a domain. Uses systematic debugging to diagnose cross service issues, sometimes with help from more senior engineers.',
      },
      {
        name: 'Observability',
        specialism: 'All',
        description:
          "Is aware of the organisation's monitoring philosophy. Helps review and ammend  the monitoring on their team accordingly. Is aware of the operational data for their team’s domain and uses it as a basis for suggesting stability and performance improvements.",
      },
      {
        name: 'Architecture',
        specialism: 'Software Engineer',
        description:
          'Consistently designs code that is aligned with the overall service architecture. Utilises abstractions and code isolation effectively.  Has knowledge of, and experience contributing to, architectural design patterns.',
      },
      {
        name: 'Architecture',
        specialism: 'Quality Engineer',
        description:
          'Consistently designs automation that is aligned with the overall service architecture. Understands how to adapt test automation approaches to different architectural design patterns.',
      },
      {
        name: 'Cloud',
        specialism: 'All',
        description:
          'Is aware of the overall landscape of cloud providers and how the organisation uses them;  Is aware of the organisational management and strategy for cloud providers.  Has an understanding of how projects are managed within the cloud and the design AND setup considerations;  has gained some experience with at least one provider.  Has defined and progressed a plan to gain training or certification in at least one cloud provider.',
      },
      {
        name: 'Data Design & Handling',
        specialism: 'All',
        description:
          'Understands the importance of data handling and design; Is able to design and build systems which manage data, including knowledge and implementation of data security best practise.',
      },
      {
        name: 'Security',
        specialism: 'All',
        description:
          'Approaches all engineering work with a security lens. Actively looks for security vulnerabilities both in the code and when providing peer reviews.  Has a general understanding of some key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks)',
      },
    ],
    People: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Lead small/medium size teams and manage projects with little guidance</li><li>Proactive in navigating uncertainty in their role and adapts communication style for different audiences</li>  <li> Proactive in developing junior resources</li><li> Contributes valuable SME knowledge to the practice</li><li> Demonstrates a desire for continuous learning</li></ul>',
        description2:
          'Alice is the lead on a project where the client is constantly changing their requirements.  Aware of potential scope creep, Alice proactively puts processes in place to prioritize and clarify requirements with the client.  Alice also promotes knowledge sharing within her team and often pairs with other team members to minimize knowledge silos.',
        description3:
          'Bob was assigned as the lead of a small team to build a new front end application for a client.  There was some uncertainty around the technologies chosen by the client with respect to performance. Aware of the potential risks, Bob explained the risks to the client and recommended that they first prove out the technology with a POC of all the critical features. After the project, Bob hosted a lunch and learn and shared his findings with others in the practice.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Management',
        specialism: 'All',
        description: 'Not applicable at this level.',
      },
      {
        name: 'Feedback',
        specialism: 'All',
        description:
          "Delivers praise and constructive feedback to their team, teammates, and manager in a useful manner. Delivers feedback to their team's business stakeholders when opportunities arise. Works within their teams and with its business stakeholders to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours. ",
      },
      {
        name: 'Effective Communication',
        specialism: 'All',
        description:
          "Communicates effectively, clearly, concisely in written and verbal form both technical and non technical subjects, and in an audience-oriented way. Understands their team's domain, shares their knowledge frequently with their teammates and contributes to their team's documentation.  Actively listens to others and ensures they are understood. Pays attention to nonverbal communication. ",
      },
      {
        name: 'Teamwork',
        specialism: 'All',
        description:
          'Sometimes helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Uses problem solving as a means to learn and share solutions with wider teams. Gives or shares credit where due.',
      },
      {
        name: 'Relationship Building',
        specialism: 'All',
        description:
          "Works to build strong relationships with their teammates, client peers, manager, as well as their teams' relevant business and client stakeholders.",
      },
      {
        name: 'Inclusion',
        specialism: 'All',
        description:
          "Encourages their teammates to openly share their opinions and contribute to discussions in a respectful manner. Approaches disagreement non-defensively with inquisitiveness. Uses contradictory opinions as a basis for constructive, productive conversations. Is open to changing their perspective and plans based on others' input. ",
      },
      {
        name: 'Mentoring',
        specialism: 'All',
        description:
          'Mentors their teammates in an open, respectful, flexible, empathetic manner. Seeks out mentoring opportunities specifically to create team redundancy and backfill ability.  Mentors members of other teams as needed',
      },
      {
        name: 'Continuous Learning',
        specialism: 'All',
        description:
          'Consistently pursues continuous learning in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in more than one technical domain that is relevant to the team. Discusses learning gaps with the wider team to identify opportunities for team growth.  Actively investigates and recommends additions or changes to the tooling of teams.',
      },
    ],
    Stakeholder: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Effective at managing expectations and anticipating needs, risks and potential issues without direct instruction</li> <li>Always keeps stakeholders informed, frequently raises risks/issues</li> <li>Regularly anticipates stakeholder needs and proposes ways to address them</li> <li>Regarded as a trusted advisor to stakeholders</li></ul>',
        description2:
          'Bob regularly prepares for and performs relevant research before story grooming and technical design sessions. This enables him to lead and facilitate the sessions and bring valuable insights and questions to the table.',
        description3:
          'Alice was put on a difficult project where she had to report to multiple stakeholders, some with contradicting interests.  Over several meetings Alice was able to design a solution that satisfied the requirements and gain concurrence amongst all the stakeholders. Alice is highly regarded because of her efforts.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Dealing with Ambiguity & Risk',
        specialism: 'All',
        description:
          'Effectively handles risk, change, and uncertainty within their team. Ensures expectations within their team are clarified between all parties involved.  Decides and acts responsibly in their work with their team without having the total picture during routine business, as well as when in high pressure situations.  Anticipates and communicates blockers, delays, and cost ballooning for their work before they require escalation. ',
      },
      {
        name: 'Economic Thinking',
        specialism: 'All',
        description:
          'When taking action, weighs cost and value in order to take the most economic action. Uses this thinking in their own work, and to make suggestions to teammates.',
      },
      {
        name: 'Decision Making',
        specialism: 'All',
        description:
          'Facilitates discussions within their team, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals. Can articulate decisions required, identifies relevant context and prepares options and recommendations for consideration.  Strives to be objective and reflects on their own biases when making decisions. Holds themselves accountable for decision and outcomes.',
      },
      {
        name: 'Driving Alignment',
        specialism: 'All',
        description:
          'Has conversations based on organisational strategy and principles with their teammates when appropriate to ensure team alignment. Strongly oriented towards goals and ensures their team is continuously working towards their shared goals.',
      },
      {
        name: 'Business Acumen',
        specialism: 'All',
        description:
          "Has a thorough understanding of their team's engagements with customers, and how it contributes to customer success. Has a basic understanding of adjacent teams' business domains.",
      },
      {
        name: 'Strategic Work',
        specialism: 'All',
        description:
          "Understands the organisation's engineering strategy. Usually involved in discussions about the implications for their team.  Has contributed to engineering strategic work.",
      },
    ],
  },
  'Principal Consultant': {
    Overview: [
      {
        name: 'Job Description',
        specialism: 'Software Engineer',
        description:
          'A technical principal consultant supports large project delivery of high quality software solutions.  On the consulting side a principal consultant will help with resource management and recruiting along with developing technical capabilities to support software projects and the evolution of the technology practice.',
      },
      {
        name: 'You Have',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Supported mid/large sized projects / multiple streams</li><li>Become a SME in multiple areas</li></ul>',
      },
      {
        name: 'Traditional / Leadership Path',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Support large program delivery of high quality software solutions</li><li>Participate in resource management and recruiting along with developing organizational capabilities to support software projects and the evolution of the technology practice.</li></ul>',
      },
      {
        name: 'Technical / Independent Contributor',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Participate in the development of the individual capabilities of technical resources</li><li>Capable of working across business streams and apply SME </li><li>Creating standardizations and best practices in the technical consulting space </li><li> Ability to participate in the selling of a technical solution and communication of the value proposition </li></ul>',
      },
      {
        name: 'Job Description',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Quality Engineer',
        description: 'Coming Soon.',
      },
    ],
    Delivery: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Define solutions for complex problems</li> <li> Delivers consistently to a high standard and ensures quality work from their team</li><li> Recognized within Capco as having proven skills and experience through project delivery</li><li> Uses specialist knowledge and skills to provide insight and guidance to juniors, peers and stakeholders </li> </ul>',
        description2:
          ' Bob defined the solution for how the users would access partner web applications via SSO.  Bob is highly experienced in the realm of security so his team was able to deliver the solution even though scope and complexity were added during development.',
        description3:
          'Alice defined the project scope and delivery plan for an upcoming project.  During execution, Alice continuously fine tunes the delivery process to increase quality and reduce development time.  Alice is known within Capco as a thought leader on software development practices and is brought in by program stakeholders to consult on development matters. ',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description:
          'The Principal Engineer provides considerable high-level technical guidance across the engineering organisation and project teams. They can usually anticipate and plan for technical problems. They are highly knowledgeable in major parts of our technology stack and are the technical owner of significant components within client accounts or internal engineering projects. They act in a very hands-on role, and as such, they are a prolific contributor to both core projects at Capco as well as side and experimental work. When presented with a complex problem, process or existing system they are able to reduce the complexity in order to get more done with less work. They provide guidance, direction and help colleagues build and produce better outcomes. They are capable of driving groups of disparate interests to decisions, and clearly communicating and seeing those decisions through to impact. They are capable of setting short to medium term strategic direction for part of technology stacks, identifying areas of critical need based on future growth and developing roadmaps to attack those problems.',
      },
      {
        name: 'Coding',
        specialism: 'Software Engineer',
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring, when it is appropriate to use them and helps teams refactor appropriately.",
      },
      {
        name: 'Coding',
        specialism: 'Quality Engineer',
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results.  Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: 'Testing',
        specialism: 'Software Engineer',
        description:
          'Understands the testing approach, and uses quality metrics to identify gaps. Is able to work individually or with their teams drawing on experience to recommend tooling and solutions aligning with organisational strategies.  Influences organisation wide testing strategy.',
      },
      {
        name: 'Testing',
        specialism: 'Quality Engineer',
        description:
          'Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy. ',
      },
      {
        name: 'Debugging',
        specialism: 'All',
        description:
          'Proficient at using systematic debugging to diagnose issues across a range of domains.',
      },
      {
        name: 'Observability',
        specialism: 'All',
        description:
          "Drives monitoring work on their team based on the organisation's monitoring philosophy. Is aware of the operational data for their team’s domain and uses it as a basis for driving changes to the team's services to achieve stability and performance improvements.",
      },
      {
        name: 'Architecture',
        specialism: 'Software Engineer',
        description:
          'Architects services and systems using well accepted design patterns to allow for iterative, autonomous development and future scaling. Guides teams in anticipation of future use cases and helps them make design decisions that minimize the cost of future changes.',
      },
      {
        name: 'Architecture',
        specialism: 'Quality Engineer',
        description:
          'Architects test automation approaches using well accepted design patterns to add the quality assurance controls needed for iterative, autonomous development. Guides teams in filling new gaps in automation and helps them make design decisions that minimize the cost of future changes.',
      },
      {
        name: 'Cloud',
        specialism: 'All',
        description:
          'Has advanced knowledge of cloud concepts, capabilities and design considerations. Works closely with teams to deliver solutions in alignment with the organisational cloud strategy.  Has detailed knowledge of how projects are managed within the cloud and the design AND setup considerations;  has gained knowledge/experience or certification with more than one provider; Is aware of industry trends/advancements in cloud technologies.',
      },
      {
        name: 'Data Design & Handling',
        specialism: 'All',
        description:
          'Understands advanced data handling concepts / designs.  Designs and builds systems which manage data securely.  Actively promotes secure data management across teams, clients and the organisation.',
      },
      {
        name: 'Security',
        specialism: 'All',
        description:
          "Actively contributes to security designs based on the organisation's security strategy. Fosters a security first mindset across teams, and leads by example. Has advanced knowledge  of key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks)",
      },
    ],
    People: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li> Leads a program team through periods of uncertainty and challenging circumstances </li> <li> Plays a supporting role in the leadership of the account or program</li><li> Proactive in developing junior resources and providing coaching/feedback </li><li> Contributes significantly to developing capabilities / practices.</li> </ul>',
        description2:
          'Bob leads a medium size team of 10 people to deliver a project structured within a larger program.  The team is working effectively and is delivering to client requirements even though client expectations are high.  Bob is an excellent mentor to junior developers within Capco and contributes as a member of the agile working group, helping to improve delivery capability. ',
        description3:
          'Alice leads a development group composed of 23 developers working in small streams.  The development group is a major component of the client program and requires coordination with the program stakeholders and the other development groups.  Alice hosts a recurring lunch and learn for developers to connect and improve their development skill.  Alice also works to recruit and/or retain talented individuals with Capco.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Management',
        specialism: 'All',
        description:
          "The Engineering Lead is comfortable managing engineers ensuring they are tracking the team's efficiency and quality of work, they assist in regularly adjusting processes and timelines to ensure high quality work is delivered.  More than writing code, they hold responsibility for identifying bottlenecks in the process and roadblocks to success for teams and clearing these roadblocks. They support teams to stay focused on projects. In addition to focusing the team, they are capable of identifying headcount needs for the organisation and client accounts and planning and recruiting to fill these needs. They are comfortable managing team members with different skill sets from their own. They communicate expectations clearly to all team members and solicit and deliver individual feedback frequently.",
      },
      {
        name: 'Feedback',
        specialism: 'All',
        description:
          "Fosters a culture of delivering praise and constructive feedback across their teams and team's respective business stakeholders. Actively demonstrates these behaviours. Works within their teams and with its business stakeholders to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours. ",
      },
      {
        name: 'Effective Communication',
        specialism: 'All',
        description:
          "Is able to communicate effectively with diverse teams and organisations. Fosters a culture of clear, concise, effective, audience-oriented communication across teams and wider stakeholders, ensuring teammates actively listen to others and are understood.  Fosters a culture of documentation and knowledge sharing within their team and with their team's business stakeholders; actively demonstrates these behaviours. Actively demonstrates these behaviours. Pays attention to nonverbal communication. ",
      },
      {
        name: 'Teamwork',
        specialism: 'All',
        description:
          'Consistently helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Uses problem solving as a means to learn and share solutions with wider teams.  Ensures that credit is shared and given where due.  Demonstrates attributes of a servant leader.',
      },
      {
        name: 'Relationship Building',
        specialism: 'All',
        description:
          "Works to build and improve strong relationships with their teammates, client peers, manager, their teams' relevant business and client stakeholders, and senior engineers across the organisation. Leverages relationships to better plan for and position their team.",
      },
      {
        name: 'Inclusion',
        specialism: 'All',
        description:
          'Fosters a culture within their teams where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinions as a basis for constructive, productive conversations. Works through surface-level disagreements to expose the concerns of disagreeing voices and integrates these concerns into their perspective and plans.',
      },
      {
        name: 'Mentoring',
        specialism: 'All',
        description:
          'Mentors across teams in an open, respectful, flexible, empathetic manner. Fosters a culture of mentoring across teams by seeking out mentoring opportunities for themselves and others, and supports others in their growth as mentors. ',
      },
      {
        name: 'Continuous Learning',
        specialism: 'All',
        description:
          'Consistently pursues continuous learning both individually and across teams in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in multiple technical domains that are relevant to the team. Discusses learning gaps with the wider team to identify opportunities for team growth.  Actively investigates and recommends additions or changes to the tooling of the team in accordance with customer demand and team strategy.',
      },
    ],
    Stakeholder: [
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Software Engineer',
        description:
          '<ul><li>Effective at managing expectations and anticipating needs, risks and potential issues without direct instructions</li> <li>Trusted by project leaders and seeks to develop strong relationships with senior stakeholders </li><li> Provides guidance to the stakeholder on addressing business needs and leads projects to meet these needs </li><li> Demonstrates an understanding of stakeholder business drivers </li> </ul>',
        description2:
          'Bob is working with client project managers in planning for deploying into production.  Requirements from the business and technology units will drive how the process will be executed and coordinated with other groups.  The plan will need approval by senior stakeholders (on both Capco and client side) before it can go ahead. ',
        description3:
          'Alice’s project needs a new contract as the client stakeholder has lost partial funding to deliver the full solution.  Alice has been asked to decide on what can be delivered with the limited funding they have.  She works with the senior stakeholders to trim scope and manages the development teams to deliver a viable MVP into production.',
      },
      {
        name: 'Framework Criteria',
        name2: 'Expected Performance',
        name3: 'High Performance',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
        description2: 'Coming soon.',
        description3: 'Coming soon.',
      },
      {
        name: 'Dealing with Ambiguity & Risk',
        specialism: 'All',
        description:
          'Effectively handles risk, change, and uncertainty across several teams. Ensures expectations with their team and external stakeholders are clarified between all parties involved.  Decides and acts responsibly in their work across teams without having the total picture during routine business, as well as when in high pressure situations.  Anticipates and communicates blockers, delays, and cost ballooning within their team’s projects, before they require escalation. ',
      },
      {
        name: 'Economic Thinking',
        specialism: 'All',
        description:
          'When taking action, weighs cost and value in order to take the most economic action. Uses this thinking in their own work, and to foster a culture within their teams where people apply economic thinking to make timely decisions.',
      },
      {
        name: 'Decision Making',
        specialism: 'All',
        description:
          'Facilitates discussions across teams, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals. Guides discussions toward decisions, clarifies and gets buy-in.  Takes ownership of decisions made in their teams by helping their teammates make clear decisions in alignment with organisational goals, backing decisions made, and taking responsibility for their success. Raises awareness for how biases impact decisions and ensures accountability is practiced within their team. Demonstrates these behaviours themselves.',
      },
      {
        name: 'Driving Alignment',
        specialism: 'All',
        description:
          'Fosters a culture within their teams of having conversations based on organisational strategy and principles to create alignment. Strongly oriented towards goals and ensures their team is continuously working towards their goals.',
      },
      {
        name: 'Business Acumen',
        specialism: 'All',
        description:
          "Has a thorough understanding of several team's projects and domains, and how they contribute to overall business strategy and customer success.  Drives customer success through successful client deliveries and providing a trusted advisory role.",
      },
      {
        name: 'Strategic Work',
        specialism: 'All',
        description:
          "Collaborates and decides on their team's engineering work based on organisation's engineering strategy, together with their teammates and senior engineers. Sometimes involved in work on organisational engineering strategy.",
      },
    ],
  },
  'Managing Principal': {
    Overview: [
      {
        name: 'Job Description',
        specialism: 'Software Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Software Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Software Engineer',
        description: 'Coming Soon.',
      },
      {
        name: 'Job Description',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Have',
        specialism: 'Quality Engineer',
        description: 'Coming soon.',
      },
      {
        name: 'You Will',
        specialism: 'Quality Engineer',
        description: 'Coming Soon.',
      },
    ],
    Delivery: [
      {
        name: 'Technical Leadership',
        specialism: 'All',
        description:
          "The Distinguished Engineer has significant strategic vision and can take a high-level 3-5 year plan for growth at a business level and translate that into a strategic technology roadmap. They are deeply technically savvy and their primary job is focusing on the architectural and technology needs to grow the engineering organisation over the longer-term horizon; they deal with very deep technical problems and a long time horizon. A Distinguished Engineer is still acting in a very hands-on role, and as such, they are a prolific contributor to both core projects at Capco as well as side and experimental work. When presented with a complex problem, process or existing system they are consistently able to reduce the complexity in order to get more done with less work. The ability to manage and simplify complexity is the hallmark of the Distinguished Engineer; by working with the Distinguished Engineer, engineers across the internal and client organisations gain more insight into dealing with complex technology problems and delivering robust solutions. The Distinguished Engineer has broad impact across Capco tech and client accounts. They create architecture that shapes large parts of our business and our client's business, and ship complex projects including many systems or major pieces of infrastructure. The impact of their work is felt across the team in the quality of the engineering that we produce, the ways we write code, the core libraries that we use, and the underlying design of systems. There are multiple obvious large technical contributions that can be pointed to as originating from this team member.",
      },
      {
        name: 'Coding',
        specialism: 'Software Engineer',
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring, when it is appropriate to use them and helps teams refactor appropriately.",
      },
      {
        name: 'Coding',
        specialism: 'Quality Engineer',
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results.  Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: 'Testing',
        specialism: 'Software Engineer',
        description:
          'Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy.',
      },
      {
        name: 'Testing',
        specialism: 'Quality Engineer',
        description:
          'Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy. ',
      },
      {
        name: 'Debugging',
        specialism: 'All',
        description:
          'Leads incident response across the engineering organisation as needed. Uses systematic debugging to diagnose issues across the organisation.',
      },
      {
        name: 'Observability',
        specialism: 'All',
        description:
          'Fosters a culture of observability across the engineering organisation. Helps teams across the engineering organisation use operational data to improve stability and performance of their domains.',
      },
      {
        name: 'Architecture',
        specialism: 'Software Engineer',
        description:
          'Works across the organisation to foster a culture of architecture that allows for iterative, autonomous development and future scaling. Guides teams in the organisation in anticipation of future use cases and helps them make design decisions that minimize the cost of future changes. ',
      },
      {
        name: 'Architecture',
        specialism: 'Quality Engineer',
        description:
          'Has advanced knowledge of, and contributes to, test automation requirements across different solution designs across the organisation. Guides teams in the organisation in anticipation of future automation needs and helps them make automation design decisions that minimise the cost of future changes.',
      },
      {
        name: 'Cloud',
        specialism: 'All',
        description:
          'Has advanced knowledge of cloud concepts, capabilities and design considerations.  Contributes to the organisational cloud strategy or management.  Proactively supports or is leading project alignment with the strategy across the organisation.  Contributes to ongoing assessment of organisational skills gaps within the cloud domain and contributes to the improvement of knowledge/skills required for the cloud; Is aware of wide industry trends/advancements in cloud technologies.',
      },
      {
        name: 'Data Design & Handling',
        specialism: 'All',
        description:
          'Understands advanced data handling concepts, designs and legislation.  Designs and builds systems which manage data securely.  Actively promotes secure data management across teams, clients and the organisation.',
      },
      {
        name: 'Security',
        specialism: 'All',
        description:
          'Actively contributes to setting and refining organisation wide security strategy. Fosters a security first mindset across the organisation. Can recognize obscure security threats that go unnoticed to others.  Has advanced knowledge of key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks) and the wider security domain.',
      },
    ],
    People: [
      {
        name: 'Management',
        specialism: 'All',
        description:
          "The Senior Engineering Lead manages engineers across multiple capabilities of the engineering organisation. Contributing as the technically-savvy voice that asks business and product questions of the engineers on their teams, ensuring that the code we are writing matches the product and business needs and can scale appropriately as those needs grow. They continually evaluate and refine our development/infrastructure standards and processes to create technology that will deliver sustained value to the business and it's clients. They are responsible for creating high performance, high velocity organizations, measuring and iterating on processes as we grow and evolve as an engineering organisation. They lead on recruiting, headcount management and planning, career growth and training for the organization. As necessary, they manage vendor relationships and participate in the budgeting process. They are responsible for creating and growing the next generation of leadership and management talent in the organization, helping that talent learn how to balance technical and people leadership and management. They are strong leaders, and set the example for cross-functional collaboration both between Engineering and other areas of the organisation and client accounts. They are a very strong communicator and can simplify technical concepts in a way to explain them to non-technical partners, and take business direction and explain it to the technology team in a way that inspires and guides them.They help to create a positive public presence for the organisation and are capable of selling the company to potential candidates. They guide the planning process for the engineering organisation, helping the team articulate goals that support both business initiatives and technology and organizational quality.",
      },
      {
        name: 'Feedback',
        specialism: 'All',
        description:
          'Fosters a culture of delivering praise and constructive feedback across the organisation. Actively demonstrates these behaviours. Works across the organisation to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours. ',
      },
      {
        name: 'Effective Communication',
        specialism: 'All',
        description:
          'Is able to communicate effectively within and outside of the organisation. Fosters a culture of clear, concise, effective, audience-oriented communication across the organisation and wider stakeholders, ensuring teammates actively listen to others and are understood. Actively demonstrates these behaviours. Fosters a culture of documentation and knowledge sharing within and outside of the organisation; actively demonstrates these behaviours. Pays attention to nonverbal communication. ',
      },
      {
        name: 'Teamwork',
        specialism: 'All',
        description:
          'Consistently works across the organisation to enable teams to support each other. Ensures that credit is shared and given where due. Demonstrates servant leader qualities.',
      },
      {
        name: 'Relationship Building',
        specialism: 'All',
        description:
          'Works to build and improve strong relationships with engineers, managers and capability leaders across the organisation as well as relevant client stakeholders and account managers. Leverages those relationships to better plan for and position the engineering organisation.  Actively seeks out the development of partnerships with relevant third parties to advance the capabilities AND offerings of the engineering organisation.',
      },
      {
        name: 'Inclusion',
        specialism: 'All',
        description:
          'Fosters a culture across the organisation where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinion as a basis for constructive, productive conversations. Integrates disagreeing perspectives from the whole company into their perspective and plans.',
      },
      {
        name: 'Mentoring',
        specialism: 'All',
        description:
          'Mentors across the organisation in an open, respectful, flexible, empathetic manner. Fosters an organisational culture of mentoring by seeking out mentoring opportunities for themselves and others, and supports others in their growth as mentors. ',
      },
      {
        name: 'Continuous Learning',
        specialism: 'All',
        description:
          'Consistently pursues continuous learning both individually and across teams in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in multiple technical domains that are relevant to the team. Contributes to mapping organisational knowledge and manages  additions or changes to the tooling of the team in accordance with customer demand and team strategy.',
      },
    ],
    Stakeholder: [
      {
        name: 'Dealing with Ambiguity & Risk',
        specialism: 'All',
        description:
          'Effectively handles risk, change, and uncertainty across the organisation. Ensures expectations across the organisation and external stakeholders are clarified between all parties involved.   Decides and acts responsibly in their work across the organisation without having the total picture during routine business, as well as when in high pressure situations.',
      },
      {
        name: 'Economic Thinking',
        specialism: 'All',
        description:
          'When taking action, weighs cost and value in order to make the most economic action. Uses this thinking in their own work, and to foster a culture within the organisation where people apply economic thinking to make timely decisions. ',
      },
      {
        name: 'Decision Making',
        specialism: 'All',
        description:
          'Facilitates organisation-wide discussions, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals Takes ownership of decisions made in the engineering organisation by helping organisation members make clear decisions in alignment with organisational goals, backing decisions made, and taking responsibility for their success. Raises awareness for how biases impact decisions and ensures accountability is practiced throughout the organisation. Demonstrates these behaviours themselves.',
      },
      {
        name: 'Driving Alignment',
        specialism: 'All',
        description:
          'Fosters a culture across the organisation based on organisational strategy, principles to create alignment and opportunities/requirement for global alignment where appropriate. Ensures goals are understood and continuously worked towards across the organisation.',
      },
      {
        name: 'Business Acumen',
        specialism: 'All',
        description:
          'Has a thorough understanding of the entire business, including individual domains, and how they contribute to overall business strategy.  Drives customer success through successful client deliveries and provides a thought leadership and strategic advisory role.',
      },
      {
        name: 'Strategic Work',
        specialism: 'All',
        description:
          'Leads strategic organisational decisions and plans. Consistently works at a strategic level, influencing decisions to achieve organisational alignment on major goals.',
      },
    ],
  },
};

export default contentData;
