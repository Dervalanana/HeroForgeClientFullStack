import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeatsRepository from "../../repos/FeatsRepository";





export const FeatColumn = ({ level, feats, updater, characterFeats }) => {
    const [column1, setColumn1] = useState([])
    const [column2, setColumn2] = useState([])
    const [column3, setColumn3] = useState([])
    const {characterId} = useParams()
    
    useEffect(() => {
        threeStack()
    }, [level,feats])
    
    const threeStack = () => {
        if (level.characterLevel===1 || level.characterLevel%3 === 0) {
            setColumn1([<div className="sidewaysText">Level {level.characterLevel}</div>,<div className="detailColumn3"> </div>,
            feats.map(feat => {
                const learned = characterFeats.find(cf => {return ((cf.source === "level") && (cf.sourceId === level.id))}) 
                return <div className="detailColumn3"> 
                    {learned?.feat.id === feat.id ? <input name={`level${level.characterLevel}`} type="radio" onChange={() => learnFeat("level", feat.id)} checked/>:
                    <input name={`level${level.characterLevel}`} type="radio" onChange={() => learnFeat("level", feat.id)} />}
                </div>
            }
            )])
        }
        if (level.levelDetails.fixedFeat) {
            setColumn2([<div className="sidewaysText">Fixed {level.classs.name}</div>,<div className="detailColumn3"> </div>,
            feats.map(feat => {
                return <div className="detailColumn3"> 
                    <input name={`level${level.characterLevel}`} checked={feat.id === level.fixedFeat} disabled={feat.id !== level.fixedFeat} type="radio" />
                </div>
            }
            )])
        }
        if (level.levelDetails.featSet) {
            setColumn3([<div className="sidewaysText">{level.classs.name} {level.levelDetails.level}</div>,<div className="detailColumn3"> </div>,
                feats.map(feat => {
                return <div className="detailColumn3">
                    <input name={`${level.classs.name}${level.levelDetails.level}choice`} checked={feat.id === level.classfeatId} 
                        disabled={!(level.levelDetails.featSet.featOptions.find(option => option.id === feat.id))} type="radio" onChange={() => learnFeat("classFeat", feat.id)} />
                </div>
            })])
        }
    }
    
    const learnFeat = (source, feat) => {
        const details = {
            characterId: characterId,
            feat: feat,
            source: source,
            sourceId: level.id
        }
        FeatsRepository.learn(details).then(updater)
    }


    return <>
        <div className="flexside">
            <div className="flexdown">
                {column1}
            </div>
            <div className="flexdown">
                {column2}
            </div>
            <div className="flexdown">
                {column3}
            </div>
        </div>
    </>
}