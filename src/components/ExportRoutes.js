import React from "react"
import { Route } from "react-router-dom"
import { CharacterJunk } from "./dataexport/charater"
import { ClassLevelJunk } from "./dataexport/classLevels"
import { ClassJunk } from "./dataexport/classs"
import { ClassSkillJunk } from "./dataexport/classSkill"
import { FeatJunk } from "./dataexport/feats"
import { LevelJunk } from "./dataexport/level"
import { LevelSkillJunk } from "./dataexport/levelSkills"
import { RaceJunk } from "./dataexport/races"
import {SkillJunk} from "./dataexport/skills"

export const ExportRoutes = () => {
    return <>
        <Route exact path="/exportSkills">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <SkillJunk />
        </Route>
        <Route exact path="/exportClass">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <ClassJunk />
        </Route>
        <Route exact path="/exportClassSkill">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <ClassSkillJunk />
        </Route>
        <Route exact path="/exportFeat">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <FeatJunk />
        </Route>
        <Route exact path="/exportRace">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <RaceJunk />
        </Route>
        <Route exact path="/exportCharacter">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <CharacterJunk />
        </Route>
        <Route exact path="/exportLevel">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <LevelJunk />
        </Route>
        <Route exact path="/exportLevelSkill">
            <h1>you found the hidden text! zomg</h1>
            <h1>you found the hidden text! zomg</h1>
            <LevelSkillJunk />
        </Route>
    </>
}