import { FaExternalLinkAlt, FaGithub, FaMusic, FaGamepad, FaUser } from 'react-icons/fa'
import styles from './Projects.module.css'

const projects = [
  {
    icon: '🎵',
    emoji: FaMusic,
    title: 'BKM Music Library',
    description:
      'A complete MERN stack music streaming app with JWT admin dashboard, live audio player, search & genre filtering, like system, and AI-generated music via Producer AI. Deployed on Vercel & Railway.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Chakra UI'],
    live: 'https://bkm-music-library.vercel.app',
    code: 'https://github.com/beruwalage-krishan-maduwantha/bkm-music-library',
    gradient: 'linear-gradient(135deg, #ff2d87 0%, #7c3aed 100%)',
    badge: 'Full-Stack MERN',
  },
  {
    icon: '🎮',
    emoji: FaGamepad,
    title: 'BKM Arcade',
    description:
      'An interactive collection of web-based games including Snake, 2D Plane Game, and Rock Paper Scissors. Features smooth animations, responsive design, and engaging user experiences.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    live: 'https://beruwalage-krishan-maduwantha.github.io/BKM-Arcade/',
    code: 'https://github.com/beruwalage-krishan-maduwantha/BKM-Arcade',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    badge: 'Vanilla JS',
  },
  {
    icon: '💼',
    emoji: FaUser,
    title: 'Portfolio Website',
    description:
      'A modern, responsive personal portfolio website showcasing my projects, skills, and professional journey. Built with clean HTML, CSS, and JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    live: 'https://beruwalage-krishan-maduwantha.github.io/portfolio/',
    code: 'https://github.com/beruwalage-krishan-maduwantha/portfolio',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    badge: 'Frontend',
  },
]

const Projects = () => (
  <section className={styles.section} id="projects">
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>A showcase of my latest work and creative experiments</p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardImage} style={{ background: p.gradient }}>
              <span className={styles.cardEmoji}>{p.icon}</span>
              <span className={styles.badge}>{p.badge}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.techList}>
                {p.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
              </div>
              <div className={styles.links}>
                <a href={p.live} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
                  <FaExternalLinkAlt size={13} /> Live Demo
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className={styles.linkSecondary}>
                  <FaGithub size={14} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects