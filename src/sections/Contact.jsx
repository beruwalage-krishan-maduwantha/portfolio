import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => (
  <section className={styles.section} id="contact">
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>Ready to start your next project? Let's create something amazing together</p>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <a href="mailto:krishanmaduwantha2003@gmail.com" className={styles.item}>
            <div className={styles.icon}><FaEnvelope size={20} /></div>
            <div>
              <h3>Email</h3>
              <p>krishanmaduwantha2003@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/beruwalage-krishan-maduwantha" target="_blank" rel="noreferrer" className={styles.item}>
            <div className={styles.icon}><FaGithub size={20} /></div>
            <div>
              <h3>GitHub</h3>
              <p>beruwalage-krishan-maduwantha</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/krishan-maduwantha-a6181b302/" target="_blank" rel="noreferrer" className={styles.item}>
            <div className={styles.icon}><FaLinkedin size={20} /></div>
            <div>
              <h3>LinkedIn</h3>
              <p>Krishan Maduwantha</p>
            </div>
          </a>
        </div>

        <div className={styles.cta}>
          <h3>Ready to collaborate?</h3>
          <p>
            I'm always open to talking about new opportunities, interesting projects, or anything related to technology.
            Whether you need a developer, have an idea to share, or just want to connect — feel free to reach out!
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/beruwalage-krishan-maduwantha" target="_blank" rel="noreferrer" className={styles.social}><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/krishan-maduwantha-a6181b302/" target="_blank" rel="noreferrer" className={styles.social}><FaLinkedin size={20} /></a>
            <a href="mailto:krishanmaduwantha2003@gmail.com" className={styles.social}><FaEnvelope size={20} /></a>
          </div>
          <a href="mailto:krishanmaduwantha2003@gmail.com" className={styles.sendBtn}>
            <FaPaperPlane /> Send Message
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Contact