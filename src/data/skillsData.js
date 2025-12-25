import { 
  SiKotlin, SiJava, SiTypescript, SiJavascript, SiPython, SiGo,
  SiSpringboot, SiExpress, SiAndroid, SiFirebase, SiPostgresql,
  SiMysql, SiMongodb, SiElasticsearch, SiDocker, SiKubernetes,
  SiJenkins, SiAmazonaws, SiGit, SiReact, SiNodedotjs
} from 'react-icons/si';

export const skillsData = [
  {
    category: 'Languages & Frameworks',
    skills: [
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Java', icon: SiJava, color: '#007396' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'React', icon: SiReact, color: '#61DAFB' }
    ]
  },
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Android SDK', icon: SiAndroid, color: '#3DDC84' },
      { name: 'Jetpack', icon: SiAndroid, color: '#3DDC84' },
      { name: 'Retrofit', icon: SiAndroid, color: '#3DDC84' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Glide/Picasso', icon: SiAndroid, color: '#3DDC84' },
      { name: 'Offline Caching', icon: SiAndroid, color: '#3DDC84' },
      { name: 'Espresso', icon: SiAndroid, color: '#3DDC84' },
      { name: 'JUnit', icon: SiJava, color: '#25A162' }
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'REST API Design', icon: SiExpress, color: '#0ea5e9' },
      { name: 'Microservices', icon: SiDocker, color: '#2496ED' },
      { name: 'OAuth/JWT', icon: SiExpress, color: '#000000' },
      { name: 'Nginx', icon: SiExpress, color: '#009639' }
    ]
  },
  {
    category: 'Databases & Search',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQLite', icon: SiAndroid, color: '#003B57' },
      { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'CI/CD Pipelines', icon: SiJenkins, color: '#D24939' }
    ]
  },
  {
    category: 'Practices & Methodologies',
    skills: [
      { name: 'Code Review', icon: SiGit, color: '#0ea5e9' },
      { name: 'Performance Profiling', icon: SiAndroid, color: '#0ea5e9' },
      { name: 'Scalability Engineering', icon: SiKubernetes, color: '#0ea5e9' },
      { name: 'Reliability Engineering', icon: SiDocker, color: '#0ea5e9' }
    ]
  }
];
