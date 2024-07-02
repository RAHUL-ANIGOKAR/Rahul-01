import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.SkillList}>
            <SkillList src={checkMarkIcon} skills="HTML"/>
            <SkillList src={checkMarkIcon} skills="CSS"/>
            <SkillList src={checkMarkIcon} skills="JAVASCRIPT"/>
            <SkillList src={checkMarkIcon} skills="TYPESCRIPT"/>
            <SkillList src={checkMarkIcon} skills="NODE"/>
        </div>
        <hr />
        <div className={styles.SkillList}>
            <SkillList src={checkMarkIcon} skills="React"/>
            <SkillList src={checkMarkIcon} skills="Angular"/>
            <SkillList src={checkMarkIcon} skills="React Native"/>
       </div>
    </section>
  )
}

export default Skills