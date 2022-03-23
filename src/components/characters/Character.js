import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CharacterRepository from "../../repos/CharacterRepository";
import { CharacterSelectDelete } from "./CharacterSelectDelete";
import "./CharacterSelect.css"
import { CreateCharacter } from "./CreateCharacter";

export const Character = () => {
    const [characters, setCharacters] = useState([])
    const history = useHistory()
    const { characterId } = useParams() //this is going to be a string by default
    const [currentCharacter, setCharacter] = useState()
    const syncCharacters = () => { CharacterRepository.getAll().then(setCharacters) }

    useEffect(() => {
        //get all characters you're allowed to see
        syncCharacters()
        characterId && CharacterRepository.get(characterId).then(setCharacter)
    }, [])

    const changeCharacter = () => {
        document.querySelector(`[name=characterSelect]`).value ? //throws a big error if it can't find anything
            history.push(`/${document.querySelector(`[name=characterSelect]`).value}/character`) :
            history.push("/character")
    }
    const deleteCharacter = () => {
        const holder = document.querySelector(`[name=characterDelete]`).value
        CharacterRepository.delete(parseInt(holder)).then(() => {
            holder !== characterId ? //throws a big error if it can't find anything
                history.push(`/${characterId}/character`) :
                history.push("/character")
            syncCharacters()
        })

    }

    return (
        <>
            <article>
                <h1>Character Selection</h1>
                {currentCharacter ? <h2>Currently viewing {currentCharacter.name}</h2> : <h2>you gotta select a character if you want to go anywhere other than here or the landing page</h2>}
                <section className="flexdown">
                    <section className="flexside">
                        <CharacterSelectDelete characters={characters} sync={setCharacter}/>
                        <button type="submit"
                            onClick={changeCharacter}
                            className="btn btn-primary"> Submit </button>
                        <CharacterSelectDelete characters={characters} deleter />
                        <button type="submit"
                            onClick={deleteCharacter}
                            className="btn btn-primary"> Submit </button>
                    </section>
                    <CreateCharacter refresh={setCharacter} sync={setCharacters}/>

                </section>
                <section>
                    <div>Character Name:{currentCharacter?.name}</div>
                    <div>experience: {currentCharacter?.xp}</div>
                    <div>campaign: {currentCharacter?.campaign}</div>
                </section>
                <pre>{JSON.stringify(currentCharacter,undefined,2)}</pre>
            </article>
        </>
    )
}