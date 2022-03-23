import React, {useState, useEffect} from "react";
import FeatsRepository from "../../repos/FeatsRepository";
import LevelRepository from "../../repos/LevelRepository";

export const SpecialAbilities = ({character}) => {
    const [feats, setFeats] = useState([])
    const [abilities, setAbilities] = useState([])
    const buildTracker = () => {
        let abilityTracker = []
        let featTracker = []
        character.level_set?.forEach(level => {
            if(level.levelDetails.features !== "") {abilityTracker.push(level.levelDetails.features)}
        })
        character.learnedFeats?.forEach(characterFeat => featTracker.push(`${characterFeat.feat.name}: ${characterFeat.feat.description}`))
        setFeats(featTracker)
        setAbilities(abilityTracker)
    }

    useEffect(()=> {
        buildTracker()
    },[character])


    return<>
        <div className="featsAndAbilities">
            {feats.map(feat => <div className="specialAbilityRow">{`${feat.name}: ${feat.description}`}</div>)}
            {abilities.map(feat => <div className="specialAbilityRow">{`${feat}`}</div>)}
        </div>
    </>
}