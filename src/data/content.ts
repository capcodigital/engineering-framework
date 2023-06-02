const contentData = {
  Associate: {
    Overview: [
      {
        name: "Description",
        specialism: "Software Engineer",
        description:
          "An Associate Engineer has limited experience and is relatively new to the practice of software development. Their focus should be on acquiring skills and improving their capabilities. In terms of consulting, they should be focused on improving their communication and teamwork as these will be important for future leadership opportunities.",
      },
      {
        name: "You Have",
        specialism: "Software Engineer",
        description:
          "<ul><li>Educational background such as a university or college program in Computer Science</li><li>Practical experience through bootcamps, internship, open source contributions and/or equivalent work experience</li><li>Desire/drive to scale your technology and business knowledge</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Software Engineer",
        description:
          "<ul><li>Building technology agnostic foundational knowledge (e.g. mastering Git)</li><li>Focus on increasing competencies in Software Development</li><li>Enhance communication and relationship skills with team members and stakeholders</li></ul>",
      },
      {
        name: "Description",
        specialism: "Quality Engineer",
        description:
          "An Associate Quality Engineer has limited experience and is relatively new to the practice of quality engineering. Their focus should be on acquiring skills and improving their capabilities. In terms of consulting, they should be focused on improving their communication and teamwork as these will be important for future leadership opportunities.",
      },
      {
        name: "You Have",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Educational background such as a university or college program in Computer Science</li><li>Practical experience through bootcamps, internship, open source contributions and/or equivalent work experience</li><li>Desire/drive to scale your technology and business knowledge</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Building technology agnostic foundational knowledge (e.g. mastering Git)</li><li>Focus on increasing competencies in Quality Engineering</li><li>Enhance communication and relationship skills with team members and stakeholders</li></ul>",
      },
    ],
    Delivery: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Completes tasks with some guidance, and produces deliverables with infrequent/minor corrections</li><li>Delivers in a timely manner and demonstrates adequate knowledge of content and processes</li><li>Ability to handle increasingly complex tasks with minimal direction while maintaining quality</li></ul>",
        description2:
          "Bob’s code is of reasonable quality.  Closer attention could be made to his coding style as it is inconsistent at times. He sometimes forgets to run the code and/or test effectively before committing. This had led to a few broken builds, but nothing serious.",
        description3:
          "Alice has a consistent and readable coding style.  She has good attention to detail especially around handling edge cases.  Even though she has limited experience, she has successfully executed minor refactoring to improve the codebase.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Completes tasks with some guidance, and produces deliverables with infrequent/minor corrections</li><li>Delivers in a timely manner and demonstrates adequate knowledge of content and processes</li><li>Ability to handle increasingly complex tasks with minimal direction while maintaining quality</li></ul>",
        description2:
          "Bob’s tests are of reasonable quality.  Closer attention could be made to test code quality as it is inconsistent at times. He sometimes doesn’t identify all edge cases for the features being developed. This had led to a few instances of defect leakage, but nothing serious.",
        description3:
          "Alice produces consistent quality tests with good coverage. She has good attention to detail especially around handling edge cases.  Even though hse has limited experience, he has successfully executed changes to increase the coverage and stability of the test suite.",
      },
      {
        name: "Technical Leadership",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Coding",
        specialism: "Software Engineer",
        description:
          "Is able to gain context within the team's domain; Writes code with testability, readability, edge cases, and errors in mind.",
      },
      {
        name: "Coding",
        specialism: "Quality Engineer",
        description:
          "Able to gain context within the team's domain; Writes test code with readability, edge cases, and errors in mind.",
      },
      {
        name: "Testing",
        specialism: "Software Engineer",
        description:
          "Knows the testing pyramid. Writes unit tests, sometimes with help from more senior engineers.",
      },
      {
        name: "Testing",
        specialism: "Quality Engineer",
        description:
          "Knows the testing pyramid. Writes higher level tests, sometimes with help from more senior engineers.",
      },
      {
        name: "Debugging",
        specialism: "All",
        description: "Understands the basics of debugging and the tools used.",
      },
      {
        name: "Observability",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Architecture",
        specialism: "All",
        description:
          "Is aware of overall service architecture. Designs basic functions, understands where their functions fit in the overall solution",
      },
      {
        name: "Cloud",
        specialism: "All",
        description:
          "Is aware of the overall landscape of cloud providers and how the organisation uses them.  Is aware of the importance of learning and understanding cloud technologies.",
      },
      {
        name: "Data Design & Handling",
        specialism: "All",
        description:
          "Understands the role that data plays and has worked with data in systems",
      },
      {
        name: "Security",
        specialism: "All",
        description:
          "Understands the importance and language of security concepts.",
      },
    ],
    People: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Interacts with all team members in a professional, respectful and collaborative manner</li><li>Maintains effectiveness during changing circumstances and successfully fulfils responsibilities</li><li>Positive impact to the working environment and team culture</li><li>Proactively seeks development opportunities, pre-empting the skills or content required for delivery</li></ul>",
        description2:
          "Alice gets along well with her teammates. She reaches out for help when she needs it, and offers assistance to those who ask. For her current project, a new library was introduced that Alice wasn’t familiar with. She spent time reading the documentation, and is now able to use the library to deliver new features.",
        description3:
          "Bob joined the project early.  As the project ramped up, Bob proactively welcomed new team members, and helped facilitate onboarding activities.  During one of the grooming sessions, Bob observed that the team had little experience around one of the features. Bob took the initiative to read about various implementations of that feature, which helped the team significantly during technical design sessions.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Interacts with all team members in a professional, respectful and collaborative manner</li><li>Maintains effectiveness during changing circumstances and successfully fulfils responsibilities</li><li>Positive impact to the working environment and team culture</li><li>Proactively seeks development opportunities, pre-empting the skills or content required for improving product quality</li></ul>",
        description2:
          "Alice gets along well with her teammates. She reaches out for help when she needs it, and offers assistance to those who ask. For her current project, a new testing framework was introduced that Susan wasn’t familiar with. She spent time reading the documentation, and is now able to produce high quality tests using the framework.",
        description3:
          "Bob joined the project early.  As the project ramped up, Bob proactively welcomed new team members, and helped facilitate onboarding activities.  During one of the grooming sessions, Amit observed that the team had little experience around one of the functional areas. Amit took the initiative to research the domain and functional area, which helped the team significantly during delivery.",
      },
      {
        name: "Management",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Feedback",
        specialism: "All",
        description:
          "Understands how to deliver praise and constructive feedback in a useful manner.  Actively seeks out feedback from their teammates and manager, and works to use feedback that they receive as a tool for growth.",
      },
      {
        name: "Effective Communication",
        specialism: "All",
        description:
          "Communicates effectively, clearly, concisely and in an audience-oriented way, in written and verbal form.  Understands their area of work and shares their knowledge frequently with their teammates. Actively listens to others and ensures they are understood. Pays attention to non-verbal communication.",
      },
      {
        name: "Teamwork",
        specialism: "All",
        description:
          "Has daily conversation with the team about the progress of their work. Helps their teammates when requested. Gives or shares credit where due.",
      },
      {
        name: "Relationship Building",
        specialism: "All",
        description:
          "Works to build strong relationships with their teammates and manager.",
      },
      {
        name: "Inclusion",
        specialism: "All",
        description:
          "Openly shares their opinions and contributes to discussions in a respectful manner. Works with teammates to resolve disagreement in a healthy manner. Is open to changing their perspective and plans based on others' input. ",
      },
      {
        name: "Mentoring",
        specialism: "All",
        description: "Seeks out mentorship to grow their own experience.",
      },
      {
        name: "Continuous Learning",
        specialism: "All",
        description:
          "Recognises the opportunities for both structured and unstructured learning and has a plan for continuous development",
      },
    ],
    Stakeholder: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "All",
        description:
          "<ul><li>Aware of key project stakeholders and conscious of the need to build relationships with them</li><li>Actively seeks alignment and understanding with stakeholders’ needs</li><li>Highly professional and responsive to stakeholders and ensures to understand their priorities</li></ul>",
        description2:
          "Alice works effectively within her cross functional team with both technical and less technical colleagues (e.g. Product Owners), some of which are from the client organisation.",
        description3:
          "Bob has developed effective working relationships both in his cross functional team and beyond to adjacent teams, he interacts with key stakeholders outside the team including the odd demo of the product.",
      },
      {
        name: "Ambiguity & Risk",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Economic Thinking",
        specialism: "All",
        description:
          "Understands the importance of weighing cost and value in decision making. Asks more senior engineers for help in applying this type of thinking to their work.",
      },
      {
        name: "Decision Making",
        specialism: "All",
        description:
          "Can articulate decisions required, identifies relevant context and prepares options for consideration.",
      },
      {
        name: "Driving Alignment",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Business Acumen",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Strategic Work",
        specialism: "All",
        description: "Not applicable at this level.",
      },
    ],
  },
  Consultant: {
    Overview: [
      {
        name: "Description",
        specialism: "Software Engineer",
        description:
          "A Consultant Engineer has delivered a few projects and has developed one or more areas of expertise.  They should continue to acquire skills but also focus on becoming expert in a few. On the consulting side their focus on developing expertise should position them well as leaders within projects.  They should proactively seek out leadership opportunities.",
      },
      {
        name: "You Have",
        specialism: "Software Engineer",
        description:
          "<ul><li>Demonstrates an ability to deliver through a small number of completed projects</li><li>Has an intermediate level of expertise in one or more technical areas</li><li>Demonstrates an ability to learn or acclimatise to new technologies</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Software Engineer",
        description:
          "<ul><li>Continue to acquire skills but also focus on becoming an expert in a few</li><li>Have an excellent understanding of standard processes  used to deliver a project</li><li>Gain expertise to position themselves as a leader on certain features</li></ul>",
      },
      {
        name: "Description",
        specialism: "Quality Engineer",
        description:
          "A Consultant Quality Engineer has delivered a few projects and has developed one or more areas of expertise. They should continue to acquire skills but also focus on becoming an expert in a few. On the consulting side their focus on developing expertise should position them well as leaders within projects. They should proactively seek out leadership opportunities.",
      },
      {
        name: "You Have",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Demonstrates an ability to deliver through a small number of completed projects</li><li>Has an intermediate level of expertise in one or more technical areas</li><li>Demonstrates an ability to learn or acclimatise to new technologies</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Continue to acquire skills but also focus on becoming an expert in a few</li><li>Have an excellent understanding of standard processes  used to deliver a project</li><li>Gain expertise to position themselves as a leader on certain features</li></ul>",
      },
    ],
    Delivery: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Ability to handle increasingly complex tasks with minimal direction</li><li>Deliver in a timely manner and demonstrate intermediate knowledge of content and processes</li><li>Produce high quality deliverables that are recognised as such by team members and stakeholders</li><li>Considered a SME by others of at least part of an application/solution</li></ul>",
        description2:
          "Alice is a very consistent performer on the team.  She almost always finishes on time with very few bugs.  Her coding style is clean, consistent and uses a lot of best practices like non repeating code and favouring simplicity.",
        description3:
          "Bob is extremely productive on the team.  His code is clean and thorough. Bob is also beginning to have a multi-faceted approach to building solutions.  His code considers: threading, memory management, separation of concerns, performance etc.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Ability to handle increasingly complex tasks with minimal direction</li><li>Deliver in a timely manner and demonstrate intermediate knowledge of content and processes</li><li>Produce high quality deliverables that are recognised as such by team members and stakeholders</li><li>Considered a SME by others of at least part of an application/solution</li></ul>",
        description2:
          "Alice is a very consistent performer on the team.  She almost always finishes on time with good quality & test coverage.  Her test scripts are well organised and implemented, consistent and best practices.",
        description3:
          "Bob is extremely productive on the team.  His tests are effective, thorough, stable and with good edge case coverage. Amit is also beginning to have a multi-faceted approach to quality engineering.  His tests considers both functional and non-functional aspects of the solution under test and are optimised for fast feedback.",
      },
      {
        name: "Technical Leadership",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Coding",
        specialism: "Software Engineer",
        description:
          "Understands a portion of the team's domain within which, they consistently write functions that are easily testable, easily understood by other engineers, and accounts for edge cases and errors. Uses code comments effectively.",
      },
      {
        name: "Coding",
        specialism: "Quality Engineer",
        description:
          "Understands a portion of the team's domain within which, they consistently write test fixtures that are easily understood by other engineers, accounting for edge cases and errors. Uses comments or documentation effectively.",
      },
      {
        name: "Testing",
        specialism: "Software Engineer",
        description:
          "Understands the testing pyramid, writes unit tests in accordance with it, as well as higher level tests with help from more senior engineers. Always tests expected edge cases and errors as well as the happy path.",
      },
      {
        name: "Testing",
        specialism: "Quality Engineer",
        description:
          "Understands the testing pyramid, writes higher level tests in accordance with it. Always tests expected edge cases and errors as well as the happy path.  Is aware of some overall test automation approaches used within the organisation.",
      },
      {
        name: "Debugging",
        specialism: "All",
        description:
          "Uses a systematic approach to debug issues located within a single service.",
      },
      {
        name: "Observability",
        specialism: "All",
        description:
          "Is aware of the organisation's monitoring philosophy and the operational data for their team’s domain.",
      },
      {
        name: "Architecture",
        specialism: "Software Engineer",
        description:
          "Designs functions that are aligned with best practice engineering standards within the team. Is aware of different architectural design patterns.",
      },
      {
        name: "Architecture",
        specialism: "Quality Engineer",
        description:
          "Designs test automation that is aligned with best practice engineering standards within the team. Is aware of different architectural design patterns.",
      },
      {
        name: "Cloud",
        specialism: "All",
        description:
          "Is aware of the overall landscape of cloud providers and how the organisation uses them.  Has gained some knowledge or experience with at least one provider.",
      },
      {
        name: "Data Design & Handling",
        specialism: "All",
        description:
          "Understands the importance of data handling and design; Is able to design and build systems which manage data.",
      },
      {
        name: "Security",
        specialism: "All",
        description:
          "Understands the importance and language of security concepts. Utilises this knowledge to ask more senior engineers for help on making decisions that may have security implications.",
      },
    ],
    People: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Uses knowledge and experience to regularly help other team members</li><li>Proactively seeks development opportunities, pre-empting the skills or contents required for delivery</li><li>Maintain effectiveness during changing circumstances and successfully fulfil their responsibilities</li><li>Starting to actively seeking out leadership opportunities and starting to develop a leadership style</li></ul>",
        description2:
          "Alice took the initiative to streamline interactions between developers and a vendor UX team.  By listening carefully to both teams she worked with BAs and UX designers to define several templates that the teams used to request artifacts/information from each other.",
        description3:
          "Bob worked on a PoC that had tight deadlines.  During meetings with the client, Bob asked a lot of question to help understand the scope and intent of the PoC.  Based on Bob’s findings he recommended that we build the PoC using a prototyping tool instead of actually developing the PoC in order to cut cost and save time.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Uses knowledge and experience to regularly help other team members</li><li>Proactively seeks development opportunities, pre-empting the skills or contents required for delivery</li><li>Maintain effectiveness during changing circumstances and successfully fulfil their responsibilities</li><li>Starting to actively seeking out leadership opportunities and starting to develop a leadership style</li></ul>",
        description2:
          "Bob took the initiative to streamline interactions between developers and quality engineers.  By listening carefully to both teams he worked to improve the acceptance criteria required to successfully deliver the teams product",
        description3:
          "Alice worked on a PoC that had tight deadlines.  During meetings with the client, Alice asked a lot of question to help understand the scope and intent of the PoC.  Based on Alice’s findings she recommended that the team adopted some new testing tools into the overall quality framework to cut cost and save time.",
      },
      {
        name: "Management",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Feedback",
        specialism: "All",
        description:
          "Delivers praise and constructive feedback to their team, teammates, and manager in a useful manner.  Actively seeks out feedback from their teammates and manager, and works to use feedback that they receive as a tool for growth.",
      },
      {
        name: "Effective Communication",
        specialism: "All",
        description:
          "Usually communicates effectively, clearly, concisely and in an audience-oriented way in written and verbal form both technical and non technical subjects, to their teammates. Understands their work domain, shares their knowledge frequently with their teammates and contributes to their team's documentation.  Actively listens to others and ensures they are understood. Pays attention to non-verbal communication.",
      },
      {
        name: "Teamwork",
        specialism: "All",
        description:
          "When requested, helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Gives or shares credit where due.",
      },
      {
        name: "Relationship Building",
        specialism: "All",
        description:
          "Works to build strong relationships with their teammates, manager, and product counterpart.",
      },
      {
        name: "Inclusion",
        specialism: "All",
        description:
          "Openly shares their opinions and contributes to discussions in a respectful manner. Approaches disagreement with their teammates non-defensively with inquisitiveness. Uses contradictory opinions as a basis for constructive, productive conversations. Is open to changing their perspective and plans based on others' input.",
      },
      {
        name: "Mentoring",
        specialism: "All",
        description:
          "Seeks out mentorship to grow their own experience. Sometimes mentors their teammates in an open, respectful, flexible, empathetic manner.",
      },
      {
        name: "Continuous Learning",
        specialism: "All",
        description:
          "Consistently pursues continuous learning in order to increase skills.  Has gained advanced knowledge in at least one technical domain that is relevant to the team.",
      },
    ],
    Stakeholder: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Proactively cultivates relationships with key stakeholders to benefits delivery and Capco</li><li>Keeps stakeholders informed, raises risks/issues, anticipates stakeholder needs</li><li>Awareness of and/or participate in the design of processes to effectively manage stakeholders</li></ul>",
        description2:
          "Alice took the initiative to streamline interactions between developers and a vendor UX team.  By listening carefully to both teams she worked with BAs and UX designers to define several templates that the teams used to request artifacts/information from each other.",
        description3:
          "Bob worked on a PoC that had tight deadlines.  During meetings with the client, Bob asked a lot of question to help understand the scope and intent of the PoC.  Based on Bob’s findings he recommended that we build the PoC using a prototyping tool instead of actually developing the PoC in order to cut cost and save time.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Proactively cultivates relationships with stakeholders</li><li>Keeps stakeholders informed, raises risks/issues, anticipates stakeholder needs</li><li>Awareness of and/or participate in the design of quality processes to effectively manage stakeholders</li></ul>",
        description2:
          "Amit took the initiative to streamline interactions between developers and quality engineers.  By listening carefully to both teams he worked to improve the acceptance criteria required to successfully deliver the teams product",
        description3:
          "Susan worked on a PoC that had tight deadlines.  During meetings with the client, Susan asked a lot of question to help understand the scope and intent of the PoC.  Based on Susan’s findings she recommended that the team adopted some new tools into the overall quality framework to cut cost and save time.",
      },
      {
        name: "Ambiguity & Risk",
        specialism: "All",
        description:
          "Usually handles risk, change, and uncertainty within their personal scope of work effectively. Clarifies expectations with their teammates.  Escalates any blockers, delays, and cost ballooning to their team daily. Usually decides and acts responsibly without having the total picture during routine business, and when in high pressure situations.",
      },
      {
        name: "Economic Thinking",
        specialism: "All",
        description:
          "When taking action, weighs cost and value in order to take the most economic action with help from more senior engineers. Sometimes uses this type of thinking to make suggestions to teammates.",
      },
      {
        name: "Decision Making",
        specialism: "All",
        description:
          "Can articulate decisions required, identifies relevant context and prepares options and recommendations for consideration.  Strives to be objective and reflects on their own biases when making decisions. Holds themselves accountable for decision and outcomes.",
      },
      {
        name: "Driving Alignment",
        specialism: "All",
        description:
          "Has conversations based on organisational strategy and principles with their teammates when appropriate. Strongly oriented towards goals and works towards their team's goals.",
      },
      {
        name: "Business Acumen",
        specialism: "All",
        description:
          "Has a good understanding of client engagements and how to represent the company well.",
      },
      {
        name: "Strategic Work",
        specialism: "All",
        description: "Understands the organisation's engineering strategy.",
      },
    ],
  },
  "Senior Consultant": {
    Overview: [
      {
        name: "Description",
        specialism: "Software Engineer",
        description:
          "A Senior Engineer leads development efforts to deliver high quality solutions.  They are considered SMEs on multiple technical topics.  In addition they consistently and regularly contribute valuable knowledge derived from proven delivery to the practice.",
      },
      {
        name: "You Have",
        specialism: "Software Engineer",
        description:
          "<ul><li>SME for multiple technologies and contribute valuable knowledge to the practice</li><li>Successfully leads teams and shows agency to ensure delivery</li><li>Delivers high quality client solutions being mindful but challenging client constraints where appropriate</li><li>Demonstrate not only technical excellence by effective leadership and management of other engineers</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Software Engineer",
        description:
          "<ul><li>Increase deep technical expertise in a minimum of two client desirable areas</li><li>Drive recommendations for building practice level knowledge in up and coming technology areas</li><li>Ability to take a strategic and future oriented approach to knowledge sharing in the practice</li><li>Recognize organizational needs and help others scale acumen in that area</li></ul>",
      },
      {
        name: "Description",
        specialism: "Quality Engineer",
        description:
          "A Senior Quality Engineer leads quality engineering efforts to deliver high quality solutions.  They are considered SMEs on multiple technical topics.  In addition they consistently and regularly contribute valuable knowledge derived from proven delivery to the practice.",
      },
      {
        name: "You Have",
        specialism: "Quality Engineer",
        description:
          "<ul><li>SME for multiple technologies and contribute valuable knowledge to the practice</li><li>Successfully leads teams and shows agency to ensure delivery</li><li>Delivers high quality client solutions being mindful but challenging client constraints where appropriate</li><li>Demonstrate not only technical excellence by effective leadership and management of other engineers</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Increase deep technical expertise in a minimum of two client desirable areas</li><li>Drive recommendations for building practice level knowledge in up and coming technology areas</li><li>Ability to take a strategic and future oriented approach to knowledge sharing in the practice</li><li>Recognize organizational needs and help others scale acumen in that area</li></ul>",
      },
    ],
    Delivery: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Define and implement solutions for moderate/complex problems from high level solutions detailed components</li><li>Demonstrate multiple areas of technical and and business expertise that is recognised by stakeholders</li><li>Manage delivery of high quality solutions and deliverables by collaborating effectively and developing others</li><li>Deliver in a timely manner and demonstrate specialist skills and experience</li></ul>",
        description2:
          "Bob cares about the quality of the application code he delivers. His code is clean, thorough, and is always accompanied by tests.  Bob is adept with his language of choice and is aware of software design principles such as SOLID, KISS, etc.  Bob freely shares this knowledge with more junior members of the team and peers.",
        description3:
          "Alice is recognized within Capco as a go-to person for frontend application development. Alice was tasked to define a generic framework to generate web forms for an existing client onboarding application, which already has a number of existing forms in place. She successfully led the team in creating the framework and integrated it into the application and replaced the existing forms.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Define and implement solutions for moderate/complex quality engineering assignments</li><li>Demonstrate multiple areas of technical and and business expertise that is recognised by stakeholders</li><li>Manage delivery of high quality solutions and deliverables by collaborating effectively and developing others</li><li>Deliver in a timely manner and demonstrate specialist skills and experience</li></ul>",
        description2:
          "Bob cares about the quality of the products he delivers. His tests are complete, durable, efficient and well managed.  Bob is adept with his language(s) of choice and applies software design principles to the test code and refactors to improve the test suites if required.",
        description3:
          "Alice is recognized within Capco as a go-to person for quality engineering. Alice was tasked to define a generic framework for testing multiple software products, this included the migration to use the framework for software products that already had legacy automation tests in place. She successfully led the team in creating the framework and seamlessly implemented it to consolidate and retire the legacy testing frameworks",
      },
      {
        name: "Technical Leadership",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Coding",
        specialism: "Software Engineer",
        description:
          "Understands their team's domain at a high level and can gather sufficient context to work productively within it. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring and when it is appropriate to use them.",
      },
      {
        name: "Coding",
        specialism: "Quality Engineer",
        description:
          "Understands their team's domain at a high level and can gather sufficient context to work productively within it. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results. Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: "Testing",
        specialism: "Software Engineer",
        description:
          "Understands the testing pyramid, and writes unit and higher level tests in accordance with it. Always writes tests to handle expected edge cases and errors gracefully, as well as happy paths.",
      },
      {
        name: "Testing",
        specialism: "Quality Engineer",
        description:
          "Understands the testing pyramid, and writes higher level tests in accordance with it. Always writes tests to handle expected edge cases and errors gracefully, as well as happy paths. Is aware of, and contributes to test automation approaches used within the organisation.",
      },
      {
        name: "Debugging",
        specialism: "All",
        description:
          "Proficient at using systematic debugging to diagnose all issues across a domain. Uses systematic debugging to diagnose cross service issues, sometimes with help from more senior engineers.",
      },
      {
        name: "Observability",
        specialism: "All",
        description:
          "Is aware of the organisation's monitoring philosophy. Helps review and amend  the monitoring on their team accordingly. Is aware of the operational data for their team’s domain and uses it as a basis for suggesting stability and performance improvements.",
      },
      {
        name: "Architecture",
        specialism: "Software Engineer",
        description:
          "Consistently designs code that is aligned with the overall service architecture. Utilises abstractions and code isolation effectively.  Has knowledge of, and experience contributing to, architectural design patterns.",
      },
      {
        name: "Architecture",
        specialism: "Quality Engineer",
        description:
          "Consistently designs automation that is aligned with the overall service architecture. Understands how to adapt test automation approaches to different architectural design patterns.",
      },
      {
        name: "Cloud",
        specialism: "All",
        description:
          "Is aware of the overall landscape of cloud providers and how the organisation uses them;  Is aware of the organisational management and strategy for cloud providers.  Has an understanding of how projects are managed within the cloud and the design AND setup considerations;  has gained some experience with at least one provider.  Has defined and progressed a plan to gain training or certification in at least one cloud provider.",
      },
      {
        name: "Data Design & Handling",
        specialism: "All",
        description:
          "Understands the importance of data handling and design; Is able to design and build systems which manage data, including knowledge and implementation of data security best practise.",
      },
      {
        name: "Security",
        specialism: "All",
        description:
          "Approaches all engineering work with a security lens. Actively looks for security vulnerabilities both in the code and when providing peer reviews.  Has a general understanding of some key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks)",
      },
    ],
    People: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Lead small/medium size teams and manage projects with little guidance</li><li>Proactive in navigating uncertainty in their role and adapts communication style for different audiences</li><li>Proactive in developing junior team members, sharing knowledge and giving feedback</li><li>Contributes valuable SME knowledge to the practice that moves the practice forward</li><li>Demonstrates a desire for continuous learning and role models the importance of learning</li></ul>",
        description2:
          "Alice is the lead on a project where the client is constantly changing their requirements.  Aware of potential scope creep, Alice proactively puts processes in place to prioritize and clarify requirements with the client and just importantly manage the changes into the team and development activities.  Alice also promotes knowledge sharing within her team and often pairs with other team members to minimize knowledge silos.",
        description3:
          "Bob was assigned as the lead of a small team to build a new front end application for a client.  There was some uncertainty around the technologies chosen by the client with respect to performance. Aware of the potential risks, Bob explained the risks to the client and recommended that they first prove out the technology with a PoC of all the critical features. After the successful delivery of the project, Bob hosted a lunch and learn and shared his findings with others in the practice.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Lead small/medium size teams and manage projects with little guidance</li><li>Proactive in navigating uncertainty in their role and adapts communication style for different audiences</li><li>Proactive in developing junior team members, sharing knowledge and giving feedback</li><li>Contributes valuable SME knowledge to the practice that moves the practice forward</li><li>Demonstrates a desire for continuous learning and role models the importance of learning</li></ul>",
        description2:
          "Alice is the lead on a project where the client is constantly changing their requirements.  Aware of potential scope creep and the potential impact on quality, Alice proactively works with stakeholders to highlight the risks, mitigate they through automating the highest priority features.  Alice also promotes knowledge sharing within her team and often pairs with other team members to minimize knowledge silos.",
        description3:
          "Bob was assigned as the lead of a small team to build a custom testing framework for a client.  There was some uncertainty around the testing tools and suitability of the framework developed by the client. Aware of the potential project risks, Bob explained the risks to the client and recommended that they validate the choices and evaluate some alternatives. After the successful delivery of the project, Bob hosted a lunch and learn and shared his findings with others in the practice.",
      },
      {
        name: "Management",
        specialism: "All",
        description: "Not applicable at this level.",
      },
      {
        name: "Feedback",
        specialism: "All",
        description:
          "Delivers praise and constructive feedback to their team, teammates, and manager in a useful manner. Delivers feedback to their team's business stakeholders when opportunities arise. Works within their teams and with its business stakeholders to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours. ",
      },
      {
        name: "Effective Communication",
        specialism: "All",
        description:
          "Communicates effectively, clearly, concisely in written and verbal form both technical and non technical subjects, and in an audience-oriented way. Understands their team's domain, shares their knowledge frequently with their teammates and contributes to their team's documentation.  Actively listens to others and ensures they are understood. Pays attention to non-verbal communication. ",
      },
      {
        name: "Teamwork",
        specialism: "All",
        description:
          "Sometimes helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Uses problem solving as a means to learn and share solutions with wider teams. Gives or shares credit where due.",
      },
      {
        name: "Relationship Building",
        specialism: "All",
        description:
          "Works to build strong relationships with their teammates, client peers, manager, as well as their teams' relevant business and client stakeholders.",
      },
      {
        name: "Inclusion",
        specialism: "All",
        description:
          "Encourages their teammates to openly share their opinions and contribute to discussions in a respectful manner. Approaches disagreement non-defensively with inquisitiveness. Uses contradictory opinions as a basis for constructive, productive conversations. Is open to changing their perspective and plans based on others' input. ",
      },
      {
        name: "Mentoring",
        specialism: "All",
        description:
          "Mentors their teammates in an open, respectful, flexible, empathetic manner. Seeks out mentoring opportunities specifically to create team redundancy and backfill ability.  Mentors members of other teams as needed",
      },
      {
        name: "Continuous Learning",
        specialism: "All",
        description:
          "Consistently pursues continuous learning in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in more than one technical domain that is relevant to the team. Discusses learning gaps with the wider team to identify opportunities for team growth.  Actively investigates and recommends additions or changes to the tooling of teams.",
      },
    ],
    Stakeholder: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Effective at managing expectations and anticipating needs, risks and potential issues without direct instruction</li><li>Always keeps stakeholders informed, frequently raises risks/issues and potential mitigations</li><li>Regularly anticipates stakeholder needs and proposes creative and feasible ways to address them</li><li>Regarded as a trusted advisor to stakeholders and is frequently consulted on decisions</li></ul>",
        description2:
          "Bob regularly prepares for and performs relevant research before story grooming and technical design sessions. This enables him to lead and facilitate the sessions and bring valuable insights and questions to the table.  He puts the clients goals at the centre of decisions while balancing against the deliverability of high quality solutions.",
        description3:
          "Alice was put on a difficult project where she had to report to multiple stakeholders, some with contradicting interests and motivations that materially impact the technology choices.  Over several meetings Alice was able to design a solution that satisfied the requirements and gain concurrence amongst all the stakeholders. Alice is highly regarded as a trusted advisor and stakeholders often seek out her informed advice and guidance even if not directly in the sphere of her responsibility.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Effective at managing expectations and anticipating needs, risks and potential issues without direct instruction</li><li>Always keeps stakeholders informed, frequently raises risks/issues and potential mitigations</li><li>Regularly anticipates stakeholder needs and proposes creative and feasible ways to address them</li><li>Regarded as a trusted advisor to stakeholders and is frequently consulted on decisions</li></ul>",
        description2:
          "Bob regularly prepares for and performs relevant deep dive functional and technical sessions to identify quality engineering requirements and improvements. This enables him to bring valuable insights and questions to the stakeholders and progressively improve the quality of the products being delivered, which is recognised and valued by stakeholders.",
        description3:
          "Alice was put on a difficult project where she had to report to multiple stakeholders, some with contradicting interests and motivations that materially impact the quality engineering options.  Over several meetings Alice was able to design a solution that satisfied the requirements and gain concurrence amongst all the stakeholders. Alice is highly regarded as a trusted advisor and stakeholders often seek out her informed advice and guidance even if not directly in the sphere of her responsibility.",
      },
      {
        name: "Ambiguity & Risk",
        specialism: "All",
        description:
          "Effectively handles risk, change, and uncertainty within their team. Ensures expectations within their team are clarified between all parties involved.  Decides and acts responsibly in their work with their team without having the total picture during routine business, as well as when in high pressure situations.  Anticipates and communicates blockers, delays, and cost ballooning for their work before they require escalation.",
      },
      {
        name: "Economic Thinking",
        specialism: "All",
        description:
          "When taking action, weighs cost and value in order to take the most economic action. Uses this thinking in their own work, and to make suggestions to teammates.",
      },
      {
        name: "Decision Making",
        specialism: "All",
        description:
          "Facilitates discussions within their team, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals. Can articulate decisions required, identifies relevant context and prepares options and recommendations for consideration.  Strives to be objective and reflects on their own biases when making decisions. Holds themselves accountable for decision and outcomes.",
      },
      {
        name: "Driving Alignment",
        specialism: "All",
        description:
          "Has conversations based on organisational strategy and principles with their teammates when appropriate to ensure team alignment. Strongly oriented towards goals and ensures their team is continuously working towards their shared goals.",
      },
      {
        name: "Business Acumen",
        specialism: "All",
        description:
          "Has a thorough understanding of their team's engagements with customers, and how it contributes to customer success. Has a basic understanding of adjacent teams' business domains.",
      },
      {
        name: "Strategic Work",
        specialism: "All",
        description:
          "Understands the organisation's engineering strategy. Usually involved in discussions about the implications for their team.  Has contributed to engineering strategic work.",
      },
    ],
  },
  "Principal Consultant": {
    Overview: [
      {
        name: "Description",
        specialism: "Software Engineer",
        description:
          "A Principal Software Engineer drives large project delivery of high quality software solutions.  On the consulting side a Principal Engineer will help with team engagement, team coaching, resource management and recruiting along with developing technical capabilities to deliver software projects and the evolution of the engineering practice.",
      },
      {
        name: "You Have",
        specialism: "Software Engineer",
        description:
          "<ul><li>Played key role in the delivery of mid/large sized engineering projects or multiple streams</li><li>Effective day to day coaching of project engineers improving the depth and breadth of the overall capability</li><li>Engineering expertise that is recognised by client engineering teams, stakeholders and team members</li><li>Set and governed standards, patterns and practices across medium/large engineering teams</li><li>An SME in multiple engineering areas and able to lead across the entire stack</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Software Engineer",
        description:
          "<ul><li>Support large program delivery of high quality software solutions</li><li>Participate in the development of the individual capabilities and technical deliverables</li><li>Work across business streams and apply engineering SME knowledge to drive delivery</li><li>Participate in the selling of a technical solution and communication of the value proposition to stakeholders</li><li>Participate in engineering resource management and recruiting, attracting and retaining talent at Capco</li><li>Developing organizational capabilities to support software excellence and the evolution of the engineering practice</li></ul>",
      },
      {
        name: "Description",
        specialism: "Quality Engineer",
        description:
          "A Principal Quality Engineer drives large project delivery of high quality software solutions.  On the consulting side a Principal Engineer will help with team engagement, team coaching, resource management and recruiting along with developing technical capabilities to deliver software projects and the evolution of the engineering practice.",
      },
      {
        name: "You Have",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Played key role in the delivery of mid/large sized engineering projects or multiple streams</li><li>Effective day to day coaching of quality engineers improving the depth and breadth of the overall capability</li><li>Quality engineering expertise that is recognised by client engineering teams, stakeholders and team members</li><li>Set and governed standards, patterns and practices across medium/large engineering teams including quality frameworks</li><li>An SME in multiple engineering areas and able to lead across the entire stack</li></ul>",
      },
      {
        name: "You Will",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Support large program delivery of high quality software solutions</li><li>Participate in the development of the individual capabilities and quality engineering deliverables</li><li>Work across business streams and apply engineering SME knowledge to drive quality delivery</li><li>Participate in the selling of a technical solution and communication of the value proposition to stakeholders</li><li>Participate in engineering resource management and recruiting, attracting and retaining talent at Capco</li><li>Developing organizational capabilities to support software excellence and the evolution of the engineering practice</li></ul>",
      },
    ],
    Delivery: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Software Engineer",
        description:
          "<ul><li>Define technical solutions for complex problems</li><li>Delivers consistently to a high standard and ensures quality work from their team</li><li>Recognized within Capco as having proven skills and experience from project delivery</li><li>Uses specialist knowledge and skills to provide insight and guidance to juniors, peers and stakeholders</li></ul>",
        description2:
          "Bob defined the solution for how the users would access partner web applications via SSO.  Bob is highly experienced in the realm of security so his team was able to deliver the solution even though scope and complexity were added during development.  The client was happy with the outcome of the project.",
        description3:
          "Alice defined the project scope and delivery plan for an upcoming project.  During execution, Alice continuously fine tuned the delivery process to increase quality and reduce development time.  Through the delivery project Alice coached many of the project engineers, sharing her knowledge and expertise to accelerate team members careers.  Alice is known within Capco as a thought leader on software development practices and is brought in by program stakeholders to consult on development matters.",
      },
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "Quality Engineer",
        description:
          "<ul><li>Define technical solutions for complex problems</li><li>Delivers consistently to a high standard and ensures quality work from their team</li><li>Recognized within Capco as having proven skills and experience from project delivery</li><li>Uses specialist knowledge and skills to provide insight and guidance to juniors, peers and stakeholders</li></ul>",
        description2:
          "Bob defined the solution for utilising new functional and non-functional quality engineering tools across multiple teams.  Bob is highly experienced in quality engineering so his team was able to deliver the solution by adapting the approach even though scope and complexity were added during delivery.",
        description3:
          "Alice defined the project scope and delivery plan for an upcoming project.  During execution, Alice continuously fine tuned the delivery process to increase quality and reduce development time.  Alice is known within Capco as a thought leader on quality engineering practices and is brought in by program stakeholders to consult on quality matters even if not directly engaged.",
      },
      {
        name: "Technical Leadership",
        specialism: "All",
        description:
          "The Principal Engineer provides considerable high-level technical guidance across the engineering organisation and project teams. They can usually anticipate and plan for technical problems. They are highly knowledgeable in major parts of our technology stack and are the technical owner of significant components within client accounts or internal engineering projects. They act in a very hands-on role, and as such, they are a prolific contributor to both core projects at Capco as well as side and experimental work. When presented with a complex problem, process or existing system they are able to reduce the complexity in order to get more done with less work. They provide guidance, direction and help colleagues build and produce better outcomes. They are capable of driving groups of disparate interests to decisions, and clearly communicating and seeing those decisions through to impact. They are capable of setting short to medium term strategic direction for part of technology stacks, identifying areas of critical need based on future growth and developing roadmaps to attack those problems.",
      },
      {
        name: "Coding",
        specialism: "Software Engineer",
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring, when it is appropriate to use them and helps teams refactor appropriately.",
      },
      {
        name: "Coding",
        specialism: "Quality Engineer",
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results.  Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: "Testing",
        specialism: "Software Engineer",
        description:
          "Understands the testing approach, and uses quality metrics to identify gaps. Is able to work individually or with their teams drawing on experience to recommend tooling and solutions aligning with organisational strategies.  Influences organisation wide testing strategy.",
      },
      {
        name: "Testing",
        specialism: "Quality Engineer",
        description:
          "Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy.",
      },
      {
        name: "Debugging",
        specialism: "All",
        description:
          "Proficient at using systematic debugging to diagnose issues across a range of domains.",
      },
      {
        name: "Observability",
        specialism: "All",
        description:
          "Drives monitoring work on their team based on the organisation's monitoring philosophy. Is aware of the operational data for their team’s domain and uses it as a basis for driving changes to the team's services to achieve stability and performance improvements.",
      },
      {
        name: "Architecture",
        specialism: "Software Engineer",
        description:
          "Architects services and systems using well accepted design patterns to allow for iterative, autonomous development and future scaling. Guides teams in anticipation of future use cases and helps them make design decisions that minimize the cost of future changes.",
      },
      {
        name: "Architecture",
        specialism: "Quality Engineer",
        description:
          "Architects test automation approaches using well accepted design patterns to add the quality assurance controls needed for iterative, autonomous development. Guides teams in filling new gaps in automation and helps them make design decisions that minimize the cost of future changes.",
      },
      {
        name: "Cloud",
        specialism: "All",
        description:
          "Has advanced knowledge of cloud concepts, capabilities and design considerations. Works closely with teams to deliver solutions in alignment with the organisational cloud strategy.  Has detailed knowledge of how projects are managed within the cloud and the design AND setup considerations;  has gained knowledge/experience or certification with more than one provider; Is aware of industry trends/advancements in cloud technologies.",
      },
      {
        name: "Data Design & Handling",
        specialism: "All",
        description:
          "Understands advanced data handling concepts/designs.  Designs and builds systems which manage data securely.  Actively promotes secure data management across teams, clients and the organisation.",
      },
      {
        name: "Security",
        specialism: "All",
        description:
          "Actively contributes to security designs based on the organisation's security strategy. Fosters a security first mindset across teams, and leads by example. Has advanced knowledge  of key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks)",
      },
    ],
    People: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "All",
        description:
          "<ul><li>Leads a program team through periods of uncertainty and challenging circumstances</li><li>Plays a key role in the leadership of the account or program</li><li>An evangelist of engineering excellence and drives continuous improvements in our capabilities</li><li>Proactive in developing junior engineers and providing coaching/feedback</li><li>Contributes significantly to developing capabilities/practices, sponsoring or owning key initiatives</li></ul>",
        description2:
          "Bob leads a medium size team of 10 people to deliver a project structured within a larger program.  The team is working effectively and is delivering to client requirements even though client expectations are high.  Bob is an excellent mentor to junior team members within Capco and contributes as a member of relevant Communities of Practices (CoP).",
        description3:
          "Alice leads a a medium to large group of colleagues distributed in cross functional teams.  The group is a major component of the client program and requires coordination with the program stakeholders and the other development groups.  Alice hosts a recurring lunch and learn for team members to connect and improve their knowledge & skills.  Alice also works to recruit and/or retain talented individuals with Capco.",
      },
      {
        name: "Management",
        specialism: "All",
        description:
          "The Engineering Lead is comfortable managing engineers ensuring they are tracking the team's efficiency and quality of work, they assist in regularly adjusting processes and timelines to ensure high quality work is delivered.  More than writing code, they hold responsibility for identifying bottlenecks in the process and roadblocks to success for teams and clearing these roadblocks. They support teams to stay focused on projects. In addition to focusing the team, they are capable of identifying headcount needs for the organisation and client accounts and planning and recruiting to fill these needs. They are comfortable managing team members with different skill sets from their own. They communicate expectations clearly to all team members and solicit and deliver individual feedback frequently.",
      },
      {
        name: "Feedback",
        specialism: "All",
        description:
          "Fosters a culture of delivering praise and constructive feedback across their teams and team's respective business stakeholders. Actively demonstrates these behaviours. Works within their teams and with its business stakeholders to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours. ",
      },
      {
        name: "Effective Communication",
        specialism: "All",
        description:
          "Is able to communicate effectively with diverse teams and organisations. Fosters a culture of clear, concise, effective, audience-oriented communication across teams and wider stakeholders, ensuring teammates actively listen to others and are understood.  Fosters a culture of documentation and knowledge sharing within their team and with their team's business stakeholders; actively demonstrates these behaviours. Actively demonstrates these behaviours. Pays attention to non-verbal communication. ",
      },
      {
        name: "Teamwork",
        specialism: "All",
        description:
          "Consistently helps their teammates overcome obstacles, resolve blockers, and complete work tasks. Uses problem solving as a means to learn and share solutions with wider teams.  Ensures that credit is shared and given where due.  Demonstrates attributes of a servant leader.",
      },
      {
        name: "Relationship Building",
        specialism: "All",
        description:
          "Works to build and improve strong relationships with their teammates, client peers, manager, their teams' relevant business and client stakeholders, and senior engineers across the organisation. Leverages relationships to better plan for and position their team.",
      },
      {
        name: "Inclusion",
        specialism: "All",
        description:
          "Fosters a culture within their teams where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinions as a basis for constructive, productive conversations. Works through surface-level disagreements to expose the concerns of disagreeing voices and integrates these concerns into their perspective and plans.",
      },
      {
        name: "Mentoring",
        specialism: "All",
        description:
          "Mentors across teams in an open, respectful, flexible, empathetic manner. Fosters a culture of mentoring across teams by seeking out mentoring opportunities for themselves and others, and supports others in their growth as mentors.",
      },
      {
        name: "Continuous Learning",
        specialism: "All",
        description:
          "Consistently pursues continuous learning both individually and across teams in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in multiple technical domains that are relevant to the team. Discusses learning gaps with the wider team to identify opportunities for team growth.  Actively investigates and recommends additions or changes to the tooling of the team in accordance with customer demand and team strategy.",
      },
    ],
    Stakeholder: [
      {
        name: "Narrative",
        name2: "Expected Performance",
        name3: "High Performance",
        specialism: "All",
        description:
          "<ul><li>Effective at managing expectations and anticipating needs, risks and potential issues without direct instructions</li><li>Trusted by project leaders and seeks to develop strong relationships with senior stakeholders</li><li>Provides guidance to the stakeholder on addressing business needs and leads projects to meet these needs</li><li>Demonstrates an understanding of stakeholder business drivers</li></ul>",
        description2:
          "Bob is working with client project managers in planning for deploying into production.  Requirements from the business and technology units will drive how the process will be executed and coordinated with other groups.  The plan will need approval by senior stakeholders (on both Capco and client side) before it can go ahead.",
        description3:
          "Alice’s project needs a new contract as the client stakeholder has lost partial funding to deliver the full solution.  Alice has been asked to decide on what can be delivered with the limited funding they have.  She works with the senior stakeholders to trim scope and manages the teams to deliver a viable MVP into production.",
      },
      {
        name: "Ambiguity & Risk",
        specialism: "All",
        description:
          "Effectively handles risk, change, and uncertainty across several teams. Ensures expectations with their team and external stakeholders are clarified between all parties involved.  Decides and acts responsibly in their work across teams without having the total picture during routine business, as well as when in high pressure situations.  Anticipates and communicates blockers, delays, and cost ballooning within their team’s projects, before they require escalation.",
      },
      {
        name: "Economic Thinking",
        specialism: "All",
        description:
          "When taking action, weighs cost and value in order to take the most economic action. Uses this thinking in their own work, and to foster a culture within their teams where people apply economic thinking to make timely decisions.",
      },
      {
        name: "Decision Making",
        specialism: "All",
        description:
          "Facilitates discussions across teams, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals. Guides discussions toward decisions, clarifies and gets buy-in.  Takes ownership of decisions made in their teams by helping their teammates make clear decisions in alignment with organisational goals, backing decisions made, and taking responsibility for their success. Raises awareness for how biases impact decisions and ensures accountability is practiced within their team. Demonstrates these behaviours themselves.",
      },
      {
        name: "Driving Alignment",
        specialism: "All",
        description:
          "Fosters a culture within their teams of having conversations based on organisational strategy and principles to create alignment. Strongly oriented towards goals and ensures their team is continuously working towards their goals.",
      },
      {
        name: "Business Acumen",
        specialism: "All",
        description:
          "Has a thorough understanding of several team's projects and domains, and how they contribute to overall business strategy and customer success.  Drives customer success through successful client deliveries and providing a trusted advisory role.",
      },
      {
        name: "Strategic Work",
        specialism: "All",
        description:
          "Collaborates and decides on their team's engineering work based on organisation's engineering strategy, together with their teammates and senior engineers. Sometimes involved in work on organisational engineering strategy.",
      },
    ],
  },
  "Managing Principal": {
    Delivery: [
      {
        name: "Technical Leadership",
        specialism: "All",
        description:
          "The Distinguished Engineer has significant strategic vision and can take a high-level 3-5 year plan for growth at a business level and translate that into a strategic technology roadmap. They are deeply technically savvy and their primary job is focusing on the architectural and technology needs to grow the engineering organisation over the longer-term horizon; they deal with very deep technical problems and a long time horizon. A Distinguished Engineer is still acting in a very hands-on role, and as such, they are a prolific contributor to both core projects at Capco as well as side and experimental work. When presented with a complex problem, process or existing system they are consistently able to reduce the complexity in order to get more done with less work. The ability to manage and simplify complexity is the hallmark of the Distinguished Engineer; by working with the Distinguished Engineer, engineers across the internal and client organisations gain more insight into dealing with complex technology problems and delivering robust solutions. The Distinguished Engineer has broad impact across Capco tech and client accounts. They create architecture that shapes large parts of our business and our client's business, and ship complex projects including many systems or major pieces of infrastructure. The impact of their work is felt across the team in the quality of the engineering that we produce, the ways we write code, the core libraries that we use, and the underlying design of systems. There are multiple obvious large technical contributions that can be pointed to as originating from this team member.",
      },
      {
        name: "Coding",
        specialism: "Software Engineer",
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes production-ready code that is easily testable and understood by other engineers while accounting for edge cases and errors. Understands when it is appropriate to leave comments, but biases towards self-documenting code.  Understands different techniques for refactoring, when it is appropriate to use them and helps teams refactor appropriately.",
      },
      {
        name: "Coding",
        specialism: "Quality Engineer",
        description:
          "Has expertise in a set of the team's domains, including the breadth of services, how they interact, and data flows between systems. Consistently writes test automation for production-ready services that is easily understood by other engineers, and accounts for edge cases and errors. Understands when it is appropriate to create documentation, but biases towards demonstratable automation results.  Understands wider non-functional test automation concepts and has gained experience in at least one area.",
      },
      {
        name: "Testing",
        specialism: "Software Engineer",
        description:
          "Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy.",
      },
      {
        name: "Testing",
        specialism: "Quality Engineer",
        description:
          "Understands organisational testing approaches, and uses quality metrics to identify gaps. Works individually or with teams and draws on experience to recommend tooling AND solutions aligning with organisational strategies.  Drives organisation wide testing strategy.",
      },
      {
        name: "Debugging",
        specialism: "All",
        description:
          "Leads incident response across the engineering organisation as needed. Uses systematic debugging to diagnose issues across the organisation.",
      },
      {
        name: "Observability",
        specialism: "All",
        description:
          "Fosters a culture of observability across the engineering organisation. Helps teams across the engineering organisation use operational data to improve stability and performance of their domains.",
      },
      {
        name: "Architecture",
        specialism: "Software Engineer",
        description:
          "Works across the organisation to foster a culture of architecture that allows for iterative, autonomous development and future scaling. Guides teams in the organisation in anticipation of future use cases and helps them make design decisions that minimize the cost of future changes.",
      },
      {
        name: "Architecture",
        specialism: "Quality Engineer",
        description:
          "Has advanced knowledge of, and contributes to, test automation requirements across different solution designs across the organisation. Guides teams in the organisation in anticipation of future automation needs and helps them make automation design decisions that minimise the cost of future changes.",
      },
      {
        name: "Cloud",
        specialism: "All",
        description:
          "Has advanced knowledge of cloud concepts, capabilities and design considerations.  Contributes to the organisational cloud strategy or management.  Proactively supports or is leading project alignment with the strategy across the organisation.  Contributes to ongoing assessment of organisational skills gaps within the cloud domain and contributes to the improvement of knowledge/skills required for the cloud; Is aware of wide industry trends/advancements in cloud technologies.",
      },
      {
        name: "Data Design & Handling",
        specialism: "All",
        description:
          "Understands advanced data handling concepts, designs and legislation.  Designs and builds systems which manage data securely.  Actively promotes secure data management across teams, clients and the organisation.",
      },
      {
        name: "Security",
        specialism: "All",
        description:
          "Actively contributes to setting and refining organisation wide security strategy. Fosters a security first mindset across the organisation. Can recognize obscure security threats that go unnoticed to others.  Has advanced knowledge of key security technologies, protocols AND techniques (e.g. TLS, OAuth, Encryption, Networks) and the wider security domain.",
      },
    ],
    People: [
      {
        name: "Management",
        specialism: "All",
        description:
          "The Senior Engineering Lead manages engineers across multiple capabilities of the engineering organisation. Contributing as the technically-savvy voice that asks business and product questions of the engineers on their teams, ensuring that the code we are writing matches the product and business needs and can scale appropriately as those needs grow. They continually evaluate and refine our development/infrastructure standards and processes to create technology that will deliver sustained value to the business and it's clients. They are responsible for creating high performance, high velocity organizations, measuring and iterating on processes as we grow and evolve as an engineering organisation. They lead on recruiting, headcount management and planning, career growth and training for the organization. As necessary, they manage vendor relationships and participate in the budgeting process. They are responsible for creating and growing the next generation of leadership and management talent in the organization, helping that talent learn how to balance technical and people leadership and management. They are strong leaders, and set the example for cross-functional collaboration both between Engineering and other areas of the organisation and client accounts. They are a very strong communicator and can simplify technical concepts in a way to explain them to non-technical partners, and take business direction and explain it to the technology team in a way that inspires and guides them.They help to create a positive public presence for the organisation and are capable of selling the company to potential candidates. They guide the planning process for the engineering organisation, helping the team articulate goals that support both business initiatives and technology and organizational quality.",
      },
      {
        name: "Feedback",
        specialism: "All",
        description:
          "Fosters a culture of delivering praise and constructive feedback across the organisation. Actively demonstrates these behaviours. Works across the organisation to foster a culture of seeking out feedback and using it as a tool for growth. Actively demonstrates these behaviours.",
      },
      {
        name: "Effective Communication",
        specialism: "All",
        description:
          "Is able to communicate effectively within and outside of the organisation. Fosters a culture of clear, concise, effective, audience-oriented communication across the organisation and wider stakeholders, ensuring teammates actively listen to others and are understood. Actively demonstrates these behaviours. Fosters a culture of documentation and knowledge sharing within and outside of the organisation; actively demonstrates these behaviours. Pays attention to non-verbal communication.",
      },
      {
        name: "Teamwork",
        specialism: "All",
        description:
          "Consistently works across the organisation to enable teams to support each other. Ensures that credit is shared and given where due. Demonstrates servant leader qualities.",
      },
      {
        name: "Relationship Building",
        specialism: "All",
        description:
          "Works to build and improve strong relationships with engineers, managers and capability leaders across the organisation as well as relevant client stakeholders and account managers. Leverages those relationships to better plan for and position the engineering organisation.  Actively seeks out the development of partnerships with relevant third parties to advance the capabilities AND offerings of the engineering organisation.",
      },
      {
        name: "Inclusion",
        specialism: "All",
        description:
          "Fosters a culture across the organisation where people are encouraged to share their opinions and contribute to discussions in a respectful manner, approach disagreement non-defensively with inquisitiveness, and use contradictory opinion as a basis for constructive, productive conversations. Integrates disagreeing perspectives from the whole company into their perspective and plans.",
      },
      {
        name: "Mentoring",
        specialism: "All",
        description:
          "Mentors across the organisation in an open, respectful, flexible, empathetic manner. Fosters an organisational culture of mentoring by seeking out mentoring opportunities for themselves and others, and supports others in their growth as mentors.",
      },
      {
        name: "Continuous Learning",
        specialism: "All",
        description:
          "Consistently pursues continuous learning both individually and across teams in order to increase skills and breadth of knowledge across tools and patterns promoted within the organisation.  Has gained advanced knowledge in multiple technical domains that are relevant to the team. Contributes to mapping organisational knowledge and manages  additions or changes to the tooling of the team in accordance with customer demand and team strategy.",
      },
    ],
    Stakeholder: [
      {
        name: "Ambiguity & Risk",
        specialism: "All",
        description:
          "Effectively handles risk, change, and uncertainty across the organisation. Ensures expectations across the organisation and external stakeholders are clarified between all parties involved.  Decides and acts responsibly in their work across the organisation without having the total picture during routine business, as well as when in high pressure situations.",
      },
      {
        name: "Economic Thinking",
        specialism: "All",
        description:
          "When taking action, weighs cost and value in order to make the most economic action. Uses this thinking in their own work, and to foster a culture within the organisation where people apply economic thinking to make timely decisions.",
      },
      {
        name: "Decision Making",
        specialism: "All",
        description:
          "Facilitates organisation-wide discussions, ensuring that everyone has an opportunity to share their opinion and be heard, and that discussion outcomes tie to stated goals Takes ownership of decisions made in the engineering organisation by helping organisation members make clear decisions in alignment with organisational goals, backing decisions made, and taking responsibility for their success. Raises awareness for how biases impact decisions and ensures accountability is practiced throughout the organisation. Demonstrates these behaviours themselves.",
      },
      {
        name: "Driving Alignment",
        specialism: "All",
        description:
          "Fosters a culture across the organisation based on organisational strategy, principles to create alignment and opportunities/requirement for global alignment where appropriate. Ensures goals are understood and continuously worked towards across the organisation.",
      },
      {
        name: "Business Acumen",
        specialism: "All",
        description:
          "Has a thorough understanding of the entire business, including individual domains, and how they contribute to overall business strategy.  Drives customer success through successful client deliveries and provides a thought leadership and strategic advisory role.",
      },
      {
        name: "Strategic Work",
        specialism: "All",
        description:
          "Leads strategic organisational decisions and plans. Consistently works at a strategic level, influencing decisions to achieve organisational alignment on major goals.",
      },
    ],
  },
};

export default contentData;
