import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ClassRepository from "../../repos/ClassRepository";
import LevelRepository from "../../repos/LevelRepository";
import "./CharacterDetails.css"

export const CharacterDetails = ({ character }) => {
    const [levelReadout, setLevelReadout] = useState("")
    const [levelWatcher, setLevelWatcher] = useState([])
    
    useEffect(() => {
        setLevelReadout(convertClasses().join("||"))
    },[character])

    
    const convertClasses = () => {
        const levellingDummy = new Set()
        character.level_set?.forEach(level => levellingDummy.add(`${level.classs.name} ${character.level_set.filter(allLevel => allLevel.classs.name === level.classs.name).length}`))
        return Array.from(levellingDummy)
    }

    return (<div className="CharacterDetails">
        <div className="CharacterName">{character.name}</div>
        <div className="PlayerName">{character.user?.name}</div>
        <div className="Classes">{levelReadout}</div>
        <div className="Race">{character.race?.name}</div>
    </div>)
}