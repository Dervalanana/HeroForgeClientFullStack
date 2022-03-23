import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SkillDetails } from "./SkillDetails"
import SkillsRepository from "../../repos/SkillsRepository";
import LevelRepository from "../../repos/LevelRepository";
import "./Skills.css"
import { SkillColumn } from "./SkillColumn";
import CharacterRepository from "../../repos/CharacterRepository";

export const Skills = () => {
    const [skills, setSkills] = useState([])
    const { characterId } = useParams()
    const [character, setCharacter] = useState({})
    const [classSkills, setClassSkills] = useState([])

    const sync = () => {
        CharacterRepository.get(characterId).then(setCharacter)
    }
    const syncClassSkills = () => {
        setClassSkills(
            character?.level_set?.map(level => level.classs.skillProficiency)
        )
    }

    useEffect(() => {
        sync()
        SkillsRepository.getAll().then(setSkills)
    }, [])

    useEffect(()=> {
        syncClassSkills()
    },[character])

    return (
        <>
            <article>
                <h1>Skills</h1>
                <section className="flexside">
                    <section className="flexdown">
                        <h3>Level</h3>
                        <h3>Points</h3>
                        <div className="flexside">
                            <div className="skillColumn1">Skill name</div>
                            <div className="skillColumn2">Total</div>
                            <div className="skillColumn2">Stat</div>
                            <div className="skillColumn2">Ranks</div>
                            <div className="skillColumn2">Max Ranks</div>
                        </div>
                        <div className="flexdown">
                            {skills.map(skill => <SkillDetails skill={skill} character={character} />)}
                        </div>
                    </section>
                    <section className="flexsidescroll">
                        {character?.level_set?.map(level=> <SkillColumn character={character} level={level} updater={sync}/>)}
                    </section>
                </section>
            </article>
        </>
    )
}