import {
  FiHeart, FiBook, FiActivity, FiAlertCircle, FiUsers,
  FiCpu, FiMessageSquare, FiRefreshCw, FiCalendar, FiFileText
} from 'react-icons/fi';

export const skillsData = [
  {
    category: 'Technical Skills',
    skills: [
      { name: 'First Aid Training', icon: FiHeart, color: '#ef4444' },
      { name: 'Health Promotion & Education', icon: FiBook, color: '#22c55e' },
      { name: 'Medical Check-ups', icon: FiActivity, color: '#0ea5e9' },
      { name: 'Emergency Response', icon: FiAlertCircle, color: '#f97316' },
      { name: 'HRBP & HSE Collaboration', icon: FiUsers, color: '#a855f7' }
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Critical Thinking', icon: FiCpu, color: '#0ea5e9' },
      { name: 'Communication Skills', icon: FiMessageSquare, color: '#14b8a6' },
      { name: 'Adaptability', icon: FiRefreshCw, color: '#6366f1' },
      { name: 'Program Coordination', icon: FiCalendar, color: '#ec4899' },
      { name: 'Medical Documentation', icon: FiFileText, color: '#64748b' }
    ]
  }
];
