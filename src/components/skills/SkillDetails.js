import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CharacterRepository from "../../repos/CharacterRepository";

export const SkillDetails = ({skill, character}) => {
    const [ranks, setRanks] = useState(0)
    const [rankFlag, setRankFlag] = useState(false)
    const maxRanks = () => {
        character.level_set?.forEach((l,i) => {
            const identifier = document.querySelector(`#classLevel--${i+1}--skill${skill.id}`)
            if(identifier?.className==="classSkill") setRankFlag(true) 
        })
    }
    const totalRanks = () => {
        let total = 0
        character.level_set?.forEach((l,i) => {
            const identifier = document.querySelector(`#classLevel--${i+1}--skill${skill.id}`)
            identifier?.className==="crossClassSkill" ? total += parseInt(identifier?.value)/2 : total += parseInt(identifier?.value) 
        })
        setRanks(total)
    }
    useEffect(()=>{
        totalRanks()
        maxRanks()
    },[character])

    return <>
        <div className="flexside">
            <div className="skillColumn1">{skill.name}</div>
            <div className="skillColumn2">Total: {ranks + Math.floor((character?.[skill.attribute]-10)/2)}</div>
            <div className="skillColumn2">{skill.attribute}</div>
            <div className="skillColumn2">{ranks}</div>
            <div className="skillColumn2">{rankFlag?character?.level_set?.length+3:(character.level_set?.length+3)/2}</div>
        </div>
    </>

}