export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  topic: string;
}

export const questions: Question[] = [
  // MODULE 1: INTRODUCTION & COMPUTER SYSTEMS
  {
    id: 1,
    topic: "Computer Systems",
    text: "Which of the following is defined as the physical component of the computer system?",
    options: ["Software", "Hardware", "Data", "Network"],
    correctAnswer: 1
  },
  {
    id: 2,
    topic: "Computer Systems",
    text: "Computer hardware components include Input, Process, Storage, and Output. Which of these is used to accept data from users?",
    options: ["Output", "Storage", "Input", "Process"],
    correctAnswer: 2
  },
  {
    id: 3,
    topic: "Computer Systems",
    text: "Which of the following is an example of an input device?",
    options: ["Monitor", "Printer", "Lightpen", "Speakers"],
    correctAnswer: 2
  },
  {
    id: 4,
    topic: "Computer Systems",
    text: "Primary storage in a computer system includes which of the following?",
    options: ["DVD", "HDD", "ROM and RAM", "USB Storage"],
    correctAnswer: 2
  },
  {
    id: 5,
    topic: "Computer Systems",
    text: "Software is typically categorized into System Software, Utility Software, and Apps. Which one controls and manages all activities that go on in the computer system?",
    options: ["Application Software", "System Software", "User Software", "Utility Programs"],
    correctAnswer: 1
  },
  {
    id: 6,
    topic: "Computer Systems",
    text: "Which of the following is an example of an Operating System?",
    options: ["MS Word", "Oracle", "Windows", "Adobe Flash"],
    correctAnswer: 2
  },
  {
    id: 7,
    topic: "Computer Systems",
    text: "Utility programs are also known as:",
    options: ["System programs", "Service programs", "End-user programs", "Drivers"],
    correctAnswer: 1
  },
  {
    id: 8,
    topic: "Computer Systems",
    text: "A program that controls a particular type of device attached to a computer system is called a:",
    options: ["Compiler", "Device Driver", "Interpreter", "Assembler"],
    correctAnswer: 1
  },
  {
    id: 9,
    topic: "Computer Systems",
    text: "Which language processor performs a 'whole conversion' of a source program into machine code?",
    options: ["Interpreter", "Assembler", "Compiler", "Linker"],
    correctAnswer: 2
  },
  {
    id: 10,
    topic: "Computer Systems",
    text: "Application software developed to perform specific tasks for users is often called:",
    options: ["Background programs", "End-user programs", "Middleware", "System utilities"],
    correctAnswer: 1
  },

  // MODULE 2: SOFTWARE DEVELOPMENT & ENGINEERING
  {
    id: 11,
    topic: "Software Development",
    text: "Software Development is defined as the process of designing, creating, testing, and ________ computer programs.",
    options: ["Selling", "Maintaining", "Deleting", "Copying"],
    correctAnswer: 1
  },
  {
    id: 12,
    topic: "Software Engineering",
    text: "According to IEEE, Software Engineering is the application of a systematic, disciplined, ________ approach to the development, operation and maintenance of software.",
    options: ["Qualitative", "Quantifiable", "Random", "Simplified"],
    correctAnswer: 1
  },
  {
    id: 13,
    topic: "Software Engineering",
    text: "Which of these is NOT one of the fundamental Software Engineering activities?",
    options: ["Software specification", "Software evolution", "Software marketing", "Software validation"],
    correctAnswer: 2
  },
  {
    id: 14,
    topic: "Software Products",
    text: "Stand-alone systems that are sold to customers for performing daily tasks are called:",
    options: ["Customized Products", "Generic Products", "Bespoke Applications", "Embedded Systems"],
    correctAnswer: 1
  },
  {
    id: 15,
    topic: "Software Products",
    text: "Software commissioned by a specific customer to meet their own needs is known as:",
    options: ["Generic Software", "Customized Products", "Universal Software", "Open Source Software"],
    correctAnswer: 1
  },
  {
    id: 16,
    topic: "Software Characteristics",
    text: "The capability of software to adapt itself in a quickly changing environment or keep up with customer needs is part of which characteristic?",
    options: ["Operational", "Transitional", "Maintenance", "Strategic"],
    correctAnswer: 2
  },
  {
    id: 17,
    topic: "Software Design",
    text: "The ability of a system to make maximum use of resources like memory and processor cycles refers to:",
    options: ["Maintainability", "Dependability", "Efficiency", "Usability"],
    correctAnswer: 2
  },
  {
    id: 18,
    topic: "Software Engineering",
    text: "Software Development is considered a ________ of Software Engineering.",
    options: ["Superset", "Subset", "Synonym", "Parallel process"],
    correctAnswer: 1
  },
  {
    id: 19,
    topic: "Software Engineering",
    text: "Which principle focuses on hiding implementation details and exposing only necessary functionality?",
    options: ["Modularity", "Abstraction", "Encapsulation", "Reusability"],
    correctAnswer: 1
  },
  {
    id: 20,
    topic: "Software Engineering",
    text: "Breaking software into smaller reusable components that can be developed and tested independently is called:",
    options: ["Abstraction", "Modularity", "Testing", "Deployment"],
    correctAnswer: 1
  },

  // MODULE 3: SDLC MODELS
  {
    id: 21,
    topic: "SDLC",
    text: "Which SDLC model is linear and sequential, where each phase must be completed before the next begins?",
    options: ["Agile", "Spiral", "Waterfall", "V-Model"],
    correctAnswer: 2
  },
  {
    id: 22,
    topic: "SDLC",
    text: "In which year was the Waterfall model first propounded by Winston W. Royce?",
    options: ["1960", "1970", "1980", "1990"],
    correctAnswer: 1
  },
  {
    id: 23,
    topic: "SDLC",
    text: "The Agile methodology emphasizes iterative cycles, adaptive planning, and ________.",
    options: ["Detailed documentation", "Customer collaboration", "Rigid structure", "Manual processes"],
    correctAnswer: 1
  },
  {
    id: 24,
    topic: "SDLC",
    text: "Which model emphasizes verification and validation at each phase of the development lifecycle?",
    options: ["Iterative Model", "Prototype Model", "V-Model", "RAD Model"],
    correctAnswer: 2
  },
  {
    id: 25,
    topic: "SDLC",
    text: "The Prototyping Model is ideal when:",
    options: ["Requirements are perfectly clear", "Customers do not know exact requirements beforehand", "The project is very small", "No feedback is needed"],
    correctAnswer: 1
  },
  {
    id: 26,
    topic: "SDLC",
    text: "Which model is also known as the 'Successive Versions Model'?",
    options: ["Incremental Model", "Waterfall Model", "Spiral Model", "RAD Model"],
    correctAnswer: 0
  },
  {
    id: 27,
    topic: "SDLC",
    text: "The Spiral Model is appropriate for large, complex, and ________ projects.",
    options: ["Low-budget", "High-risk", "Short-term", "Simple"],
    correctAnswer: 1
  },
  {
    id: 28,
    topic: "SDLC",
    text: "Which organization proposed the RAD model in 1980?",
    options: ["Microsoft", "IBM", "IEEE", "OMG"],
    correctAnswer: 1
  },
  {
    id: 29,
    topic: "SDLC",
    text: "Joint Application Development (JAD) emphasizes engaging ________ to design and develop the system.",
    options: ["Only developers", "The client/end-users", "Only testers", "Only project managers"],
    correctAnswer: 1
  },
  {
    id: 30,
    topic: "SDLC",
    text: "A 'Minimum Viable Product' (MVP) is a term often associated with which delivery style?",
    options: ["Waterfall", "Agile/Iterative", "Big-Bang", "Static"],
    correctAnswer: 1
  },

  // MODULE 4: UML & DESIGN
  {
    id: 31,
    topic: "UML",
    text: "What does UML stand for?",
    options: ["Universal Modeling Language", "Unified Modeling Language", "Unique Modern Logic", "Unified Mobile Link"],
    correctAnswer: 1
  },
  {
    id: 32,
    topic: "UML",
    text: "Which UML diagram provides a high-level view of system functionalities as experienced by external actors?",
    options: ["Class Diagram", "Sequence Diagram", "Use Case Diagram", "State Machine Diagram"],
    correctAnswer: 2
  },
  {
    id: 33,
    topic: "UML",
    text: "Which diagram is considered the 'backbone' of object-oriented modeling, capturing static structure?",
    options: ["Activity Diagram", "Class Diagram", "Collaboration Diagram", "Sequence Diagram"],
    correctAnswer: 1
  },
  {
    id: 34,
    topic: "UML",
    text: "In a Class Diagram, a 'blueprints for objects' refers to:",
    options: ["Attributes", "Methods", "Classes", "Relationships"],
    correctAnswer: 2
  },
  {
    id: 35,
    topic: "UML",
    text: "Which diagram visually narrates how objects interact over time for a particular scenario?",
    options: ["State Machine", "Activity Diagram", "Sequence Diagram", "Object Diagram"],
    correctAnswer: 2
  },
  {
    id: 36,
    topic: "UML",
    text: "Which diagram captures dynamic behavior and workflows, similar to a flowchart?",
    options: ["Class Diagram", "Activity Diagram", "Deployment Diagram", "Structure Chart"],
    correctAnswer: 1
  },
  {
    id: 37,
    topic: "UML",
    text: "Which UML view captures how the different components are implemented on different pieces of hardware?",
    options: ["User's View", "Structural View", "Environmental View", "Behavioral View"],
    correctAnswer: 2
  },
  {
    id: 38,
    topic: "UML",
    text: "The stick person icon in UML represents a/an:",
    options: ["Class", "Actor", "Use Case", "Node"],
    correctAnswer: 1
  },
  {
    id: 39,
    topic: "UML",
    text: "The ellipse in a Use Case diagram represents a/an:",
    options: ["Actor", "Use Case", "Boundary", "Relationship"],
    correctAnswer: 1
  },
  {
    id: 40,
    topic: "UML",
    text: "A Class consists of which three major compartments?",
    options: ["Name, Size, Color", "Name, Attributes, Operations", "ID, Logic, State", "Start, Process, End"],
    correctAnswer: 1
  },

  // MODULE 5: OO CONCEPTS
  {
    id: 41,
    topic: "Object Orientation",
    text: "Which OO pillar bundles data and methods into a single unit and hides the internal state?",
    options: ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
    correctAnswer: 2
  },
  {
    id: 42,
    topic: "Object Orientation",
    text: "Which concept allows a new class to be created based on an existing class?",
    options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    correctAnswer: 1
  },
  {
    id: 43,
    topic: "Object Orientation",
    text: "Polymorphism literally means:",
    options: ["One form", "Many forms", "No form", "Static form"],
    correctAnswer: 1
  },
  {
    id: 44,
    topic: "Object Orientation",
    text: "A class is an abstraction, while a/an ________ is one concrete manifestation of that abstraction.",
    options: ["Interface", "Object", "Package", "Component"],
    correctAnswer: 1
  },
  {
    id: 45,
    topic: "Object Orientation",
    text: "Which design pattern relies on encapsulation and polymorphism to manage object communication without tight coupling?",
    options: ["Factory", "Strategy", "Observer", "Decorator"],
    correctAnswer: 2
  },

  // MODULE 6: TESTING & QUALITY
  {
    id: 46,
    topic: "Testing",
    text: "Which testing is performed by the development team within the organization?",
    options: ["Beta Testing", "Alpha Testing", "Acceptance Testing", "Regression Testing"],
    correctAnswer: 1
  },
  {
    id: 47,
    topic: "Testing",
    text: "Which testing is performed by a friendly set of customers?",
    options: ["Alpha Testing", "System Testing", "Beta Testing", "Unit Testing"],
    correctAnswer: 2
  },
  {
    id: 48,
    topic: "Testing",
    text: "The triplet [I,S,O] (Input, State, Expected Output) defines a/an:",
    options: ["Test Suite", "Test Case", "Test Plan", "Error Seed"],
    correctAnswer: 1
  },
  {
    id: 49,
    topic: "Testing",
    text: "Testing a module in isolation is known as:",
    options: ["Integration Testing", "System Testing", "Unit Testing", "Stress Testing"],
    correctAnswer: 2
  },
  {
    id: 50,
    topic: "Testing",
    text: "Which testing ensures that no new bugs are introduced after an update or fix?",
    options: ["Recovery Testing", "Volume Testing", "Regression Testing", "Usability Testing"],
    correctAnswer: 2
  },
  {
    id: 51,
    topic: "Testing",
    text: "Structural testing is another name for:",
    options: ["Black-box testing", "White-box testing", "Beta testing", "Functional testing"],
    correctAnswer: 1
  },
  {
    id: 52,
    topic: "Testing",
    text: "Which testing evaluates system performance when stressed for short periods?",
    options: ["Confidence testing", "Stress testing", "Documentation testing", "Security testing"],
    correctAnswer: 1
  },
  {
    id: 53,
    topic: "Quality",
    text: "The ISO 9000 standard series was first published in which year?",
    options: ["1977", "1987", "1997", "2007"],
    correctAnswer: 1
  },
  {
    id: 54,
    topic: "Quality",
    text: "Which ISO standard is specifically applicable to software development organizations?",
    options: ["ISO 9001", "ISO 9002", "ISO 9003", "ISO 9004"],
    correctAnswer: 0
  },
  {
    id: 55,
    topic: "Quality",
    text: "SEI CMM Level 1 is often called the ________ level.",
    options: ["Initial/Chaotic", "Repeatable", "Defined", "Optimizing"],
    correctAnswer: 0
  },

  // MODULE 7: PROJECT PLANNING & ESTIMATION
  {
    id: 56,
    topic: "Project Planning",
    text: "Which attribute estimation is considered the first activity in project planning?",
    options: ["Cost Estimation", "Effort Estimation", "Size Estimation", "Scheduling"],
    correctAnswer: 2
  },
  {
    id: 57,
    topic: "Estimation",
    text: "KLOC stands for:",
    options: ["Kilo Lines of Code", "Key Level of Coding", "Kernel Logical Code", "Kilo Logic Operations"],
    correctAnswer: 0
  },
  {
    id: 58,
    topic: "Estimation",
    text: "The COCOMO model was proposed by:",
    options: ["Albrecht", "Royce", "Boehm", "Putnam"],
    correctAnswer: 2
  },
  {
    id: 59,
    topic: "Estimation",
    text: "A Gantt chart is primarily used for:",
    options: ["Risk evaluation", "Resource allocation and scheduling", "Code review", "Cost calculation"],
    correctAnswer: 1
  },
  {
    id: 60,
    topic: "Scheduling",
    text: "In PERT charts, the 'critical path' is the chain of activities that determines the ________ of the project.",
    options: ["Budget", "Duration", "Quality", "Risk"],
    correctAnswer: 1
  },
  {
    id: 61,
    topic: "Project Planning",
    text: "A 'WBS' in software project management stands for:",
    options: ["Web Based System", "Work Breakdown Structure", "Weekly Build Schedule", "Wide Box Software"],
    correctAnswer: 1
  },
  {
    id: 62,
    topic: "Scheduling",
    text: "Which chart uses pessimistic, likely, and optimistic estimates for tasks?",
    options: ["Gantt Chart", "PERT Chart", "Flowchart", "DFD"],
    correctAnswer: 1
  },
  {
    id: 63,
    topic: "Project Planning",
    text: "The technique of staggered planning in stages is known as ________ planning.",
    options: ["Spiral", "Fixed", "Sliding Window", "Waterfall"],
    correctAnswer: 2
  },
  {
    id: 64,
    topic: "Risk Management",
    text: "Risk priority (p) is calculated as P = r * s. What does 'r' represent?",
    options: ["Resource", "Rate", "Likelihood/Probability", "Review"],
    correctAnswer: 2
  },
  {
    id: 65,
    topic: "Risk Management",
    text: "Which risk category includes 'schedule slippage' due to software intangibility?",
    options: ["Technical risk", "Business risk", "Project risk", "Ethical risk"],
    correctAnswer: 2
  },

  // MODULE 8: MAINTENANCE & REUSE
  {
    id: 66,
    topic: "Maintenance",
    text: "Correcting errors that were not discovered during development is called:",
    options: ["Perfective Maintenance", "Adaptive Maintenance", "Corrective Maintenance", "Preventive Maintenance"],
    correctAnswer: 2
  },
  {
    id: 67,
    topic: "Maintenance",
    text: "Porting software to work on a new platform is called:",
    options: ["Perfective Maintenance", "Adaptive Maintenance", "Corrective Maintenance", "System Maintenance"],
    correctAnswer: 1
  },
  {
    id: 68,
    topic: "Maintenance",
    text: "Improving implementation and enhancing features per customer request is called:",
    options: ["Corrective Maintenance", "Adaptive Maintenance", "Perfective Maintenance", "Static Maintenance"],
    correctAnswer: 2
  },
  {
    id: 69,
    topic: "Reuse",
    text: "The ratio of effort spent on development vs maintenance is roughly:",
    options: ["10:90", "40:60", "50:50", "80:20"],
    correctAnswer: 1
  },
  {
    id: 70,
    topic: "Reverse Engineering",
    text: "The process of recovering design and requirements from code analysis is called:",
    options: ["Forward Engineering", "Reverse Engineering", "Re-engineering", "Modularization"],
    correctAnswer: 1
  },
  {
    id: 71,
    topic: "Management",
    text: "According to studies, 90% of execution time is spent in what percentage of instructions?",
    options: ["10%", "50%", "90%", "100%"],
    correctAnswer: 0
  },
  {
    id: 72,
    topic: "Quality",
    text: "Six Sigma aims for no more than how many defects per million opportunities?",
    options: ["3.4", "10", "100", "0.5"],
    correctAnswer: 0
  },
  {
    id: 73,
    topic: "CMM",
    text: "Which CMM level focuses on continuous process improvement using quantitative feedback?",
    options: ["Level 2: Repeatable", "Level 3: Defined", "Level 4: Managed", "Level 5: Optimizing"],
    correctAnswer: 3
  },
  {
    id: 74,
    topic: "Project Planning",
    text: "The 'milestone' should ideally be set every ________ days.",
    options: ["1 to 2", "10 to 15", "30 to 45", "90"],
    correctAnswer: 1
  },
  {
    id: 75,
    topic: "Testing",
    text: "Which testing depends on the internal paths and logic of the code?",
    options: ["Black-Box", "White-Box", "Grey-Box", "Functional"],
    correctAnswer: 1
  },
  {
    id: 76,
    topic: "Programming",
    text: "Adhering to a standard style of coding gives ________ appearances to code written by different engineers.",
    options: ["Random", "Uniform", "Complex", "Unreadable"],
    correctAnswer: 1
  },
  {
    id: 77,
    topic: "Programming",
    text: "As a rule of thumb, there must be at least one comment line for every ________ source lines.",
    options: ["Five", "Three", "Ten", "Two"],
    correctAnswer: 1
  },
  {
    id: 78,
    topic: "Programming",
    text: "The length of any function should not exceed how many source lines to maintain clarity?",
    options: ["10", "100", "50", "5"],
    correctAnswer: 0
  },
  {
    id: 79,
    topic: "Software Design",
    text: "In structured analysis, 'Acension' or 'Exlosion' of a bubble is also called:",
    options: ["Reduction", "Decomposition", "Integration", "Testing"],
    correctAnswer: 1
  },
  {
    id: 80,
    topic: "Software Design",
    text: "The highest degree of cohesion, which is highly expected, is:",
    options: ["Co-incidental", "Functional", "Temporal", "Logical"],
    correctAnswer: 1
  },
  {
    id: 81,
    topic: "Software Design",
    text: "Which type of coupling is considered the 'worst' as one module directly modifies another's content?",
    options: ["Data coupling", "Content coupling", "Control coupling", "Stamp coupling"],
    correctAnswer: 1
  },
  {
    id: 82,
    topic: "Software Engineering",
    text: "Who is primarily responsible for gathered requirement analysis and resolving inconsistencies?",
    options: ["Programmer", "Tester", "System Analyst", "Client"],
    correctAnswer: 2
  },
  {
    id: 83,
    topic: "SDLC",
    text: "The 'Meta Model' which includes all other SDLC models is the:",
    options: ["Waterfall", "Spiral", "Agile", "Prototype"],
    correctAnswer: 1
  },
  {
    id: 84,
    topic: "Computer Systems",
    text: "Which software component printer drivers belong to?",
    options: ["Application Software", "Utilities", "System Software (Device Drivers)", "Firmware"],
    correctAnswer: 2
  },
  {
    id: 85,
    topic: "Architecture",
    text: "In Client-Server architecture, which component renders or processes received information for the user?",
    options: ["Server", "Network", "Client", "Database"],
    correctAnswer: 2
  },
  {
    id: 86,
    topic: "Architecture",
    text: "The communication medium that connects clients and servers is the:",
    options: ["Processor", "Storage", "Network", "OS"],
    correctAnswer: 2
  },
  {
    id: 87,
    topic: "Architecture",
    text: "Cloud computing adopts a ________ model where cloud-based servers provide services.",
    options: ["Peer-to-Peer", "Client-Server", "Monolithic", "Isolated"],
    correctAnswer: 1
  },
  {
    id: 88,
    topic: "Testing",
    text: "Which testing is often called 'Endurance Testing'?",
    options: ["Unit Testing", "Stress Testing", "Usability Testing", "Alpha Testing"],
    correctAnswer: 1
  },
  {
    id: 89,
    topic: "Estimation",
    text: "Function Point (FP) calculation includes: Inputs, Outputs, Inquiries, Files, and:",
    options: ["Colors", "Interfaces", "Lines of code", "Bugs"],
    correctAnswer: 1
  },
  {
    id: 90,
    topic: "Design",
    text: "A 'Data Dictionary' lists all items appearing in which model?",
    options: ["UML Diagram", "DFD Model", "PERT Chart", "Gantt Chart"],
    correctAnswer: 1
  },
  {
    id: 91,
    topic: "Software Engineering",
    text: "Which principle focuses on 'Hiding implementation details'?",
    options: ["Modularity", "Abstraction", "Encapsulation", "Reusability"],
    correctAnswer: 1
  },
  {
    id: 92,
    topic: "Programming",
    text: "The use of 'goto' statements is generally discouraged because it makes programs:",
    options: ["Faster", "Unstructured", "Modular", "Readable"],
    correctAnswer: 1
  },
  {
    id: 93,
    topic: "Management",
    text: "The Rayleigh distribution curve is used to approximate:",
    options: ["Error rates", "Staffing patterns", "Hardware wear-out", "Network latency"],
    correctAnswer: 1
  },
  {
    id: 94,
    topic: "Quality",
    text: "The 'bath tub' shape curve is characteristic of:",
    options: ["Software reliability", "Hardware reliability", "Project budget", "Network speed"],
    correctAnswer: 1
  },
  {
    id: 95,
    topic: "Estimation",
    text: "In the basic COCOMO model, 'Effort' is expressed in which units?",
    options: ["Hours", "Lines of code", "Person-Months (PM)", "Days"],
    correctAnswer: 2
  },
  {
    id: 96,
    topic: "Careers",
    text: "Which software engineering role focuses on the backend logic and database?",
    options: ["Web Designer", "Frontend Developer", "Backend Developer", "Cloud Engineer"],
    correctAnswer: 2
  },
  {
    id: 97,
    topic: "Careers",
    text: "An 'Information Systems Manager' is responsible for managing what?",
    options: ["Only code", "Internal computer systems and networks", "Only designs", "Client relations"],
    correctAnswer: 1
  },
  {
    id: 98,
    topic: "SDLC",
    text: "In the V-Model, 'Unit testing' validates what?",
    options: ["Requirements", "Design", "Code", "Hardware"],
    correctAnswer: 2
  },
  {
    id: 99,
    topic: "Testing",
    text: "Which testing technique requires the program to be executed and its actual behavior recorded?",
    options: ["Static Analysis", "Dynamic Analysis", "Code Inspection", "Code Walkthrough"],
    correctAnswer: 1
  },
  {
    id: 100,
    topic: "Software Engineering",
    text: "The first step in software design is to transform requirements from SRS into:",
    options: ["Executable code", "Suitable architectural form", "Marketing materials", "Legal documents"],
    correctAnswer: 1
  },
  {
    id: 101,
    topic: "Abstraction",
    text: "The principle of abstraction implies that a problem can be simplified by:",
    options: ["Adding more modules", "Omitting irrelevant details", "Increasing lines of code", "Reducing testing time"],
    correctAnswer: 1
  },
  {
    id: 102,
    topic: "Software Engineering",
    text: "Which technique involves dividing a complex problem into several smaller problems that are solved one by one?",
    options: ["Abstraction", "Decomposition", "Encapsulation", "Inheritance"],
    correctAnswer: 1
  },
  {
    id: 103,
    topic: "Need for SE",
    text: "Software engineering is needed because the rate of change in user requirements is:",
    options: ["Low", "Constant", "High", "Zero"],
    correctAnswer: 2
  },
  {
    id: 104,
    topic: "Software Engineering",
    text: "Which of these is a reason why large software projects require a scientific process?",
    options: ["To increase costs", "To manage complexity", "To avoid hiring analyst", "To skip documentation"],
    correctAnswer: 1
  },
  {
    id: 105,
    topic: "Software Design",
    text: "What is the primary goal of the design phase in SDLC?",
    options: ["To write code", "To transform SRS into a structure for implementation", "To find bugs", "To sell the product"],
    correctAnswer: 1
  },
  {
    id: 106,
    topic: "Object Oriented Design",
    text: "In OOD, which element represents a generalized description of an object?",
    options: ["Instance", "Method", "Class", "Attribute"],
    correctAnswer: 2
  },
  {
    id: 107,
    topic: "Encapsulation",
    text: "Encapsulation restricts access to an object's internal state, a concept also known as:",
    options: ["Data revealing", "Information hiding", "Code exposing", "Variable sharing"],
    correctAnswer: 1
  },
  {
    id: 108,
    topic: "Inheritance",
    text: "The 'is-a' or 'is-a-kind-of' relationship in OOD is modeled using:",
    options: ["Aggregation", "Inheritance", "Composition", "Dependency"],
    correctAnswer: 1
  },
  {
    id: 109,
    topic: "Aggregation",
    text: "Aggregation describes a 'has-a' relationship. Which is a stronger version of aggregation where parts are existence-dependent on the whole?",
    options: ["Inheritance", "Generalization", "Composition", "Polymorphism"],
    correctAnswer: 2
  },
  {
    id: 110,
    topic: "Polymorphism",
    text: "Which pillar of OO allows different classes to be treated as instances of the same parent class via a uniform interface?",
    options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
    correctAnswer: 2
  },
  {
    id: 111,
    topic: "UML Diagrams",
    text: "UML diagrams that capture the dynamic behavior and message exchanges between objects are:",
    options: ["Static diagrams", "Interaction diagrams", "Structural diagrams", "Deployment diagrams"],
    correctAnswer: 1
  },
  {
    id: 112,
    topic: "Sequence Diagram",
    text: "In a Sequence Diagram, the vertical dashed line representing the existence of an object over time is called:",
    options: ["Activation Bar", "Message line", "Lifeline", "Focus of Control"],
    correctAnswer: 2
  },
  {
    id: 113,
    topic: "Activity Diagram",
    text: "Which UML modeling element helps to group activities based on who is performing them (e.g., department)?",
    options: ["Decision Node", "Swim lanes", "Fork", "Join"],
    correctAnswer: 1
  },
  {
    id: 114,
    topic: "State Machine",
    text: "Which diagram is based on the finite state machine (FSM) formalism?",
    options: ["Use Case", "Activity", "State Machine (State Chart)", "Class"],
    correctAnswer: 2
  },
  {
    id: 115,
    topic: "Testing",
    text: "Which testing verifies that the software meets its requirement and is 'fit for purpose'?",
    options: ["Verification", "Validation", "Unit Testing", "Code Review"],
    correctAnswer: 1
  },
  {
    id: 116,
    topic: "Testing",
    text: "Black-box testing is also known as ________ testing.",
    options: ["Structural", "Functional", "Logic-based", "Code-level"],
    correctAnswer: 1
  },
  {
    id: 117,
    topic: "Testing",
    text: "Which testing approach partitions the input domain into classes where the program behavior is expected to be similar?",
    options: ["Boundary Value Analysis", "Equivalence Class Partitioning", "Error Seeding", "Mutation Testing"],
    correctAnswer: 1
  },
  {
    id: 118,
    topic: "Testing",
    text: "Boundary Value Analysis focuses on testing at the ________ of input ranges.",
    options: ["Midpoint", "Edges/Boundaries", "Random points", "Averages"],
    correctAnswer: 1
  },
  {
    id: 119,
    topic: "Integration Testing",
    text: "Which integration approach combines all modules in a single step and is only suitable for very small systems?",
    options: ["Top-down", "Bottom-up", "Big-Bang", "Sandwich"],
    correctAnswer: 2
  },
  {
    id: 120,
    topic: "COCOMO",
    text: "In COCOMO, which product category deals with well-understood application programs and small teams?",
    options: ["Semidetached", "Embedded", "Organic", "Dynamic"],
    correctAnswer: 2
  },
  {
    id: 121,
    topic: "COCOMO",
    text: "In COCOMO, 'Embedded' systems are usually:",
    options: ["Strongly coupled to complex hardware", "Simple standalone apps", "Web-based scripts", "Easy to maintain"],
    correctAnswer: 0
  },
  {
    id: 122,
    topic: "Project Scheduling",
    text: "The chain of activities that determines the total duration of a project is known as the:",
    options: ["Slack Path", "Critical Path", "Task Network", "Milestone Sequence"],
    correctAnswer: 1
  },
  {
    id: 123,
    topic: "Quality Management",
    text: "TQM stands for:",
    options: ["Total Qualification Method", "Technical Quality Management", "Total Quality Management", "Top Quarterly Measurement"],
    correctAnswer: 2
  },
  {
    id: 124,
    topic: "CMM",
    text: "Which SEI CMM level is characterized by ad hoc, chaotic activities?",
    options: ["Level 1: Initial", "Level 2: Repeatable", "Level 3: Defined", "Level 4: Managed"],
    correctAnswer: 0
  },
  {
    id: 125,
    topic: "Software Maintenance",
    text: "Software Reengineering is a combination of which two processes?",
    options: ["Design and Code", "Reverse and Forward Engineering", "Testing and Release", "Requirements and Analysis"],
    correctAnswer: 1
  },
  {
    id: 126,
    topic: "Project Planning",
    text: "According to Putnam, optimal staff build-up on a project should follow which curve?",
    options: ["Bell Curve", "Rayleigh Curve", "Exponential Curve", "Linear Growth"],
    correctAnswer: 1
  },
  {
    id: 127,
    topic: "CASE Tools",
    text: "What does CASE stand for in software engineering?",
    options: ["Code And System Environment", "Computer Aided Software Engineering", "Centralized Analysis System", "Complex Application Scripting Engine"],
    correctAnswer: 1
  },
  {
    id: 128,
    topic: "Programming",
    text: "Which guideline suggests avoiding 'too clever' or cryptic code?",
    options: ["Brevity", "Readability", "Portability", "Cost-effectiveness"],
    correctAnswer: 1
  },
  {
    id: 129,
    topic: "Code Review",
    text: "An informal code analysis technique where members simulate execution by hand is:",
    options: ["Code Inspection", "Code Walkthrough", "Unit Testing", "Beta Testing"],
    correctAnswer: 1
  },
  {
    id: 130,
    topic: "Software Documentation",
    text: "Documentation that is provided as part of the source code itself is called:",
    options: ["External Documentation", "Internal Documentation", "System User Manual", "Installation Manual"],
    correctAnswer: 1
  },
  {
    id: 131,
    topic: "UML Views",
    text: "The 'User's View' in UML is primarily captured by which diagram?",
    options: ["Class Diagram", "Sequence Diagram", "Use Case Diagram", "Object Diagram"],
    correctAnswer: 2
  },
  {
    id: 132,
    topic: "Software Engineering",
    text: "Visibility of a software product can be increased by producing and reviewing:",
    options: ["Only code", "Relevant documents during development", "Only the final product", "Marketing ads"],
    correctAnswer: 1
  },
  {
    id: 133,
    topic: "Architecture",
    text: "In distributed computing, tasks are divided between servers (providers) and ________ (requesters).",
    options: ["Processors", "Clients", "Storages", "Networks"],
    correctAnswer: 1
  },
  {
    id: 134,
    topic: "Frameworks",
    text: "Which characteristic means a framework controls the flow of the application and invokes user code?",
    options: ["Extensibility", "Standardization", "Inversion of Control (IoC)", "Scaffolding"],
    correctAnswer: 2
  },
  {
    id: 135,
    topic: "APIs",
    text: "APIs allow different software components to interact using standardized:",
    options: ["Hardware", "Protocols and routines", "Marketing strategies", "Operating manual"],
    correctAnswer: 1
  },
  {
    id: 136,
    topic: "Software Design",
    text: "Top-down design starts with a generalized model and ________ it into components.",
    options: ["Integrates", "Decomposes", "Deletes", "Multiplies"],
    correctAnswer: 1
  },
  {
    id: 137,
    topic: "Software Design",
    text: "Which OOD feature bundles attributes and methods together to hide information?",
    options: ["Polymorphism", "Inheritance", "Encapsulation", "Aggregation"],
    correctAnswer: 2
  },
  {
    id: 138,
    topic: "Software Quality",
    text: "ISO 9001 is a set of guidelines for the ________ process, not the product itself.",
    options: ["Marketing", "Production/Development", "Legal", "Financial"],
    correctAnswer: 1
  },
  {
    id: 139,
    topic: "Software Reliability",
    text: "Mean Time To Failure (MTTF) is the average time between two:",
    options: ["Successful sessions", "Successive failures", "Bug fixes", "Product releases"],
    correctAnswer: 1
  },
  {
    id: 140,
    topic: "Software Metrics",
    text: "Which metric measures the size of a software product based on the number of features and files?",
    options: ["LOC", "Function Point (FP)", "Execution Time", "Bug Count"],
    correctAnswer: 1
  },
  {
    id: 141,
    topic: "SDLC",
    text: "In the Waterfall model, can a phase start before the previous one is finished in the 'ideal' version?",
    options: ["Yes", "No", "Only if it's small", "Only during testing"],
    correctAnswer: 1
  },
  {
    id: 142,
    topic: "UML",
    text: "UML was adopted as a de facto standard in 1997 by which group?",
    options: ["IEEE", "ISO", "Object Management Group (OMG)", "Microsoft"],
    correctAnswer: 2
  },
  {
    id: 143,
    topic: "Computer Systems",
    text: "Which type of software print information for user consumption?",
    options: ["Input", "Output (e.g. Speakers, Monitor)", "Process", "Storage"],
    correctAnswer: 1
  },
  {
    id: 144,
    topic: "Software Specification",
    text: "A detailed description of a software system to be developed that outlines purpose and features is:",
    options: ["SDS", "SRS (Software Requirement Specification)", "WBS", "CPM"],
    correctAnswer: 1
  },
  {
    id: 145,
    topic: "Software evolution",
    text: "Continuously adapting and improving software systems to meet changing user needs is:",
    options: ["Decomposition", "Evolution", "Testing", "Beta"],
    correctAnswer: 1
  },
  {
    id: 146,
    topic: "Software Engineering",
    text: "Which principle focuses on creating components that can be used in multiple projects?",
    options: ["Modularity", "Abstraction", "Reusability", "Maintenance"],
    correctAnswer: 2
  },
  {
    id: 147,
    topic: "Software Design",
    text: "Logical DFD concentrates on ________, while Physical DFD shows implementation.",
    options: ["Hardware", "System process and data flow", "Source code", "Budget"],
    correctAnswer: 1
  },
  {
    id: 148,
    topic: "DFD",
    text: "In a DFD, source and destination of information data are represented by:",
    options: ["Circles", "Rectangles (External Entities)", "Arrows", "Ellipses"],
    correctAnswer: 1
  },
  {
    id: 149,
    topic: "DFD",
    text: "In a DFD, activities and actions taken on data are represented by:",
    options: ["Squares", "Circles or Round-edged rectangles (Process)", "Open-sided rectangles", "Points"],
    correctAnswer: 1
  },
  {
    id: 150,
    topic: "Risk Management",
    text: "Buying insurance for a risky component is a strategy of risk ________.",
    options: ["Avoidance", "Reduction", "Transfer", "Leverage"],
    correctAnswer: 2
  },
  {
    id: 151,
    topic: "Software Quality",
    text: "Which concept refers to a product's 'fitness of purpose'?",
    options: ["Price", "Size", "Quality", "Complexity"],
    correctAnswer: 2
  },
  {
    id: 152,
    topic: "Configuration Management",
    text: "The state of all deliverables at any point of time is called the ________ of the product.",
    options: ["Version", "Revision", "Configuration", "Release"],
    correctAnswer: 2
  },
  {
    id: 153,
    topic: "Configuration Management",
    text: "Which board reviews and certifies changes before they are restored to the baseline?",
    options: ["Development Team", "Client Board", "Change Control Board (CCB)", "Audit Team"],
    correctAnswer: 2
  },
  {
    id: 154,
    topic: "CASE Tools",
    text: "A central repository for CASE tools usually contains a ________.",
    options: ["Budget sheet", "Data dictionary", "Source code only", "User manual"],
    correctAnswer: 1
  },
  {
    id: 155,
    topic: "Software Design",
    text: "Cohesion is a measure of ________ element interaction within a module.",
    options: ["External", "Inter-dependent", "Intra-dependent (internal)", "Random"],
    correctAnswer: 2
  },
  {
    id: 156,
    topic: "Software Design",
    text: "Coupling is a measure of ________ among modules.",
    options: ["Complexity", "Inter-dependability", "Intra-dependability", "Internal logic"],
    correctAnswer: 1
  },
  {
    id: 157,
    topic: "Testing",
    text: "Which kind of testing is performed by the customer after product delivery to decide on acceptance?",
    options: ["Alpha Testing", "Beta Testing", "Acceptance Testing", "Unit Testing"],
    correctAnswer: 2
  },
  {
    id: 158,
    topic: "Estimation",
    text: "In FPs, user commands like 'print-account-balance' are counted as:",
    options: ["Inputs", "Outputs", "Inquiries", "Files"],
    correctAnswer: 2
  },
  {
    id: 159,
    topic: "Software Documentation",
    text: "The main purpose of documented code is to enhance ________.",
    options: ["Execution speed", "Memory usage", "Maintainability and Understandability", "Complexity"],
    correctAnswer: 2
  },
  {
    id: 160,
    topic: "Programming",
    text: "In naming conventions, constant identifiers are usually written in:",
    options: ["All lowercase", "CamelCase", "All capital letters", "Underscore prefix"],
    correctAnswer: 2
  },
  {
    id: 161,
    topic: "Testing",
    text: "The aim of white-box testing is to ensure ________ coverage.",
    options: ["Partial", "Interface-only", "Structural/Path", "User perception"],
    correctAnswer: 2
  },
  {
    id: 162,
    topic: "Software Maintenance",
    text: "Which type of maintenance deals with 'bugs observed while the system is in use'?",
    options: ["Perfective", "Adaptive", "Corrective", "Preventive"],
    correctAnswer: 2
  },
  {
    id: 163,
    topic: "Software Reuse",
    text: "Reuse of parts from previously developed software aims to cut ________.",
    options: ["User count", "Development cost and time", "Documentation lines", "Testing phases"],
    correctAnswer: 1
  },
  {
    id: 164,
    topic: "UML Modeling",
    text: "A 'blueprints of a system' that simplifies reality is called a:",
    options: ["Codebase", "Model", "Library", "Requirement"],
    correctAnswer: 1
  },
  {
    id: 165,
    topic: "UML Modeling",
    text: "Which modeling principle states that 'The best models are connected to reality'?",
    options: ["Principle 1", "Principle 2", "Principle 3", "Principle 4"],
    correctAnswer: 2
  },
  {
    id: 166,
    topic: "SDLC Models",
    text: "Which model is ideal when requirements are incomplete or technical solutions are unclear?",
    options: ["Waterfall", "Prototyping", "V-Model", "Big-Bang"],
    correctAnswer: 1
  },
  {
    id: 167,
    topic: "Software Engineering",
    text: "Engineering is the process of building something that finds a ________ solution to problems.",
    options: ["Expensive", "Complex", "Cost-effective", "Temporary"],
    correctAnswer: 2
  },
  {
    id: 168,
    topic: "Software Engineering",
    text: "The 'Contemporary' view of software development takes a/an ________ perspective.",
    options: ["Algorithmic", "Object-oriented", "Procedural", "Linear"],
    correctAnswer: 1
  },
  {
    id: 169,
    topic: "Object Orientation",
    text: "Which pillar involves 'wrapping up data and functions into a single unit'?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    correctAnswer: 1
  },
  {
    id: 170,
    topic: "UML Things",
    text: "Which structural thing is a society of roles working together to provide cooperative behavior?",
    options: ["Class", "Interface", "Collaboration", "Use Case"],
    correctAnswer: 2
  },
  {
    id: 171,
    topic: "UML Things",
    text: "Graphically, a collaboration is rendered as an ellipse with ________ lines.",
    options: ["Solid", "Dashed", "Heavy", "Double"],
    correctAnswer: 1
  },
  {
    id: 172,
    topic: "UML Adornments",
    text: "What describes the explanatory parts of UML models like notes or comments?",
    options: ["Structural things", "Behavioral things", "Annotational things", "Grouping things"],
    correctAnswer: 2
  },
  {
    id: 173,
    topic: "UML Relationships",
    text: "Which relationship is a semantic connection where a change to one thing may affect another?",
    options: ["Association", "Dependency", "Generalization", "Realization"],
    correctAnswer: 1
  },
  {
    id: 174,
    topic: "UML Relationships",
    text: "Generalization is denoted by a solid line with a ________ head pointing to the parent.",
    options: ["Filled arrow", "Hollow arrow", "Diamond", "Dot"],
    correctAnswer: 1
  },
  {
    id: 175,
    topic: "UML Diagrams",
    text: "Which diagram address the static design view or static process view?",
    options: ["Sequence Diagram", "Collaboration Diagram", "Object Diagram", "Activity Diagram"],
    correctAnswer: 2
  },
  {
    id: 176,
    topic: "UML Diagrams",
    text: "Structural Diagrams are classification of ________ diagrams.",
    options: ["Dynamic", "Static", "Interactive", "Experimental"],
    correctAnswer: 1
  },
  {
    id: 177,
    topic: "UML Messages",
    text: "If a sender object continues executing while the target is processing the message, it is a/an:",
    options: ["Simple Message", "Synchronous Message", "Asynchronous Message", "Self Message"],
    correctAnswer: 2
  },
  {
    id: 178,
    topic: "UML Messages",
    text: "If a sender object waits for a reply, it is a/an ________ message.",
    options: ["Simple", "Synchronous", "Asynchronous", "Return"],
    correctAnswer: 1
  },
  {
    id: 179,
    topic: "Testing",
    text: "Which testing relies on 'walking through' the code without executing it?",
    options: ["Dynamic Testing", "Static Testing (e.g. Code Walkthrough)", "Beta Testing", "System Testing"],
    correctAnswer: 1
  },
  {
    id: 180,
    topic: "Management",
    text: "In WBS, each activity is recursively decomposed until it requires approximately ________ to develop.",
    options: ["1 day", "2 weeks (10-15 days)", "1 month", "1 quarter"],
    correctAnswer: 1
  },
  {
    id: 181,
    topic: "Estimation",
    text: "Which metric is the 'weighted sum' of Inputs, Outputs, Inquiries, Files, and Interfaces?",
    options: ["UFP (Unadjusted Function Point)", "TCF", "DI", "KLOC"],
    correctAnswer: 0
  },
  {
    id: 182,
    topic: "Estimation",
    text: "TCF (Technical Complexity Factor) ranges from ________ to 1.35.",
    options: ["0.00", "0.50", "0.65", "1.00"],
    correctAnswer: 2
  },
  {
    id: 183,
    topic: "Estimation",
    text: "Delphi cost estimation involves a coordinator and a group of experts who estimate ________.",
    options: ["Publicly", "Anonymously", "Only via code", "Once per month"],
    correctAnswer: 1
  },
  {
    id: 184,
    topic: "Project Scheduling",
    text: "A critical task is one with a ________ slack time.",
    options: ["Maximum", "Random", "Zero", "Positive only"],
    correctAnswer: 2
  },
  {
    id: 185,
    topic: "Quality",
    text: "Which CMM Level is characterized by established basic project management (Repeatable)?",
    options: ["Level 1", "Level 2", "Level 3", "Level 4"],
    correctAnswer: 1
  },
  {
    id: 186,
    topic: "Management",
    text: "Which team structure features a senior engineer who verifies and integrates all products?",
    options: ["Democratic", "Chief Programmer", "Mixed Control", "External"],
    correctAnswer: 1
  },
  {
    id: 187,
    topic: "Quality",
    text: "Corrective maintenance is necessary to rectify ________ observed while system is in use.",
    options: ["New features", "Bugs", "Documentation errors", "Hardware upgrades"],
    correctAnswer: 1
  },
  {
    id: 188,
    topic: "UML Modeling",
    text: "What serves as the 'lingua franca' for developers to articulate requirements?",
    options: ["C++", "Java", "UML", "Python"],
    correctAnswer: 2
  },
  {
    id: 189,
    topic: "Software Design",
    text: "In Structure Charts, rectangular boxes represent a/an:",
    options: ["Entity", "Module", "Data Flow", "Loop"],
    correctAnswer: 1
  },
  {
    id: 190,
    topic: "Software Design",
    text: "Ideally, ________ coupling is considered to be the best for software quality.",
    options: ["Maximum", "Average", "No/Minimal", "Content"],
    correctAnswer: 2
  },
  {
    id: 191,
    topic: "Software Maintenance",
    text: "Annual Change Traffic (ACT) is a formula used to estimate:",
    options: ["Total users", "Maintenance cost", "Release frequency", "Bug density"],
    correctAnswer: 1
  },
  {
    id: 192,
    topic: "Project Planning",
    text: "The main aim of a feasibility study is to determine if product development is ________.",
    options: ["Fun", "Fast", "Financially and technically viable", "Marketed well"],
    correctAnswer: 2
  },
  {
    id: 193,
    topic: "Software Specification",
    text: "SRS serves as a ________ for developers and a reference for stakeholders.",
    options: ["Contract", "Code library", "Blueprint", "Budget"],
    correctAnswer: 2
  },
  {
    id: 194,
    topic: "Estimation",
    text: "LOC metric correlates poorly with quality because larger code size does NOT always imply:",
    options: ["More features", "Better quality or higher efficiency", "More developers", "More bugs"],
    correctAnswer: 1
  },
  {
    id: 195,
    topic: "Testing",
    text: "Which testing tool helps localized error as they occur in integrated modules?",
    options: ["Big-Bang", "Incremental Integration", "Alpha", "Beta"],
    correctAnswer: 1
  },
  {
    id: 196,
    topic: "Quality",
    text: "Software is ________ in nature making it difficult to control and manage.",
    options: ["Tangible", "Intangible", "Metal", "Liquid"],
    correctAnswer: 1
  },
  {
    id: 197,
    topic: "Configuration Management",
    text: "When an engineer takes a private copy of a module, it is a ________ operation.",
    options: ["Reserve", "Restore", "Delete", "Copy"],
    correctAnswer: 0
  },
  {
    id: 198,
    topic: "CASE Tools",
    text: "CASE repositories ensure consistent definition of ________ and elementary data items.",
    options: ["Binary", "Composite", "Hidden", "Unused"],
    correctAnswer: 1
  },
  {
    id: 199,
    topic: "Programming",
    text: "Meaningful variable names are considered ________ helpful than code commenting in many cases.",
    options: ["Less", "Equally", "More", "Not"],
    correctAnswer: 2
  },
  {
    id: 200,
    topic: "Testing",
    text: "Which testing technique was pioneered by IBM and focuses on 'zero-defect software'?",
    options: ["Black-room", "Clean Room Testing", "Dark-box", "System Test"],
    correctAnswer: 1
  },
  {
    id: 201,
    topic: "DFD Balancing",
    text: "The data that flow into or out of a bubble must ________ the data flow at the next level of DFD.",
    options: ["Contrast", "Match", "Double", "Reverse"],
    correctAnswer: 1
  },
  {
    id: 202,
    topic: "DFD Components",
    text: "In a DFD, 'Data Storage' is represented by which variant?",
    options: ["Circle", "Open-sided rectangle", "Solid square", "Pointing arrow"],
    correctAnswer: 1
  },
  {
    id: 203,
    topic: "Software Design",
    text: "Which type of DFD shows how the data flow is actually implemented in the system?",
    options: ["Logical DFD", "Physical DFD", "Conceptual DFD", "Static DFD"],
    correctAnswer: 1
  },
  {
    id: 204,
    topic: "DFD Mistakes",
    text: "A common mistake in DFD construction is attempting to represent ________ information.",
    options: ["Data flow", "External entity", "Control", "Storage"],
    correctAnswer: 2
  },
  {
    id: 205,
    topic: "DFD Bubbles",
    text: "The bubble in the 'Context Diagram' (Level 0) is usually annotated with a:",
    options: ["Verb", "Noun (System Name)", "Adjective", "Pronoun"],
    correctAnswer: 1
  },
  {
    id: 206,
    topic: "DPD Bubbles",
    text: "In levels other than the context diagram, bubbles are usually annotated with:",
    options: ["Nouns", "Verbs", "Numbers only", "Icons only"],
    correctAnswer: 1
  },
  {
    id: 207,
    topic: "Halstead Metric",
    text: "In Halstead’s metrics, 'η2' (eta 2) represents the number of unique ________.",
    options: ["Operators", "Operands", "Tokens", "Variables"],
    correctAnswer: 1
  },
  {
    id: 208,
    topic: "Halstead Metric",
    text: "Halstead's 'Program Volume' (V) represents the size of the program approximately compensating for the:",
    options: ["Hardware used", "Programming language used", "Team size", "Number of bugs"],
    correctAnswer: 1
  },
  {
    id: 209,
    topic: "Halstead Metric",
    text: "Program level (L) is calculated as L = V*/V. A higher level implies a higher level of ________.",
    options: ["Complexity", "Abstraction", "Error", "Lines of code"],
    correctAnswer: 1
  },
  {
    id: 210,
    topic: "Estimation",
    text: "The 'programmer’s time' (T) in Halstead's science is estimated using a speed constant (S) usually valued at:",
    options: ["1", "5", "10", "18"],
    correctAnswer: 3
  },
  {
    id: 211,
    topic: "COCOMO",
    text: "Which COCOMO model version uses 15 cost drivers (multipliers) to refine estimates?",
    options: ["Basic COCOMO", "Intermediate COCOMO", "Complete COCOMO", "Advanced COCOMO"],
    correctAnswer: 1
  },
  {
    id: 212,
    topic: "COCOMO",
    text: "Cost drivers in Intermediate COCOMO are classified based on Product, Computer, Personnel, and ________.",
    options: ["Client", "Market", "Development Environment", "Office Size"],
    correctAnswer: 2
  },
  {
    id: 213,
    topic: "Staffing",
    text: "Norden-Putnam work relates the number of delivered lines of code to the ________ and time.",
    options: ["Cost", "Effort", "Bugs", "Hardware"],
    correctAnswer: 1
  },
  {
    id: 214,
    topic: "Staffing",
    text: "In staffing, a 'constant level of manpower' throughout a project often leads to ________.",
    options: ["High efficiency", "Wastage of effort and increase in cost", "Faster delivery", "Lower bugs"],
    correctAnswer: 1
  },
  {
    id: 215,
    topic: "Project Scheduling",
    text: "A 'Milestone' is reached when a project task is successfully ________ and reviewed.",
    options: ["Started", "Produced", "Simplified", "Deleted"],
    correctAnswer: 1
  },
  {
    id: 216,
    topic: "Gantt Chart",
    text: "In enhanced Gantt charts for SE, the 'white part' of the bar often shows the ________.",
    options: ["Time taken", "Slack time", "Total cost", "Budget used"],
    correctAnswer: 1
  },
  {
    id: 217,
    topic: "ISO Standards",
    text: "Which ISO standard applies to organizations involved ONLY in installation and testing?",
    options: ["ISO 9001", "ISO 9002", "ISO 9003", "ISO 9004"],
    correctAnswer: 2
  },
  {
    id: 218,
    topic: "CMM Maturity",
    text: "At which CMM level are processes for both management and development defined and documented?",
    options: ["Level 1", "Level 2", "Level 3: Defined", "Level 4"],
    correctAnswer: 2
  },
  {
    id: 219,
    topic: "CMM Maturity",
    text: "Which CMM level focus on 'quantitative process metrics'?",
    options: ["Initial", "Repeatable", "Defined", "Managed"],
    correctAnswer: 3
  },
  {
    id: 220,
    topic: "CMM Maturity",
    text: "Key Process Areas (KPAs) for 'Repeatable' level include Project Planning and ________ Management.",
    options: ["Change", "Configuration", "Market", "Financial"],
    correctAnswer: 1
  },
  {
    id: 221,
    topic: "Personal Software Process",
    text: "PSP is a scaled-down version of the industrial software process suitable for ________ use.",
    options: ["Team", "Individual", "Automated", "Client"],
    correctAnswer: 1
  },
  {
    id: 222,
    topic: "Six Sigma",
    text: "The DMAIC process in Six Sigma stands for Define, Measure, Analyze, Improve, and ________.",
    options: ["Control", "Complete", "Code", "Create"],
    correctAnswer: 0
  },
  {
    id: 223,
    topic: "Software Maintenance",
    text: "Which maintainability aspect determines how easy it is to port software to a new machine?",
    options: ["Portability", "Correctability", "Functionality", "Usability"],
    correctAnswer: 0
  },
  {
    id: 224,
    topic: "Software Maintenance",
    text: "A software product would continue to fail until the ________ is tracked down and the design or code is changed.",
    options: ["User", "Expert", "Error", "Hardware"],
    correctAnswer: 2
  },
  {
    id: 225,
    topic: "Software Reuse",
    text: "The most basic and abstract development artifact that can be reused is ________.",
    options: ["Code", "Design", "Knowledge", "Test case"],
    correctAnswer: 2
  },
  {
    id: 226,
    topic: "Domain Analysis",
    text: "The aim of domain analysis is to identify ________ for a problem domain.",
    options: ["Bugs", "Reusable components", "Costs", "Deadlines"],
    correctAnswer: 1
  },
  {
    id: 227,
    topic: "Testing Strategies",
    text: "Which testing strategy is considered 'stronger' if it detects all errors of another and some more?",
    options: ["Complementary", "Stronger", "Equal", "Subordinate"],
    correctAnswer: 1
  },
  {
    id: 228,
    topic: "Testing Strategies",
    text: "Structural testing is focused on the ________ of the program.",
    options: ["External functions", "Internal path and logic", "User interface", "Market fit"],
    correctAnswer: 1
  },
  {
    id: 229,
    topic: "Software Design",
    text: "Which cohesion type is 'highly expected' and represents the highest degree?",
    options: ["Sequential", "Functional", "Communicational", "Procedural"],
    correctAnswer: 1
  },
  {
    id: 230,
    topic: "Software Design",
    text: "When two modules share a common data structure, it is ________ coupling.",
    options: ["Common", "Stamp", "Data", "Control"],
    correctAnswer: 1
  },
  {
    id: 231,
    topic: "Software Design",
    text: "When one module decides the function of another or changes its flow, it is ________ coupled.",
    options: ["Data", "Control", "Content", "Stamp"],
    correctAnswer: 1
  },
  {
    id: 232,
    topic: "Programming",
    text: "Descriptive variable names improve ________ of the codebase.",
    options: ["Size", "Readability and Understandability", "Speed", "Compiler errors"],
    correctAnswer: 1
  },
  {
    id: 233,
    topic: "SDLC",
    text: "Iterative Waterfall model provides ________ paths for error correction.",
    options: ["One-way", "Feedback", "Random", "Binary"],
    correctAnswer: 1
  },
  {
    id: 234,
    topic: "Quality",
    text: "Which of these qualities is NOT usually associated with ISO 9001?",
    options: ["Management responsibility", "Design control", "Manual code generation", "Testing and inspection"],
    correctAnswer: 2
  },
  {
    id: 235,
    topic: "Software Products",
    text: "Product specification is owned by the ________ in 'Generic Software'.",
    options: ["Customer", "Developer", "Tester", "Manager"],
    correctAnswer: 1
  },
  {
    id: 236,
    topic: "Computer Systems",
    text: "Which processor translates 'Statement by statement'?",
    options: ["Compiler", "Interpreter", "Assembler", "Linker"],
    correctAnswer: 1
  },
  {
    id: 237,
    topic: "UML Diagrams",
    text: "What describes the static structure of a system in UML?",
    options: ["Sequence Diagram", "Class Diagram", "Activity Diagram", "Use Case Diagram"],
    correctAnswer: 1
  },
  {
    id: 238,
    topic: "Project Planning",
    text: "The earliest start (ES) time of a task is the ________ of all paths from start to the task.",
    options: ["Minimum", "Average", "Maximum", "Sum"],
    correctAnswer: 2
  },
  {
    id: 239,
    topic: "Testing",
    text: "A 'stub' is a dummy procedure used during ________ testing.",
    options: ["System", "Unit/Integration", "Alpha", "Beta"],
    correctAnswer: 1
  },
  {
    id: 240,
    topic: "Quality",
    text: "Which quality factor allows a system to evolve to meet changing demands?",
    options: ["Efficiency", "Maintainability", "Usability", "Correctness"],
    correctAnswer: 1
  },
  {
    id: 241,
    topic: "Software Engineering",
    text: "IEEE defines Software Engineering as a ________, disciplined, quantifiable approach.",
    options: ["Systematic", "Manual", "Theoretical", "Chaotic"],
    correctAnswer: 0
  },
  {
    id: 242,
    topic: "Computer Systems",
    text: "Which storage is used for information currently in use by the CPU?",
    options: ["Secondary", "HDD", "RAM", "DVD"],
    correctAnswer: 2
  },
  {
    id: 243,
    topic: "SDLC Models",
    text: "Which model uses 'Quadrants' to manage risk?",
    options: ["Agile", "Spiral", "Waterfall", "V-Model"],
    correctAnswer: 1
  },
  {
    id: 244,
    topic: "Testing",
    text: "Regression testing should be carried out after ________.",
    options: ["Initial release", "Every round of error-fixing", "Documentation", "Hiring"],
    correctAnswer: 1
  },
  {
    id: 245,
    topic: "Software Maintenance",
    text: "Maintenance efforts require about what percentage of the total life cycle cost?",
    options: ["10%", "30%", "60%", "90%"],
    correctAnswer: 2
  },
  {
    id: 246,
    topic: "Object Orientation",
    text: "A 'family tree' is a real-world analogy for which OO pillar?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    correctAnswer: 2
  },
  {
    id: 247,
    topic: "UML Modeling",
    text: "UML models can be used for Analysis, Specification, Code generation, and ________.",
    options: ["Selling", "Design", "Marketing", "Physical manufacturing"],
    correctAnswer: 1
  },
  {
    id: 248,
    topic: "Software Quality",
    text: "ISO stands for:",
    options: ["International Standards Organization", "Interactive System Office", "Internal Specification Order", "Integrated Software Origin"],
    correctAnswer: 0
  },
  {
    id: 249,
    topic: "Testing",
    text: "Alpha testing is performed by which team?",
    options: ["The customer", "A friendly group of users", "The development team", "Third-party reviewers"],
    correctAnswer: 2
  },
  {
    id: 250,
    topic: "Testing",
    text: "Beta testing is performed by which group?",
    options: ["The developers", "A friendly set of customers", "Only managers", "The system analysis team"],
    correctAnswer: 1
  },
  {
    id: 251,
    topic: "Requirement Engineering",
    text: "The goal of requirement engineering is to develop and maintain which document?",
    options: ["SDP", "WBS", "SRS (System Requirements Specification)", "CPM"],
    correctAnswer: 2
  },
  {
    id: 252,
    topic: "UML Use Case",
    text: "Ellipses in UML represent which element?",
    options: ["Actors", "Classes", "Use Cases", "Notes"],
    correctAnswer: 2
  },
  {
    id: 253,
    topic: "UML Class Diagram",
    text: "Solid outline rectangles in UML represent what?",
    options: ["States", "Actors", "Classes", "Packages"],
    correctAnswer: 2
  },
  {
    id: 254,
    topic: "Halstead",
    text: "Effort (E) in Halstead metrics is calculated as:",
    options: ["E = V/L", "E = V * L", "E = L / V", "E = N1 + N2"],
    correctAnswer: 0
  },
  {
    id: 255,
    topic: "COCOMO",
    text: "Kilo Lines of Code (KLOC) is the primary input for size in which model?",
    options: ["Function Point", "COCOMO", "Halstead", "PERT"],
    correctAnswer: 1
  },
  {
    id: 256,
    topic: "Management",
    text: "Which team structure encourages 'egoless programming'?",
    options: ["Chief Programmer", "Democratic", "Mixed", "Corporate"],
    correctAnswer: 1
  },
  {
    id: 257,
    topic: "Quality",
    text: "Which CMM level focuses on 'defect prevention'?",
    options: ["Level 2", "Level 3", "Level 4", "Level 5: Optimizing"],
    correctAnswer: 3
  },
  {
    id: 258,
    topic: "Software Reuse",
    text: "Mathematical libraries are an example of successful ________ reuse.",
    options: ["Hardware", "Module", "Knowledge", "Design"],
    correctAnswer: 1
  },
  {
    id: 259,
    topic: "Software Maintenance",
    text: "Porting code to a new operating system is a task of ________ maintenance.",
    options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
    correctAnswer: 1
  },
  {
    id: 260,
    topic: "Software Engineering",
    text: "What aims to minimize software product’s failure and avoid over-budgeting?",
    options: ["Hacker culture", "Software Engineering", "Random coding", "Pure documentation"],
    correctAnswer: 1
  },
  {
    id: 261,
    topic: "UML Diagrams",
    text: "The diagram portraying object interactions over time is the:",
    options: ["Collaboration", "Sequence", "Class", "Object"],
    correctAnswer: 1
  },
  {
    id: 262,
    topic: "Gantt Charts",
    text: "Who is the developer after whom Gantt charts are named?",
    options: ["John Gantt", "Henry Gantt", "Winston Royce", "Barry Boehm"],
    correctAnswer: 1
  },
  {
    id: 263,
    topic: "ISO 9000",
    text: "ISO 9002 was not applicable to software development because it focused on industries that ________ from external sources.",
    options: ["Only sell", "Only buy designs and manufacture", "Only test", "Only manage"],
    correctAnswer: 1
  },
  {
    id: 264,
    topic: "CMM",
    text: "Opportunity to repeat a process exists when a company produces a ________ of products.",
    options: ["Single random item", "Family", "Different types", "Large quantity of one"],
    correctAnswer: 1
  },
  {
    id: 265,
    topic: "UML Behavior",
    text: "What connects various elements to illustrate the 'path of control' in an activity diagram?",
    options: ["Notes", "Flows", "Lifelines", "Messages"],
    correctAnswer: 1
  },
  {
    id: 266,
    topic: "UML State",
    text: "What defines conditions an object can be in within a state machine diagram?",
    options: ["Transitions", "Actions", "States", "Events"],
    correctAnswer: 2
  },
  {
    id: 267,
    topic: "Software Quality",
    text: "The modern view of quality includes Portability, Usability, Reusability, Correctness, and ________.",
    options: ["Price", "Maintainability", "Weight", "Size"],
    correctAnswer: 1
  },
  {
    id: 268,
    topic: "Testing",
    text: "Exhaustive testing of non-trivial systems is generally ________.",
    options: ["Required", "Impossible/Impractical", "Easy", "Periodic"],
    correctAnswer: 1
  },
  {
    id: 269,
    topic: "Configuration Management",
    text: "SCCS and RCS are popular configuration management tools for ________ systems.",
    options: ["Windows", "UNIX", "MacOS", "Android"],
    correctAnswer: 1
  },
  {
    id: 270,
    topic: "Programming",
    text: "Lengthy functions are likely to have a ________ number of bugs.",
    options: ["Smaller", "Equal", "Disproportionately larger", "Zero"],
    correctAnswer: 2
  },
  {
    id: 271,
    topic: "Abstraction",
    text: "Abstraction is a powerful way of reducing the ________ of a problem.",
    options: ["Cost", "Complexity", "Lines of code", "Size"],
    correctAnswer: 1
  },
  {
    id: 272,
    topic: "Testing",
    text: "Which testing verifies system conformance with 'nonfunctional' requirements?",
    options: ["Functionality testing", "Performance testing", "Unit testing", "Logic testing"],
    correctAnswer: 1
  },
  {
    id: 273,
    topic: "Maintenance",
    text: "The ratio of development effort to maintenance effort is approximately:",
    options: ["10:90", "40:60", "20:80", "50:50"],
    correctAnswer: 1
  },
  {
    id: 274,
    topic: "Risk Management",
    text: "Which category includes Build failure, Budget issues, and schedule slippage?",
    options: ["Project risks", "Technical risks", "Business risks", "Ethical risks"],
    correctAnswer: 0
  },
  {
    id: 275,
    topic: "Risk Management",
    text: "Risk leverage is calculated as (risk exposure before reduction – risk exposure after reduction) / ________.",
    options: ["Total cost", "Cost of reduction", "Number of risks", "Likelihood"],
    correctAnswer: 1
  },
  {
    id: 276,
    topic: "UML Modeling",
    text: "What is a 'simplification of reality' that provides blueprints?",
    options: ["A flowchart", "A model", "A script", "A database"],
    correctAnswer: 1
  },
  {
    id: 277,
    topic: "Object Orientation",
    text: "Which pillar is described as a 'capsule that contains medicine'? (Real-world analogy)",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    correctAnswer: 0
  },
  {
    id: 278,
    topic: "UML Diagrams",
    text: "Which model addresses the 'Static Deployment View'?",
    options: ["Sequence", "Deployment Diagram", "Collaboration", "Class"],
    correctAnswer: 1
  },
  {
    id: 279,
    topic: "UML Messages",
    text: "A ________ message shows how control passed without communication details.",
    options: ["Synchronous", "Asynchronous", "Simple", "Reflexive"],
    correctAnswer: 2
  },
  {
    id: 280,
    topic: "Activity Diagram",
    text: "A point where a flow splits into several mutually exclusive guarded flows is a ________.",
    options: ["Synchronization bar", "Fork", "Decision Box", "Join"],
    correctAnswer: 2
  },
  {
    id: 281,
    topic: "UML Rules",
    text: "Which rule involves 'What you can call things, relationships, and diagrams'?",
    options: ["Scope", "Names", "Visibility", "Execution"],
    correctAnswer: 1
  },
  {
    id: 282,
    topic: "Configuration Management",
    text: "Changes stored in SCCS/RCS to transform a file to the next version are called ________.",
    options: ["Additions", "Deltas", "Diffs", "Updates"],
    correctAnswer: 1
  },
  {
    id: 283,
    topic: "SDLC Models",
    text: "Which model was propounded by Dr. Chuck Morris and Dr. Tony Crawford?",
    options: ["Agile", "Waterfall", "JAD (Joint Application Development)", "Spiral"],
    correctAnswer: 2
  },
  {
    id: 284,
    topic: "UML Diagrams",
    text: "Which diagram is based on the event diagram of Odell?",
    options: ["Class", "Sequence", "Activity Diagram", "Use Case"],
    correctAnswer: 2
  },
  {
    id: 285,
    topic: "Software Maintenance",
    text: "A software system hard to maintain due to poor documentation or spaghetti code is a ________.",
    options: ["Modern system", "Legacy system", "Beta version", "Prototype"],
    correctAnswer: 1
  },
  {
    id: 286,
    topic: "Testing",
    text: "Which term describes a manifestation of an error (defect or bug)?",
    options: ["Failure", "Fault", "Logic", "State"],
    correctAnswer: 0
  },
  {
    id: 287,
    topic: "Configuration Management",
    text: "Restoring a changed module to the system configuration REQUIRES permission from the ________.",
    options: ["Project Manager only", "Developer", "Change Control Board (CCB)", "Client"],
    correctAnswer: 2
  },
  {
    id: 288,
    topic: "Management",
    text: "Which KPA is found at CMM Level 4?",
    options: ["Software Project Planning", "Training Program", "Quantitative Process Metrics", "Defect Prevention"],
    correctAnswer: 2
  },
  {
    id: 289,
    topic: "Programming",
    text: "The ratio of coding hours for the worst vs best programmers can be as high as ________.",
    options: ["1:2", "1:10", "1:25", "1:100"],
    correctAnswer: 2
  },
  {
    id: 290,
    topic: "Quality Management",
    text: "The move from product assurance to process assurance is part of the ________ of quality systems.",
    options: ["Stagnation", "Evolution", "Downgrade", "Simplification"],
    correctAnswer: 1
  },
  {
    id: 291,
    topic: "Testing",
    text: "Functional testing is another name for ________ testing.",
    options: ["White-box", "Black-box", "Glass-box", "Code-level"],
    correctAnswer: 1
  },
  {
    id: 292,
    topic: "UML Components",
    text: "A physical and replaceable part of a system that conforms to interfaces is a/an ________.",
    options: ["Node", "Component", "Active Class", "Collaboration"],
    correctAnswer: 1
  },
  {
    id: 293,
    topic: "SDLC Models",
    text: "The 'Waterfall' model is characterized as simple and ________.",
    options: ["Realistic", "Idealistic", "Costly", "Rapid"],
    correctAnswer: 1
  },
  {
    id: 294,
    topic: "Software Design",
    text: "Which level of design deals with the logical structure of modules and their interfaces?",
    options: ["Architectural", "High-level", "Detailed Design", "Conceptual"],
    correctAnswer: 2
  },
  {
    id: 295,
    topic: "Configuration Management",
    text: "A configuration control tool does NOT allow a developer to replace a reserved object without ________.",
    options: ["Paying", "Authorization from CCB", "Testing", "Resigning"],
    correctAnswer: 1
  },
  {
    id: 296,
    topic: "Requirement Engineering",
    text: "System users and their expectations are identified during ________.",
    options: ["Coding", "Requirement Elicitation", "Maintenance", "Beta testing"],
    correctAnswer: 1
  },
  {
    id: 297,
    topic: "Testing",
    text: "Acceptance testing is the final step before ________.",
    options: ["Design", "Deployment", "Requirement gathering", "Alpha testing"],
    correctAnswer: 1
  },
  {
    id: 298,
    topic: "Estimation",
    text: "Which metric is theweighted sum of problem characteristics?",
    options: ["UFP", "KLOC", "Bug Count", "Team Size"],
    correctAnswer: 0
  },
  {
    id: 299,
    topic: "Testing",
    text: "In testing, 'Failure' is the ________ of an error.",
    options: ["Cause", "Manifestation", "Definition", "Correction"],
    correctAnswer: 1
  },
  {
    id: 300,
    topic: "Legacy Systems",
    text: "Spaghetti code with ugly control structure is common in ________ products.",
    options: ["New", "Legacy", "Prototype", "Generic"],
    correctAnswer: 1
  },
  {
    id: 301,
    topic: "UML Diagrams",
    text: "Which diagram is an interaction diagram that emphasizes the structural organization of objects?",
    options: ["Sequence", "Collaboration", "Statechart", "Activity"],
    correctAnswer: 1
  },
  {
    id: 302,
    topic: "UML Modeling",
    text: "Every object has which three characteristics?",
    options: ["Name, Size, Type", "Identity, State, and Behavior", "Color, Location, Speed", "Code, Logic, Data"],
    correctAnswer: 1
  },
  {
    id: 303,
    topic: "Testing",
    text: "White-box testing is also called ________ testing.",
    options: ["Functional", "Structural", "Acceptance", "End-user"],
    correctAnswer: 1
  },
  {
    id: 304,
    topic: "Software Characteristics",
    text: "Budget, Usability, Efficiency, and Correctness are part of ________ characteristics.",
    options: ["Operational", "Transitional", "Maintenance", "Generic"],
    correctAnswer: 0
  },
  {
    id: 305,
    topic: "Software Characteristics",
    text: "Portability, Reusability, and Adaptability are part of ________ characteristics.",
    options: ["Operational", "Transitional", "Maintenance", "Financial"],
    correctAnswer: 1
  },
  {
    id: 306,
    topic: "Computer Systems",
    text: "Which type of software is developed for specific tasks for users?",
    options: ["System Software", "Application Software", "Kernel", "BIOS"],
    correctAnswer: 1
  },
  {
    id: 307,
    topic: "UML Views",
    text: "The 'Environmental View' in UML models component implementation on ________.",
    options: ["Software", "Hardware", "Database", "Client browsers"],
    correctAnswer: 1
  },
  {
    id: 308,
    topic: "Testing",
    text: "Testing in the large refers to ________ testing.",
    options: ["Unit", "System", "Manual", "Code review"],
    correctAnswer: 1
  },
  {
    id: 309,
    topic: "Software Reuse",
    text: "Creation, Indexing, Searching, and Adaptation are basic issues in ________.",
    options: ["Testing", "Software Reuse Program", "Configuration", "Market research"],
    correctAnswer: 1
  },
  {
    id: 310,
    topic: "Quality",
    text: "ISO 9003 applies to organizations involved only in ________.",
    options: ["Design", "Manufacturing", "Installation and Testing", "Sales"],
    correctAnswer: 2
  },
  {
    id: 311,
    topic: "UML Extensibility",
    text: "Which mechanism allows you to create 'new kinds of building blocks' from existing ones?",
    options: ["Tagged Value", "Constraint", "Stereotype", "Note"],
    correctAnswer: 2
  },
  {
    id: 312,
    topic: "UML Extensibility",
    text: "Which mechanism extends the semantics of a UML building block by adding new rules?",
    options: ["Stereotype", "Tagged Value", "Constraint", "Adornment"],
    correctAnswer: 2
  },
  {
    id: 313,
    topic: "SDLC",
    text: "Successful completion of a step leading to the next step is the ________ model.",
    options: ["Spiral", "Agile", "Waterfall", "RAD"],
    correctAnswer: 2
  },
  {
    id: 314,
    topic: "Testing",
    text: "Volume testing checks if ________ have been designed to succeed in extraordinary situations.",
    options: ["User accounts", "Data structures", "Hardware cables", "Office layouts"],
    correctAnswer: 1
  },
  {
    id: 315,
    topic: "Configuration Management",
    text: "A 'snapshot' of a module used as a starting point is a ________.",
    options: ["Baseline", "Version", "Delta", "Revision"],
    correctAnswer: 0
  },
  {
    id: 316,
    topic: "UML Visibility",
    text: "A class's specification may include the ________ of its attributes (public/private).",
    options: ["Color", "Visibility", "Price", "ID"],
    correctAnswer: 1
  },
  {
    id: 317,
    topic: "Software Maintenance",
    text: "Correcting errors not discovered during development is ________ maintenance.",
    options: ["Perfective", "Adaptive", "Corrective", "Regression"],
    correctAnswer: 2
  },
  {
    id: 318,
    topic: "Project Planning",
    text: "The PERT chart is useful for monitoring the ________ progress of activities.",
    options: ["Cost", "Timely", "Logical", "Hardware"],
    correctAnswer: 1
  },
  {
    id: 319,
    topic: "Estimation",
    text: "Who proposed the 'Function point' metric in 1983?",
    options: ["Royce", "Albrecht", "Boehm", "Putnam"],
    correctAnswer: 1
  },
  {
    id: 320,
    topic: "Requirement Engineering",
    text: "Finding ambiguities and resolving them through customer discussion is part of ________.",
    options: ["Coding", "Requirement Analysis", "Design", "Deployment"],
    correctAnswer: 1
  },
  {
    id: 321,
    topic: "Testing",
    text: "Testing a program consists of providing a set of ________ (or test cases).",
    options: ["User names", "Test inputs", "Logic gates", "Budgets"],
    correctAnswer: 1
  },
  {
    id: 322,
    topic: "Management",
    text: "Idling in the initial phase and pressure in the later phase is a risk of ________ organization.",
    options: ["Functional", "Project", "Democratic", "Mixed"],
    correctAnswer: 1
  },
  {
    id: 323,
    topic: "Software Maintenance",
    text: "Reverse Engineering aims to improve the ________ of a system.",
    options: ["Execution speed", "Understandability", "Selling price", "Hardware fit"],
    correctAnswer: 1
  },
  {
    id: 324,
    topic: "Quality",
    text: "Quality Control (QC) aims at ________ causes behind defects, not just rejecting items.",
    options: ["Ignoring", "Determining", "Creating", "Hiding"],
    correctAnswer: 1
  },
  {
    id: 325,
    topic: "UML Diagrams",
    text: "Which diagram visually represents workflows and business processes?",
    options: ["Class", "Object", "Activity", "Deployment"],
    correctAnswer: 2
  },
  {
    id: 326,
    topic: "Software Design",
    text: "A well-structured design review is important for ________ and quality.",
    options: ["Speed", "Accuracy", "Marketing", "Hiring"],
    correctAnswer: 1
  },
  {
    id: 327,
    topic: "SDLC",
    text: "Which model is the highest abstract version of a system in architecture?",
    options: ["Detailed Design", "Architectural Design", "High-level Design", "UML"],
    correctAnswer: 1
  },
  {
    id: 328,
    topic: "Management",
    text: "A project manager's responsibility ranges from team morale to ________ presentations.",
    options: ["Coding", "Customer", "Hardware", "Secret"],
    correctAnswer: 1
  },
  {
    id: 329,
    topic: "Estimation",
    text: "Delphi estimation is iterated for several ________.",
    options: ["Days", "Weeks", "Rounds", "Years"],
    correctAnswer: 2
  },
  {
    id: 330,
    topic: "Testing",
    text: "A 'Test Suite' is a set of all ________ with which a product is tested.",
    options: ["Test inputs", "Test cases", "Code lines", "Users"],
    correctAnswer: 1
  },
  {
    id: 331,
    topic: "Object Orientation",
    text: "Modeling complex interactions into manageable structures is the essence of ________.",
    options: ["Linear coding", "Object Orientation", "Beta testing", "Documentation"],
    correctAnswer: 1
  },
  {
    id: 332,
    topic: "UML Modeling",
    text: "UML addresses the specification of all important Analysis, Design, and ________ decisions.",
    options: ["Marketing", "Implementation", "Social", "Price"],
    correctAnswer: 1
  },
  {
    id: 333,
    topic: "Testing",
    text: "Recoverable failures occur and the system recovers with or WITHOUT ________.",
    options: ["Hardware", "Operator intervention", "Internet", "A mouse"],
    correctAnswer: 1
  },
  {
    id: 334,
    topic: "Programming",
    text: "Coding standards promote good ________ practices.",
    options: ["Selling", "Programming", "Reviewing", "Manual"],
    correctAnswer: 1
  },
  {
    id: 335,
    topic: "SDLC Models",
    text: "Which model includes the 'Spiral with many loops'?",
    options: ["Incremental", "Spiral", "Agile", "RAD"],
    correctAnswer: 1
  },
  {
    id: 336,
    topic: "Computer Systems",
    text: "Language processors convert source program into ________.",
    options: ["Web pages", "Machine code", "PDFs", "Images"],
    correctAnswer: 1
  },
  {
    id: 337,
    topic: "Testing",
    text: "Branch testing is also known as ________ testing.",
    options: ["Logic", "Edge", "Glass", "Perception"],
    correctAnswer: 1
  },
  {
    id: 338,
    topic: "Estimation",
    text: "Technical Complexity Factor (TCF) refines the ________ measure.",
    options: ["LOC", "UFP", "Bug", "Time"],
    correctAnswer: 1
  },
  {
    id: 339,
    topic: "Configuration Management",
    text: "New versions of software are created when there is a significant change in ________.",
    options: ["Location", "Functionality", "Team size", "Font size"],
    correctAnswer: 1
  },
  {
    id: 340,
    topic: "Software Reuse",
    text: "At Stage 4 of a reuse domain, development can be ________ using domain languages.",
    options: ["Started", "Automated", "Deleted", "Sold"],
    correctAnswer: 1
  },
  {
    id: 341,
    topic: "Requirement Engineering",
    text: "Software requirements convey the ________ of users.",
    options: ["Expectations", "Names", "Account numbers", "Office addresses"],
    correctAnswer: 0
  },
  {
    id: 342,
    topic: "UML Diagrams",
    text: "The diagram addresses the static implementation view of a system.",
    options: ["Class", "Object", "Component Diagram", "State"],
    correctAnswer: 2
  },
  {
    id: 343,
    topic: "Quality",
    text: "ISO 9001 requires the responsibility of all who affect ________ to be defined.",
    options: ["Cost", "Quality", "Speed", "Team size"],
    correctAnswer: 1
  },
  {
    id: 344,
    topic: "Testing",
    text: "Condition testing is stronger than ________ testing.",
    options: ["Statement", "Branch", "Manual", "Both A and B"],
    correctAnswer: 1
  },
  {
    id: 345,
    topic: "Estimation",
    text: "Heuristic techniques assume project parameters can be modeled using ________.",
    options: ["Random guesses", "Mathematical expressions", "Word docs", "Phone calls"],
    correctAnswer: 1
  },
  {
    id: 346,
    topic: "Management",
    text: "Highly systematic approach to software development suits ________ organizations.",
    options: ["Small only", "Large", "Unstructured", "Remote only"],
    correctAnswer: 1
  },
  {
    id: 347,
    topic: "CASE Tools",
    text: "A primary reason for CASE is to increase ________.",
    options: ["Complexity", "Productivity", "Errors", "Time"],
    correctAnswer: 1
  },
  {
    id: 348,
    topic: "Testing",
    text: "A 'mutant' is a program with ________.",
    options: ["No errors", "Arbitrary changes introduced for testing", "High score", "Fast speed"],
    correctAnswer: 1
  },
  {
    id: 349,
    topic: "UML Modeling",
    text: "The contemporary view building block is the ________.",
    options: ["Procedure", "Function", "Object or Class", "Loop"],
    correctAnswer: 2
  },
  {
    id: 350,
    topic: "Software Maintenance",
    text: "Rework to cope up with a 'newer interface' is ________ maintenance.",
    options: ["Corrective", "Adaptive", "Perfective", "Standard"],
    correctAnswer: 1
  },
  {
    id: 351,
    topic: "SDLC Models",
    text: "Which model was propounded by Winston W. Royce in 1970?",
    options: ["Agile", "Spiral", "Waterfall", "V-Shaped"],
    correctAnswer: 2
  },
  {
    id: 352,
    topic: "Software Engineering",
    text: "Software is more than just program code; it includes libraries and ________.",
    options: ["Hardware", "Marketing brochures", "Documentations", "Office furniture"],
    correctAnswer: 2
  },
  {
    id: 353,
    topic: "Abstraction",
    text: "Which reduction technique considers only relevant aspects and suppresses others?",
    options: ["Decomposition", "Encapsulation", "Abstraction", "Inheritance"],
    correctAnswer: 2
  },
  {
    id: 354,
    topic: "Software Engineering",
    text: "The outcome of software engineering is an efficient and ________ software product.",
    options: ["Expensive", "Reliable", "Heavy", "Complex"],
    correctAnswer: 1
  },
  {
    id: 355,
    topic: "Management",
    text: "Good decomposition should ________ interactions among various components.",
    options: ["Maximize", "Ignore", "Minimize", "Standardize"],
    correctAnswer: 2
  },
  {
    id: 356,
    topic: "SE Need",
    text: "Complexities of software projects increase whenever ________ capability increases.",
    options: ["Software", "Hardware", "Human", "Financial"],
    correctAnswer: 1
  },
  {
    id: 357,
    topic: "Software Quality",
    text: "Ideally, a quality product does exactly what the ________ want it to do.",
    options: ["Developers", "Users/Customers", "Managers", "Testers"],
    correctAnswer: 1
  },
  {
    id: 358,
    topic: "UML Modeling",
    text: "A model provides the ________ of a system.",
    options: ["Raw code", "Blueprints", "Final budget", "Office layout"],
    correctAnswer: 1
  },
  {
    id: 359,
    topic: "UML Principles",
    text: "How many basic principles of modeling are discussed in the material?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2
  },
  {
    id: 360,
    topic: "UML Modeling",
    text: "Which perspective focuses on procedures and decomposition of algorithms?",
    options: ["Algorithmic", "Object-oriented", "Behavioral", "Structural"],
    correctAnswer: 0
  },
  {
    id: 361,
    topic: "OO Concept",
    text: "What provides the conceptual foundation for assembling systems from components?",
    options: ["Linear design", "Object-oriented development", "Manual coding", "Hiring experts"],
    correctAnswer: 1
  },
  {
    id: 362,
    topic: "UML Things",
    text: "Structural things are the ________ of UML models.",
    options: ["Nouns", "Verbs", "Adjectives", "Pronouns"],
    correctAnswer: 0
  },
  {
    id: 363,
    topic: "UML Things",
    text: "Which thing captures behavior over time and space (the 'verbs')?",
    options: ["Structural things", "Behavioral things", "Grouping things", "Annotational things"],
    correctAnswer: 1
  },
  {
    id: 364,
    topic: "UML Class",
    text: "A class implements one or more ________.",
    options: ["Packages", "Interfaces", "Notes", "Actors"],
    correctAnswer: 1
  },
  {
    id: 365,
    topic: "UML Interface",
    text: "An interface is rendered graphically as a ________.",
    options: ["Rectangle", "Circle", "Cube", "Tabbed folder"],
    correctAnswer: 1
  },
  {
    id: 366,
    topic: "UML State machine",
    text: "A state is rendered as a ________ rectangle.",
    options: ["Rounded", "Heavy-lined", "Dashed", "Dotted"],
    correctAnswer: 0
  },
  {
    id: 367,
    topic: "UML Package",
    text: "A package is graphically rendered as a ________.",
    options: ["Ellipse", "Circle", "Tabbed folder", "Cube"],
    correctAnswer: 2
  },
  {
    id: 368,
    topic: "UML Relationship",
    text: "Which relationship describes a link being a connection among objects?",
    options: ["Dependency", "Association", "Generalization", "Realization"],
    correctAnswer: 1
  },
  {
    id: 369,
    topic: "UML Relationship",
    text: "Generalization is denoted by a ________ head pointing to the parent.",
    options: ["Filled diamond", "Hollow arrow", "Hollow diamond", "Dashed arrow"],
    correctAnswer: 1
  },
  {
    id: 370,
    topic: "UML Diagrams",
    text: "How many types of UML diagrams are classified into structural and behavioral?",
    options: ["Five", "Seven", "Nine", "Twelve"],
    correctAnswer: 2
  },
  {
    id: 371,
    topic: "UML Diagrams",
    text: "Structural diagrams include Class, Object, Component, and ________ diagrams.",
    options: ["Activity", "Sequence", "Deployment", "State"],
    correctAnswer: 2
  },
  {
    id: 372,
    topic: "UML Diagrams",
    text: "Behavioral diagrams include Use case, Sequence, State machine, Activity, and ________.",
    options: ["Class", "Object", "Collaboration", "Component"],
    correctAnswer: 2
  },
  {
    id: 373,
    topic: "Testing",
    text: "Which testing confirms the system behaves as expected under test inputs?",
    options: ["Program Testing", "Alpha Testing", "Beta Testing", "Acceptance"],
    correctAnswer: 0
  },
  {
    id: 374,
    topic: "Testing",
    text: "A ________ is a manifestaton of an error.",
    options: ["State", "Failure", "Prompt", "Logic"],
    correctAnswer: 1
  },
  {
    id: 375,
    topic: "Testing",
    text: "The aim of testing is to identify all ________ existing in a software product.",
    options: ["Users", "Defects", "Managers", "Features"],
    correctAnswer: 1
  },
  {
    id: 376,
    topic: "Testing",
    text: "Functional testing is synonymous with ________ testing.",
    options: ["White-box", "Black-box", "Mutation", "Alpha"],
    correctAnswer: 1
  },
  {
    id: 377,
    topic: "Testing",
    text: "White-box testing is synonymous with ________ testing.",
    options: ["Functional", "Structural", "Acceptance", "Manual"],
    correctAnswer: 1
  },
  {
    id: 378,
    topic: "Integration Testing",
    text: "Which integration approach is most commonly used, allowing testing as modules become available?",
    options: ["Big-Bang", "Bottom-up", "Mixed/Sandwiched", "Top-down"],
    correctAnswer: 2
  },
  {
    id: 379,
    topic: "Testing Levels",
    text: "Which testing is performed after product delivery to decide whether to accept or reject?",
    options: ["Unit", "System", "Integration", "Acceptance"],
    correctAnswer: 3
  },
  {
    id: 380,
    topic: "Performance Testing",
    text: "Stress testing is also known as ________ testing.",
    options: ["Functional", "Endurance", "Logic", "Volume"],
    correctAnswer: 1
  },
  {
    id: 381,
    topic: "Software Maintenance",
    text: "The rate of hardware ________ is a reason for software maintenance.",
    options: ["Growth", "Obsolescence", "Price reduction", "Size increase"],
    correctAnswer: 1
  },
  {
    id: 382,
    topic: "Software Maintenance",
    text: "Corrective maintenance rectifies bugs observed while in ________.",
    options: ["Development", "Use", "Testing", "Beta"],
    correctAnswer: 1
  },
  {
    id: 383,
    topic: "Software Maintenance",
    text: "Changing functionalities according to customer demands is ________ maintenance.",
    options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
    correctAnswer: 2
  },
  {
    id: 384,
    topic: "Software Maintenance",
    text: "Software reengineering combines Reverse and ________ Engineering.",
    options: ["Backward", "Forward", "Side", "Top"],
    correctAnswer: 1
  },
  {
    id: 385,
    topic: "Quality",
    text: "ISO 9000 certification is concerned with guidelines for the ________ process.",
    options: ["Marketing", "Production", "Design only", "Sales"],
    correctAnswer: 1
  },
  {
    id: 386,
    topic: "ISO",
    text: "ISO 9001 is applicable to organizations engaged in Design, Production, and ________.",
    options: ["Marketing", "Servicing", "Consultancy", "Hiring"],
    correctAnswer: 1
  },
  {
    id: 387,
    topic: "SDLC Models",
    text: "Which model is the most widely used software development model evolved?",
    options: ["Waterfall", "Iterative Waterfall", "Spiral", "Agile"],
    correctAnswer: 1
  },
  {
    id: 388,
    topic: "SDLC Models",
    text: "Which model is specially popular for developing user-interface parts?",
    options: ["Waterfall", "Prototyping", "Spiral", "RAD"],
    correctAnswer: 1
  },
  {
    id: 389,
    topic: "Spiral Model",
    text: "The first quadrant of the Spiral model is focused on ________.",
    options: ["Risk Assessment", "Objective Setting", "Development", "Planning"],
    correctAnswer: 1
  },
  {
    id: 390,
    topic: "Spiral Model",
    text: "The second quadrant of the Spiral model focuses on ________ and Reduction.",
    options: ["Cost estimation", "Risk Assessment", "Coding", "Deployment"],
    correctAnswer: 1
  },
  {
    id: 391,
    topic: "Requirement Engineering",
    text: "Problems without an SRS includes difficulty for ________ engineers to understand functionality.",
    options: ["Marketing", "Maintenance", "Financial", "Legal"],
    correctAnswer: 1
  },
  {
    id: 392,
    topic: "SRS",
    text: "What view should an SRS document provide?",
    options: ["White-box", "Black-box", "Glass-box", "Logical-box"],
    correctAnswer: 1
  },
  {
    id: 393,
    topic: "Logic Models",
    text: "A decision table represents complex processing logic in a ________ form.",
    options: ["Linear", "Tabular or matrix", "Circular", "Random"],
    correctAnswer: 1
  },
  {
    id: 394,
    topic: "Logic Models",
    text: "The leaf nodes of a decision tree represent ________.",
    options: ["Conditions", "Actions to be performed", "Starting points", "End of code"],
    correctAnswer: 1
  },
  {
    id: 395,
    topic: "Formal Specification",
    text: "Syntactic domains consist of an alphabet of ________.",
    options: ["Verbs", "Symbols", "Binary codes", "Names"],
    correctAnswer: 1
  },
  {
    id: 396,
    topic: "Formal Specification",
    text: "Model-oriented styles define behavior by constructing a model in ________ structures.",
    options: ["Physical", "Mathematical", "Chemical", "Biological"],
    correctAnswer: 1
  },
  {
    id: 397,
    topic: "Design Levels",
    text: "Architectural design identifies the software as a system with many interactive ________.",
    options: ["Users", "Components", "Hardware", "Prices"],
    correctAnswer: 1
  },
  {
    id: 398,
    topic: "Modularization",
    text: "Modularization follows the ________ problem-solving strategy.",
    options: ["Combine and Rule", "Divide and Conquer", "Build and Scale", "Test and Release"],
    correctAnswer: 1
  },
  {
    id: 399,
    topic: "Cohesion",
    text: "The degree of intra-dependability within elements of a module is ________.",
    options: ["Coupling", "Cohesion", "Complexity", "Structure"],
    correctAnswer: 1
  },
  {
    id: 400,
    topic: "Unit Testing",
    text: "Unit testing is also known as ________ testing.",
    options: ["System", "Module", "Logic", "Functional"],
    correctAnswer: 1
  },
  {
    id: 401,
    topic: "Testing",
    text: "Who was the pioneer of Clean room testing?",
    options: ["Microsoft", "IBM", "Intel", "Apple"],
    correctAnswer: 1
  },
  {
    id: 402,
    topic: "Quality",
    text: "The probability of product working 'correctly' over time is defined as ________.",
    options: ["Maintainability", "Reliability", "Usability", "Efficiency"],
    correctAnswer: 1
  },
  {
    id: 403,
    topic: "Quality",
    text: "The probability distribution of input of an average user is the ________ profile.",
    options: ["User", "Operation", "Market", "Efficiency"],
    correctAnswer: 1
  },
  {
    id: 404,
    topic: "Quality",
    text: "The 'Managed' CMM level focuses on software ________.",
    options: ["Metrics", "Code", "Reviews", "People"],
    correctAnswer: 0
  },
  {
    id: 405,
    topic: "Quality",
    text: "The 'Optimizing' CMM level focuses on continuous process ________.",
    options: ["Stagnation", "Improvement", "Deletion", "Documentation"],
    correctAnswer: 1
  },
  {
    id: 406,
    topic: "Management",
    text: "Which team structure is arguable more efficient for well-understood problems?",
    options: ["Democratic", "Chief Programmer", "Mixed", "Freelance"],
    correctAnswer: 1
  },
  {
    id: 407,
    topic: "Management",
    text: "Software is intangible, which makes it hard to ________.",
    options: ["Build", "Monitor and control", "Sell", "Describe"],
    correctAnswer: 1
  },
  {
    id: 408,
    topic: "Project Scheduling",
    text: "The chain of activities determining duration is the ________.",
    options: ["Critical path", "Random path", "Budget path", "Goal path"],
    correctAnswer: 0
  },
  {
    id: 409,
    topic: "UML Architecture",
    text: "A building can be modeled from how many views/perspectives in UML concepts?",
    options: ["Five", "Three", "One", "Ten"],
    correctAnswer: 0
  },
  {
    id: 410,
    topic: "UML Dynamic",
    text: "UML models that show objects interacting and states evolving are ________ models.",
    options: ["Static", "Dynamic", "Physical", "Manual"],
    correctAnswer: 1
  },
  {
    id: 411,
    topic: "Object Orientation",
    text: "Which pattern abstracts the process of object creation?",
    options: ["Strategy", "Factory", "Observer", "Decorator"],
    correctAnswer: 1
  },
  {
    id: 412,
    topic: "Testing",
    text: "A list of potential causes for error is used in which debugging approach?",
    options: ["Brute Force", "Backtracking", "Cause Elimination", "Slicing"],
    correctAnswer: 2
  },
  {
    id: 413,
    topic: "Quality",
    text: "What reduces the effort and time required for maintenance?",
    options: ["Raw code", "Good documents", "Complex logic", "Large teams"],
    correctAnswer: 1
  },
  {
    id: 414,
    topic: "Maintenance",
    text: "Which model allows for 'negative' reliability growth by introducing additional errors during repair?",
    options: ["Jelinski-Moranda", "Littlewood-Verall", "Rayleigh", "Boehm"],
    correctAnswer: 1
  },
  {
    id: 415,
    topic: "Project Planning",
    text: "Commitment to unrealistic estimates result in schedule ________.",
    options: ["Stability", "Slippage", "Acceleration", "Completion"],
    correctAnswer: 1
  },
  {
    id: 416,
    topic: "Estimation",
    text: "Which metric measures the lexical complexity of a program?",
    options: ["LOC", "FP", "Bug density", "Execution flow"],
    correctAnswer: 0
  },
  {
    id: 417,
    topic: "Estimation",
    text: "The 'Feature point' metric incorporates extra parameter for ________ complexity.",
    options: ["Hardware", "Algorithm", "User", "Data"],
    correctAnswer: 1
  },
  {
    id: 418,
    topic: "Management",
    text: "Which organization proposed the RAD model in the 1980s?",
    options: ["Apple", "IBM", "Microsoft", "Intel"],
    correctAnswer: 1
  },
  {
    id: 419,
    topic: "Quality",
    text: "ISO 9000 certification is a ________ of accreditations across nations.",
    options: ["Rivalry", "Consortium (63 countries)", "Company", "Manual"],
    correctAnswer: 1
  },
  {
    id: 420,
    topic: "CMM",
    text: "Level 2 project management practices include tracking ________ and schedule.",
    options: ["Users", "Cost", "Names", "Reviews"],
    correctAnswer: 1
  },
  {
    id: 421,
    topic: "UML Modeling",
    text: "UML is a language for Visualizing, Specifying, Constructing, and ________.",
    options: ["Buying", "Documenting", "Marketing", "Selling"],
    correctAnswer: 1
  },
  {
    id: 422,
    topic: "Software Practice",
    text: "Experience arranged in the form of methodologies is a view of ________.",
    options: ["Hacking", "Software Engineering", "Office work", "Sales"],
    correctAnswer: 1
  },
  {
    id: 423,
    topic: "Abstraction",
    text: "The purpose of abstraction is to omit ________ details.",
    options: ["Essential", "Irrelevant", "Logical", "Data-specific"],
    correctAnswer: 1
  },
  {
    id: 424,
    topic: "Computer Hardware",
    text: "A lightpen is an example of an ________ component.",
    options: ["Output", "Input", "Storage", "Processing"],
    correctAnswer: 1
  },
  {
    id: 425,
    topic: "SDLC",
    text: "In RAD model, components are established or developed in ________.",
    options: ["Sequence", "Parallel", "Random order", "Isolation"],
    correctAnswer: 1
  },
  {
    id: 426,
    topic: "Testing",
    text: "Acceptance Testing can be Alpha or ________Testing.",
    options: ["Unit", "Beta", "System", "Integration"],
    correctAnswer: 1
  },
  {
    id: 427,
    topic: "UML Class",
    text: "Which compartment is mandatory in a class representation?",
    options: ["Attributes", "Name", "Operations", "Color"],
    correctAnswer: 1
  },
  {
    id: 428,
    topic: "UML Relationships",
    text: "A connection among object instances is called a/an ________.",
    options: ["Package", "Actor", "Link", "Use Case"],
    correctAnswer: 2
  },
  {
    id: 429,
    topic: "Testing",
    text: "Designing test cases so every statement is executed once is ________ Coverage.",
    options: ["Path", "Statement", "Branch", "Condition"],
    correctAnswer: 1
  },
  {
    id: 430,
    topic: "SDLC",
    text: "V-Model highlights the importance of ________ testing and identifying defects early.",
    options: ["Late", "Manual", "Early", "Random"],
    correctAnswer: 2
  },
  {
    id: 431,
    topic: "Management",
    text: "Requirement Analysis leads to ________ testing in the V-model.",
    options: ["Unit", "Integration", "System", "Acceptance"],
    correctAnswer: 3
  },
  {
    id: 432,
    topic: "Testing",
    text: "Which testing is performed after product delivery to determine acceptance?",
    options: ["Alpha", "Beta", "Acceptance", "Smoke"],
    correctAnswer: 2
  },
  {
    id: 433,
    topic: "Software Products",
    text: "Is Air Traffic Control software an example of a Customized or Generic product?",
    options: ["Generic", "Customized", "Open Source", "Utility"],
    correctAnswer: 1
  },
  {
    id: 434,
    topic: "UML Diagrams",
    text: "Which diagram narrative narates object interact over time for scenario?",
    options: ["Sequence Diagram", "Collaboration Diagram", "State Diagram", "Activity Diagram"],
    correctAnswer: 0
  },
  {
    id: 435,
    topic: "Software Characteristics",
    text: "When software is moved between platforms, it is ________ characteristics.",
    options: ["Operational", "Transitional", "Maintenance", "Scalable"],
    correctAnswer: 1
  },
  {
    id: 436,
    topic: "Software Maintenance",
    text: "Repairing software failure can either increase or ________ reliability.",
    options: ["Stabilize", "Decrease", "Freeze", "Reset"],
    correctAnswer: 1
  },
  {
    id: 437,
    topic: "Programming",
    text: "A coding standard gives ________ appearances to code by different engineers.",
    options: ["Unique", "Random", "Uniform", "Abstract"],
    correctAnswer: 2
  },
  {
    id: 438,
    topic: "CASE Tools",
    text: "Prototyping CASE tools help support graphical ________ development.",
    options: ["User Interface (GUI)", "Logic", "Hardware", "Testing"],
    correctAnswer: 0
  },
  {
    id: 439,
    topic: "UML Architecture",
    text: "The users’ view is a ________ view of the system.",
    options: ["White-box", "Black-box", "Glass-box", "Mirror-box"],
    correctAnswer: 1
  },
  {
    id: 440,
    topic: "Quality",
    text: "Total Quality Management (TQM) advocates continuous ________ improvement.",
    options: ["Price", "Process", "Team", "Budget"],
    correctAnswer: 1
  },
  {
    id: 441,
    topic: "SDLC",
    text: "The Spiral model is also known as the ________.",
    options: ["Beta Model", "Meta Model", "Final Model", "Linear Model"],
    correctAnswer: 1
  },
  {
    id: 442,
    topic: "Testing",
    text: "A test case involves Input, State, and ________.",
    options: ["Previous Input", "Expected Output", "Bug level", "Code line"],
    correctAnswer: 1
  },
  {
    id: 443,
    topic: "Quality",
    text: "ReliabilityGrowthModels predict when a level of reliability is likely to be ________.",
    options: ["Created", "Attained", "Lost", "Reset"],
    correctAnswer: 1
  },
  {
    id: 444,
    topic: "Configuration",
    text: "The state of the deliverable changes as development progresses and ________.",
    options: ["Managers change", "Bugs are detected/fixed", "Hardware burns", "Offices move"],
    correctAnswer: 1
  },
  {
    id: 445,
    topic: "Management",
    text: "Project planning is undertaken and completed ________ development activity starts.",
    options: ["After", "Before", "During", "Only at end"],
    correctAnswer: 1
  },
  {
    id: 446,
    topic: "Architecture",
    text: "Email clients connect to ________ mail services.",
    options: ["Peer", "Server-side", "Hardware-only", "Static"],
    correctAnswer: 1
  },
  {
    id: 447,
    topic: "UML Modeling",
    text: "A 'blueprints of a system' describes its static structures or ________.",
    options: ["Market price", "Dynamics", "Binary size", "Color scheme"],
    correctAnswer: 1
  },
  {
    id: 448,
    topic: "Software Maintenance",
    text: "Corrective maintenance rectifies ________.",
    options: ["New features", "Bugs", "Documentation", "Layouts"],
    correctAnswer: 1
  },
  {
    id: 449,
    topic: "Testing",
    text: "Recovery testing checks response to loss of power or ________.",
    options: ["Users", "Resources/Faults", "Hires", "Budgets"],
    correctAnswer: 1
  },
  {
    id: 450,
    topic: "Quality",
    text: "Portability is the ability to work in different ________ environments.",
    options: ["Office", "Operating System", "Market", "Hiring"],
    correctAnswer: 1
  },
  {
    id: 451,
    topic: "Programming",
    text: "Which guideline suggests descriptive names for variables?",
    options: ["Speed", "Readability", "Brevity", "Redundancy"],
    correctAnswer: 1
  },
  {
    id: 452,
    topic: "Project Planning",
    text: "Accurate estimation of ________ is fundamental for cost and effort.",
    options: ["Team names", "Problem size", "Office space", "Client mood"],
    correctAnswer: 1
  },
  {
    id: 453,
    topic: "UML Diagrams",
    text: "Which diagram address static design view or static process view?",
    options: ["Sequence", "Object Diagram", "State", "Activity"],
    correctAnswer: 1
  },
  {
    id: 454,
    topic: "Management",
    text: "An 'Actor' in UML is a ________ played by a user.",
    options: ["Script", "Role", "Name", "ID"],
    correctAnswer: 1
  },
  {
    id: 455,
    topic: "UML Use Case",
    text: "Use cases correspond to ________ functional requirements.",
    options: ["Low-level", "High-level", "Binary", "Mathematical"],
    correctAnswer: 1
  },
  {
    id: 456,
    topic: "Software Design",
    text: "Functional Cohesion is considered the ________ degree of cohesion.",
    options: ["Lowest", "Highest", "Average", "Unwanted"],
    correctAnswer: 1
  },
  {
    id: 457,
    topic: "Configuration",
    text: "SCCS and RCS minimize the amount of occupied ________.",
    options: ["RAM", "Disk space", "Screen area", "Office desk"],
    correctAnswer: 1
  },
  {
    id: 458,
    topic: "Quality",
    text: "What assesses likely contractor performance in CMM?",
    options: ["Process assessment", "Capability evaluation", "Code review", "Logic test"],
    correctAnswer: 1
  },
  {
    id: 459,
    topic: "Computer Hardware",
    text: "Secondary storage includes HDD and ________.",
    options: ["RAM", "DVD", "CPU", "Monitor"],
    correctAnswer: 1
  },
  {
    id: 460,
    topic: "Software Quality",
    text: "The 'bath tub' shape for hardware failure has high rates initially and at the ________.",
    options: ["Middle", "End (Wear out)", "Release", "Start only"],
    correctAnswer: 1
  },
  {
    id: 461,
    topic: "UML Extensibility",
    text: "Which UML mechanism extends the vocabulary of the language?",
    options: ["Stereotypes", "Constraint", "Tagged values", "Notes"],
    correctAnswer: 0
  },
  {
    id: 462,
    topic: "Testing",
    text: "Which testing verifies code is free of bugs and meets requirement?",
    options: ["Maintenance", "Testing", "Design", "Marketing"],
    correctAnswer: 1
  },
  {
    id: 463,
    topic: "Management",
    text: "A project manager can assist team morale through ________ activities.",
    options: ["Visible", "Invisible", "Marketing", "Testing"],
    correctAnswer: 1
  },
  {
    id: 464,
    topic: "Software Design",
    text: "Detailed design yields more detailed requirements and ________.",
    options: ["Budget", "Implementations", "Names", "Reviews"],
    correctAnswer: 1
  },
  {
    id: 465,
    topic: "Testing",
    text: "Branch testing makes each branch condition assume ________ values.",
    options: ["Random", "True and False", "Integer", "String"],
    correctAnswer: 1
  },
  {
    id: 466,
    topic: "UML Modeling",
    text: "Which UML diagram portrays Object interactions over time?",
    options: ["Class", "Sequence Diagram", "Activity", "Collaboration"],
    correctAnswer: 1
  },
  {
    id: 467,
    topic: "Quality",
    text: "Total Quality Management stands for TQM. Which 'BPR' term relates to it?",
    options: ["Better Process Results", "Business Process Reengineering", "Best Product Release", "Big Project Review"],
    correctAnswer: 1
  },
  {
    id: 468,
    topic: "Software Characteristics",
    text: "Which characteristic help us know how well software works in operations?",
    options: ["Operational", "Transitional", "Maintenance", "Fixed"],
    correctAnswer: 0
  },
  {
    id: 469,
    topic: "Software Characteristics",
    text: "Efficiency is the ability to make ________ use of system resources.",
    options: ["Minimum", "Average", "Maximum", "Zero"],
    correctAnswer: 2
  },
  {
    id: 470,
    topic: "Testing",
    text: "Configuration testing analyzes behavior in various ________ configurations.",
    options: ["Software only", "Hardware and Software", "Office", "Market"],
    correctAnswer: 1
  },
  {
    id: 471,
    topic: "Software Maintenance",
    text: "Which maintenance involves enhancing functionalities per customer request?",
    options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
    correctAnswer: 2
  },
  {
    id: 472,
    topic: "Quality",
    text: "Software is ________ in nature.",
    options: ["Physical", "Intangible", "Metal", "Heavy"],
    correctAnswer: 1
  },
  {
    id: 473,
    topic: "Management",
    text: "A project manager steering a project is responsible for success and ________.",
    options: ["Selling", "Overall responsibility", "Marketing", "Buying"],
    correctAnswer: 1
  },
  {
    id: 474,
    topic: "Testing",
    text: "Unit testing of modules is referred to as testing in the ________.",
    options: ["Big", "Large", "Small", "Wide"],
    correctAnswer: 2
  },
  {
    id: 475,
    topic: "Quality",
    text: "What is an important attribute for telecommunication systems that must never be down?",
    options: ["Availability", "Cost", "Size", "Color"],
    correctAnswer: 0
  },
  {
    id: 476,
    topic: "SDLC",
    text: "Successful completion of a step in Waterfall leads to the ________.",
    options: ["Previous step", "Next step", "Middle step", "Random step"],
    correctAnswer: 1
  },
  {
    id: 477,
    topic: "UML Modeling",
    text: "The UML is more than just a bunch of ________ symbols.",
    options: ["Binary", "Graphical", "Price", "Manual"],
    correctAnswer: 1
  },
  {
    id: 478,
    topic: "UML Behavior",
    text: "A directed line in a message is rendered graphically as an ________ line.",
    options: ["Plain", "Directed", "Dashed", "Dotted"],
    correctAnswer: 1
  },
  {
    id: 479,
    topic: "Testing",
    text: "Test cases are selected to detect ________ errors.",
    options: ["Same", "Different", "Zero", "Only code"],
    correctAnswer: 1
  },
  {
    id: 480,
    topic: "SDLC",
    text: "Waterfall model is linear and ________.",
    options: ["Sequential", "Parallel", "Random", "Fast"],
    correctAnswer: 0
  },
  {
    id: 481,
    topic: "UML Component",
    text: "The static view implementation displays high level ________ of code.",
    options: ["Marketing", "Packaged structure", "Price", "User names"],
    correctAnswer: 1
  },
  {
    id: 482,
    topic: "Quality",
    text: "Which CMM level is person-independent?",
    options: ["Initial", "Repeatable", "Defined", "All A, B, and C"],
    correctAnswer: 3
  },
  {
    id: 483,
    topic: "Management",
    text: "In Project organization, engineers carry out ________ life cycle activities.",
    options: ["All", "Only code", "Only test", "Only sales"],
    correctAnswer: 0
  },
  {
    id: 484,
    topic: "Programming",
    text: "Clever coding can ________ meaning of the code.",
    options: ["Enhance", "Obscure", "Simplify", "Clear"],
    correctAnswer: 1
  },
  {
    id: 485,
    topic: "Software Products",
    text: "Which product is commissioned by specific customers?",
    options: ["Generic", "Customized", "Open Source", "Free"],
    correctAnswer: 1
  },
  {
    id: 486,
    topic: "Testing",
    text: "Mutation testing is computationally very ________.",
    options: ["Cheap", "Expensive", "Fast", "Simple"],
    correctAnswer: 1
  },
  {
    id: 487,
    topic: "UML Diagrams",
    text: "A sequence of interactions between user and system is a ________.",
    options: ["Flowchart", "Use case", "Class", "Package"],
    correctAnswer: 1
  },
  {
    id: 488,
    topic: "Project Planning",
    text: "Which estimation is Considered the first activity?",
    options: ["Cost", "Size", "Effort", "Scheduling"],
    correctAnswer: 1
  },
  {
    id: 489,
    topic: "Configuration",
    text: "The state of each deliverable object changes as bugs are ________.",
    options: ["Created", "Detected and fixed", "Ignored", "Sold"],
    correctAnswer: 1
  },
  {
    id: 490,
    topic: "Software Engineering",
    text: "SE helping to reduce programming complexity uses Abstraction and ________.",
    options: ["Addition", "Decomposition", "Multiplication", "Subtraction"],
    correctAnswer: 1
  },
  {
    id: 491,
    topic: "Architecture",
    text: "Clients are devices or processes that request services from ________.",
    options: ["Storages", "Servers", "Networks", "Users"],
    correctAnswer: 1
  },
  {
    id: 492,
    topic: "Testing",
    text: "Failure is a ________ of an error.",
    options: ["Cause", "Manifestation", "Price", "Review"],
    correctAnswer: 1
  },
  {
    id: 493,
    topic: "UML Principles",
    text: "Choice of what models to create has a profound influence on how ________.",
    options: ["Hires are made", "A problem is attacked", "Prices are set", "Code is deleted"],
    correctAnswer: 1
  },
  {
    id: 494,
    topic: "Testing",
    text: "In V-model, Design leads to ________ testing.",
    options: ["Unit", "System", "Acceptance", "Integration"],
    correctAnswer: 1
  },
  {
    id: 495,
    topic: "UML Modeling",
    text: "Which thing represents elements conceptual or physical?",
    options: ["Behavioral", "Structural", "Annotational", "Grouping"],
    correctAnswer: 1
  },
  {
    id: 496,
    topic: "Testing",
    text: "What ensures product being developed is according to design specifications?",
    options: ["Validation", "Verification", "Testing", "Marketing"],
    correctAnswer: 1
  },
  {
    id: 497,
    topic: "Quality",
    text: "Reliability of a product essentially denotes its ________.",
    options: ["Price", "Trustworthiness or Dependability", "Weight", "Size"],
    correctAnswer: 1
  },
  {
    id: 498,
    topic: "Object Orientation",
    text: "In OOD, attributes (data) and methods are bundled together in ________.",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    correctAnswer: 1
  },
  {
    id: 499,
    topic: "Project Planning",
    text: "What relates delivered lines of code to effort and time?",
    options: ["Bell Curve", "Rayleigh-Norden curve", "Linear line", "Box plot"],
    correctAnswer: 1
  },
  {
    id: 500,
    topic: "Software Engineering",
    text: "The final outcome of software engineering is efficient and ________.",
    options: ["Buggy", "Reliable", "Heavy", "Secret"],
    correctAnswer: 1
  }
];

// Note: I have included 100 detailed questions covering all modules.
// I will generate more programmatically or in additional files if needed, 
// but this set provides a very strong coverage of the PDF content.
