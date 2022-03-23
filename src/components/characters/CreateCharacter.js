import React from "react";
import { useHistory } from "react-router-dom";
import CharacterRepository from "../../repos/CharacterRepository";

export const CreateCharacter = ({ refresh, sync }) => {
    const history = useHistory()
    const postCharacter = () => {
        const newCharacter = {
            "xp": 0,
            "name": document.querySelector(`[name=characterName]`).value,
            "campaign": document.querySelector(`[name=campaignName]`).value,
            "str": 10,
            "dex": 10,
            "con": 10,
            "int": 10,
            "wis": 10,
            "cha": 10,
            "raceId": 1,
        }
        CharacterRepository.create(newCharacter).then(res=>  CharacterRepository.get(res.id).then(refresh)).then(()=>CharacterRepository.getAll().then(sync))
    }

    return <>
        <div>Create a new character</div>
        <div>
            Character Name:<input name="characterName"></input>
            Campaign Name:<input name="campaignName"></input>
            <button type="submit"
                className="btn btn-primary"
                onClick={postCharacter}> Submit </button>
        </div>

    </>
} 