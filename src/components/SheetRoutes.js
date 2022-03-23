import React from "react"
import { Route } from "react-router-dom"
import { Sheets } from "./sheets/Sheets"

export const SheetRoutes = () => {
    return <>
        <Route exact path="/:characterId(\d+)/sheets">
            <Sheets />
        </Route>
    </>
}