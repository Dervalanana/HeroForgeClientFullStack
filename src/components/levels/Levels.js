import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterRepository from "../../repos/CharacterRepository";
import "./CharacterSelect.css"
import { LevelRow } from "./LevelRow";

export const Levels = () => {
    const [character, setCharacter] = useState({})
    const { characterId } = useParams()

    useEffect(() => { sync() }, [])
    const sync = () => {
        CharacterRepository.get(characterId).then(setCharacter)
    }

    return (
        <>
            <h1>Levels</h1>
            <div/>
            <article className="levels">
                <section className="flexside">
                    <section className="flexdown">
                        <div className="flexside">
                            <div className="levelgridColumn1">Level:</div>
                            <div className="levelgridColumn2">Class:</div>
                            <div className="levelgridColumn3">HD</div>
                            <div className="levelgridColumn4">Skill Points</div>
                            <div className="levelgridColumn5">HP Total</div>
                        </div>
                        {character?.level_set?.map(level => {
                            return <LevelRow chara={character} level={level} sync={sync}/>
                        })}
                    </section>
                    <section className="specials">
                        <h3>Special</h3>
                        <div className="exampleBox">
                            <h4>Class in question</h4>
                            <div>
                                <div>Name of feature</div>
                                <select>
                                    <option>placeholder</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </section>
            </article>
            <div/>
        </>
    )
}