import React, { useEffect, useState } from "react";
import LevelRepository from "../../repos/LevelRepository";
import ClassRepository from "../../repos/ClassRepository";

export const LevelRow = ({ chara, level, sync}) => {
    const [classList, setClassList] = useState([])
    const [stats, setStats] = useState([])
    
    useEffect(() => { ClassRepository.getAll().then(setClassList)}, [])
    useEffect(() => { setStats([Math.floor((chara["con"] - 10) / 2), Math.floor((chara["int"] - 10) / 2)]) }, [chara])

    const roll = () => {
        const details = {
            HDRoll:0
        }
        details.HDRoll = Math.ceil(Math.random() * level.classs.HD)
        LevelRepository.update(level.id, details).then(sync)
    } //

    const updateClass = (e) => {
        LevelRepository.changeClass(level.id, {characterId:chara.id, classs:parseInt(e.target.value)}).then(sync)
    }

    const deleteLevel = () => { 
        LevelRepository.delete(level.id).then(sync)
    }
    const addLevel = () => {
        const details = {
            character:chara.id,
            filler: "filler"
        }
        LevelRepository.create(details).then(sync)
    }


    return <>
        <div className="flexside">
            <div className="levelgridColumn1">{level.characterLevel}</div>
            <div className="levelgridColumn2"><select
                name={"classSelect"}
                className="form-control small"
                onChange={updateClass}
            >
                <option value="">
                    Select a class
                </option>
                {
                    classList?.map(o => <option key={o.id} value={o.id} selected={o.id === level?.classs.id}>{o.name}</option>)
                }
            </select>
            </div>
            <div className="levelgridColumn3">{level.classs?.HD}
            </div>
            <div className="levelgridColumn4">{`${level.classs?.skillPoints + stats[1]}`}
            </div>
            <div className="levelgridColumn5">
                HP (including con): {level.HDRoll !== 0 ? level.HDRoll + stats[0] : "Not rolled"}<br />
                <button type="submit"
                    onClick={roll}
                    className="btn btn-primary"> ROLL! </button>

            </div>
            {/* obnoxious notation with the chained ternary */}
            <div className="levelgridColumn6">
                {chara.level_set.length === level.characterLevel ?
                    <><button onClick={addLevel}>+</button>{level.characterLevel!== 1 ?<button onClick={deleteLevel}>-</button>:null}</>:null
                }

            </div>
        </div>

    </>

}