export const projectsData = [
  {
    id: 1,
    title: 'Salaam',
    description: 'Islamic lifestyle mobile application for Samsung users, featuring prayer times, Quran, Qibla direction, and community features.',
    longDescription: 'Led the development of Salaam, a comprehensive Islamic lifestyle app published on Google Play Store. Implemented real-time features using Firebase, optimized offline caching for Quran and prayer times, and achieved thousands of active users.',
    image: 'assets/projects/salaam.png',
    techStack: ['Android', 'Kotlin', 'Firebase', 'Retrofit', 'Jetpack', 'MVVM'],
    achievements: [
      'Published to Google Play Store with thousands of downloads',
      'Implemented real-time prayer notifications and Qibla compass',
      'Optimized offline data access for Quran and prayer times',
      'Integrated Firebase for authentication and real-time updates'
    ],
    links: {
      live: 'https://s-salaam.com/',
      github: null
    },
    category: 'Mobile App'
  },
  {
    id: 2,
    title: 'SLime',
    description: 'Samsung lifestyle application with comprehensive REST API integration for user engagement and content delivery.',
    longDescription: 'Developed SLime, a feature-rich lifestyle app for Samsung ecosystem. Designed and implemented scalable backend services and RESTful APIs handling tens of thousands of daily requests.',
    image: 'assets/projects/slime.png',
    techStack: ['Android', 'Kotlin', 'REST API', 'Retrofit', 'Spring Boot', 'Node.js'],
    achievements: [
      'Successfully launched on Google Play Store',
      'Designed RESTful APIs supporting 10k+ daily requests',
      'Improved app performance by 30% through optimization',
      'Implemented CI/CD pipeline reducing deployment time'
    ],
    links: {
      live: 'https://s-lime.com/',
      github: null
    },
    category: 'Mobile App'
  },
  {
    id: 3,
    title: 'Speed Measurement System',
    description: 'IoT-based track timer system for automatic speed measurement in 60-meter sprint events.',
    longDescription: 'Developed embedded and server components for speed measurement and track timing instrumentation. Built data transmission pipelines and mobile dashboards for real-time result visualization.',
    image: 'assets/projects/speed.jpg',
    techStack: ['Embedded Systems', 'IoT', 'Python', 'Node.js', 'Android', 'WebSocket'],
    achievements: [
      'Improved data reliability through protocol optimizations',
      'Reduced measurement latency significantly',
      'Published research paper on ResearchGate',
      'Conducted successful field testing with research team'
    ],
    links: {
      live: null,
      github: null,
      publication: 'https://www.researchgate.net/publication/349868171'
    },
    category: 'IoT / Embedded'
  },
  {
    id: 4,
    title: 'Smart Card Reader',
    description: 'Bluetooth-enabled Smart Card Reader prototype with Android configuration interface and secure authentication.',
    longDescription: 'Implemented a Bluetooth Smart Card Reader prototype (SAM module) with Android configuration UI. Developed secure communication channels and performed extensive interoperability testing to ensure compliance with industry security standards.',
    image: 'assets/projects/smartcard.jpg',
    techStack: ['Android', 'Bluetooth', 'Java', 'Security', 'Cryptography'],
    achievements: [
      'Successfully prototyped Bluetooth SAM module',
      'Implemented secure authentication flows',
      'Ensured compliance with security standards',
      'Completed extensive interoperability testing'
    ],
    links: {
      live: null,
      github: null
    },
    category: 'Hardware / Mobile'
  }
];
