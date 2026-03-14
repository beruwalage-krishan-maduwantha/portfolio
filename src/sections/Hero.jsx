import { FaCode, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={`${styles.greeting} fade-up`}>👋 Hello, I'm</p>
          <h1 className={`${styles.name} fade-up-delay-1`}>
            Beruwalage<br />Krishan<br />Maduwantha
          </h1>
          <p className={`${styles.subtitle} fade-up-delay-2`}>
            Full-Stack Developer & Software Engineering Student
          </p>
          <p className={`${styles.description} fade-up-delay-3`}>
            I love making great websites using clean and creative designs.
            I'm good at modern web tools and always ready to learn and solve new problems.
          </p>
          <div className={`${styles.buttons} fade-up-delay-4`}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaCode /> View Projects
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaEnvelope /> Get In Touch
            </button>
          </div>
        </div>

        <div className={`${styles.imageWrap} fade-up-delay-2`}>
          <div className={styles.profileRing} />
          <img src="/profil.jpg" alt="Krishan Maduwantha" className={styles.profileImg} />
        </div>
      </div>

      {/* Floating cards */}
      <div className={`${styles.floatCard} ${styles.floatCard1}`}>
        <FaCode size={20} />
        <span>Clean Code</span>
      </div>
      <div className={`${styles.floatCard} ${styles.floatCard2}`}>
        <FaMobileAlt size={20} />
        <span>Responsive</span>
      </div>
    </section>
  )
}

export default Hero