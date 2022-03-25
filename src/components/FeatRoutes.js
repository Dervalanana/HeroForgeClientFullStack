import React from "react"
import { Route } from "react-router-dom"
import { FeatCreator } from "./feats/FeatCreator"
import { Feats } from "./feats/Feats"

export const FeatRoutes = () => {
    return <>
        <Route exact path="/:characterId(\d+)/feats">
            <Feats />
        </Route>
        <Route exact path="/featCreator">
            <FeatCreator />
        </Route>
    </>
}