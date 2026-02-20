export const experienceData = [
  {
    id: 1,
    company: 'Samsung R&D Institute Indonesia',
    position: 'Software Developer Lead',
    location: 'Jakarta, Indonesia',
    startDate: '2022',
    endDate: 'Present',
    current: true,
    logo: 'assets/companies/samsung.png',
    description: 'Leading cross-functional development teams and delivering mobile & backend solutions for Samsung Indonesia.',
    achievements: [
      'Led a cross-functional team of 5 developers to design, implement, and operate 5+ mobile and web applications for Samsung Indonesia, managing roadmap, sprint delivery, and technical design decisions',
      'Enhanced app responsiveness by 30% through deep optimization of caching layers, eliminating unnecessary recomposition in UI layers, refactoring Retrofit call structure, and implementing efficient background data sync',
      'Designed and implemented scalable backend services (Spring Boot / Node.js) and RESTful APIs supporting tens of thousands of daily requests, improving API uptime and reducing average error rate',
      'Reduced post-release defects by 25% through standardized code review processes, unit/integration test introduction, and CI/CD gating with Jenkins and automated test suites',
      'Implemented CI/CD pipelines and containerized deployments with Docker and AWS, cutting deployment lead time and increasing release reliability',
      'Collaborated with UX/UI and QA to raise CSAT and reduce critical issues in production, coordinated on-call rotations and incident post-mortems to drive continuous improvement',
      'Responsible for delivering and maintaining two Google Play Store apps: Salaam and SLime, including release management, crash analytics remediation, and Play Store compliance'
    ],
    techStack: ['Kotlin', 'Spring Boot', 'Node.js', 'Android', 'Docker', 'AWS', 'Jenkins', 'PostgreSQL', 'Firebase']
  },
  {
    id: 2,
    company: 'Ministry of Research, Technology and Higher Education',
    position: 'Software and Digital Communication Developer',
    location: 'Bandung, West Java, Indonesia',
    startDate: '2018',
    endDate: '2019',
    current: false,
    logo: 'assets/companies/ministry.png',
    description: 'Developed embedded systems and instrumentation software for research projects.',
    achievements: [
      'Developed embedded and server components for speed measurement and track timing instrumentation, improving data reliability and reducing measurement latency through protocol optimizations',
      'Integrated data transmission pipelines and built mobile dashboards to visualize results for researchers and operators',
      'Conducted field testing and iterative improvements, ensuring system robustness under production conditions'
    ],
    techStack: ['Python', 'Embedded Systems', 'IoT', 'Node.js', 'Android', 'Data Visualization']
  },
  {
    id: 3,
    company: 'Xirka Silicon Technology',
    position: 'Smart Card Reader Developer',
    location: 'Bandung, West Java, Indonesia',
    startDate: '2017',
    endDate: '2017',
    current: false,
    logo: 'assets/companies/xirka.png',
    description: 'Developed Bluetooth-enabled Smart Card Reader prototype with secure authentication.',
    achievements: [
      'Implemented a Bluetooth Smart Card Reader prototype (SAM module) and an Android configuration UI, developed secure communication channels and performed extensive interoperability testing',
      'Ensured compliance with security and industry standards by implementing controlled authentication flows'
    ],
    techStack: ['Android', 'Bluetooth', 'Java', 'Security', 'Cryptography']
  }
];
