import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LevelRepository from "../../repos/LevelRepository";
import "./Feats.css"
import { FeatDetails } from "./FeatDetails";
import { FeatColumn } from "./FeatColumn";
import CharacterRepository from "../../repos/CharacterRepository";
import FeatsRepository from "../../repos/FeatsRepository";

export const Feats = () => {
    const[character, setCharacter] = useState({})
    const[feats, setFeats] = useState([])
    const {characterId} = useParams()
    const syncLevels = () => {
        CharacterRepository.get(characterId).then(setCharacter)
    }
    useEffect(()=>{
        syncLevels()
        FeatsRepository.getAll().then(res => setFeats(res.slice(1)))//separates out a filler feat that prevents chain deletions
        
    },[])


    return(
        <>
            <article>
                <h1>Feats</h1>
                <section className="flexside">
                    <section className="flexdown">
                        <h3>Acquisition</h3>
                        <div className="flexside">
                            <div className="detailColumn1">Feat Name</div>
                            <div className="detailColumn2">Pre-requisites</div>
                            <div className="detailColumn3">Short Description</div>
                        </div>
                        {feats.map(feat => <FeatDetails feat={feat} feats={feats}/>)}
                    </section>
                    <section className="flexsidescroll">
                        {character.level_set?.map(level => <FeatColumn feats={feats} level={level} updater={syncLevels} characterFeats={character.learnedFeats}/>)}                        
                    </section>

                </section>
            </article>
        </>
    )
}