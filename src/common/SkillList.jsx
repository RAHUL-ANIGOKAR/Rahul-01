function SkillList ({src, skills}) {
    return(
        <span>
            <img src={src} alt="Checkmark Icon"/>
            <p>{skills}</p>
        </span>
    )
}
export default SkillList