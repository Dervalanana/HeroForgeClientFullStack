import React, { useEffect, useState } from "react"
import LevelRepository from "../../repos/LevelRepository"
import SkillsRepository from "../../repos/SkillsRepository"
import "./SkillTable.css"

export const SkillTable = ({character}) => {
    const [skills, setSkills] = useState([])

    useEffect(()=>{
        SkillsRepository.getAll().then(setSkills)
    },[character])

    const calculateModifier = (ability) => {
        const abilityModifier = Math.floor((ability - 10) / 2)
        return (abilityModifier < 0 ? abilityModifier : `+${abilityModifier}`)
    }

    const calculateRanks = (skill) => {
        let count = 0
        character.level_set?.forEach(level => {
            (level.classs.skillProficiency.find(classSkill => classSkill.skill === skill).value) ? 
                count += level.skillAssignment?.find(levelSkill => levelSkill.skill === skill).points:
                count += (level.skillAssignment?.find(levelSkill => levelSkill.skill === skill).points)/2
        })
        return count
    }
    const maxRankChecker = (skill) => {
        let tracker = false
        character.level_set?.forEach(level =>{
            if (level.classs.skillProficiency?.find(classSkill => classSkill.skill === skill)?.value) tracker=true
        })
        return tracker
    }

    return <div className="SkillTable">
        {skills.map(skill => {
            return <div className="flexside">
                <div className="classSkillCheck">{maxRankChecker(skill.id)?"x":" "}</div>
                <div className="SkillTotal">{`${parseInt(calculateModifier(character[skill.attribute])) + calculateRanks(skill.id)}`}</div>
                <div className="SkillAbility">{calculateModifier(character[skill.attribute])}</div>
                <div className="SkillRanks">{calculateRanks(skill.id)}</div>
                <div className="SkillMisc">0</div>
            </div>
        })}
    </div>
}