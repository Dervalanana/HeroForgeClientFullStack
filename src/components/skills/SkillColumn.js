import React, { useEffect, useRef, useState } from "react";
import CharacterRepository from "../../repos/CharacterRepository";
import SkillsRepository from "../../repos/SkillsRepository";

export const SkillColumn = ({ level, updater, character }) => {
    const [skillPointsMax, setSkillPointsMax] = useState(0)
    const [spentPoints, setSpentPoints] = useState(0)
    const [levelSkills, setLevelSkills] = useState([])
    const skillRef = useRef()

    useEffect(() => {
        setSkillPointsMax(
            (level.characterLevel === 1) ? (Math.floor((character["int"] - 10) / 2) + level?.classs?.skillPoints) * 4 : (Math.floor((character["int"] - 10) / 2) + level?.classs?.skillPoints))
        setLevelSkills(level?.skillAssignment?.sort((a, b) => a.skill - b.skill))
        calcSpentPoints()
    }, [level])

    useEffect(() => {
        updater()
    }, [])

    const spendPoints = (evt, levelSkill) => {
        const points = {points: parseInt(evt.target.value)}
        SkillsRepository.spendPoints(levelSkill.id, points).then(updater)
    }

    const calcSpentPoints = () => {
        let spent = 0
        Array.from(skillRef.current).forEach(levelSkill => {
            spent += parseInt(levelSkill.value)
        })
        setSpentPoints(spent)
    }

    return <>
        <div className="flexdown">
            <h3 className="skillColumn3">{level.characterLevel}</h3>
            <h3 className="skillColumn3">{skillPointsMax - spentPoints}</h3>
            <div className="classSkillBlank" />
            <form className="skillColumn4" ref={skillRef}>
                {levelSkills.map(levelSkill =>
                    <input id={`classLevel--${level.characterLevel}--skill${levelSkill.skill}`}
                        defaultValue={levelSkill.points}
                        onBlur={(evt) => spendPoints(evt, levelSkill)}
                        className={level.classs.skillProficiency?.find(skill => levelSkill.skill === skill.skill).value ? "classSkill" : "crossClassSkill"} />)}
            </form>
        </div>
    </>
}