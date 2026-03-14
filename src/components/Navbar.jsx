import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Projects', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (link) => {
    setActive(link)
    setOpen(false)
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>BKM</div>
        <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button
                className={`${styles.link} ${active === l ? styles.active : ''}`}
                onClick={() => handleClick(l)}
              >{l}</button>
            </li>
          ))}
        </ul>
        <button className={styles.burger} onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar