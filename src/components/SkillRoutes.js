import React from "react"
import { Route } from "react-router-dom"
import { ClassSkillGenerator } from "./skills/ClassSkillGenerator"
import { Skills } from "./skills/Skills"

export const SkillRoutes = () => {
    return <>
        <Route exact path="/:characterId(\d+)/skills">
            <Skills />
        </Route>
        <Route exact path="/classSkillGenerator">
            <ClassSkillGenerator />
        </Route>
    </>
}