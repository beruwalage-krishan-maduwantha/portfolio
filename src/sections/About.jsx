import styles from './About.module.css'

const stats = [
  { number: '2+', label: 'Years Learning' },
  { number: '4+', label: 'Projects Built' },
  { number: '100%', label: 'Dedication' },
]

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'Express.js', 'MongoDB', 'JWT Auth', 'Git', 'REST APIs',
  'Responsive Design', 'Chakra UI',
]

const About = () => (
  <section className={styles.about} id="about">
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>
          I love learning new things and being creative, turning ideas into real digital projects.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNum}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.text}>
          <p>
            I'm a full-stack developer and software engineering student with skills in modern web technologies.
            I'm always curious and enjoy building useful projects that solve real problems.
          </p>
          <p style={{ marginTop: '1rem' }}>
            I create responsive, easy-to-use websites using modern tools and methods.
            My aim is to connect good design with strong function so users have a smooth experience.
          </p>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s} className={styles.skillTag}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About