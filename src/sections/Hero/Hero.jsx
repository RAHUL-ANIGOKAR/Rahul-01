import styles from './HeroStyles.module.css'
import heroImg from '../../assets/assets/hero-img.png'
import sun from '../../assets/assets/sun.svg'
import moon from '../../assets/assets/moon.svg'
import githubLight from '../../assets/assets/github-light.svg'
import githubDark from '../../assets/assets/github-dark.svg'
import linkedinLight from '../../assets/assets/linkedin-light.svg'
import linkedinDark from '../../assets/assets/linkedin-dark.svg'
import twitterLight from '../../assets/assets/twitter-light.svg'
import twitterDark from '../../assets/assets/twitter-dark.svg'
import CV from '../../assets/assets/RAHUL_RESUME.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme, toggleTheme} = useTheme()
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight :githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight :linkedinDark;
    const twitterIcon = theme === 'light' ? twitterLight :twitterDark;
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer} >
            <img className={styles.hero} 
            src={heroImg} 
            alt='Profile picture of Rahul'/>
            <img 
                className={styles.colorMode}
                src={themeIcon}
                alt='Color Mode Icon'
                onClick={toggleTheme}
                />
        </div>
        <div className={styles.info}>
            <h1>
                Rahul 
                <br />
                Anigolkar
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href='https://www.linkedin.com/in/rahul-anigolkar-199354289/'>
                <img src={linkedinIcon} alt='Github icon'/>
                </a>
                <a href='https://github.com/RAHUL-ANIGOKAR/Rahul-01'>
                <img src={githubIcon} alt='Github icon'/>
                </a>
                <a href='https://x.com/Rahul_Anigolkar'>
                <img src={twitterIcon} alt='twitter icon'/>
                </a>
            </span>
            <p className={styles.description}>
                With a passion for developing modern react wep apps for commercial bussinesses.
            </p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero