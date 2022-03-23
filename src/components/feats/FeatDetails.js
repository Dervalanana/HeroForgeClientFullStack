import React, { useEffect, useState, useRef } from "react";

export const FeatDetails = ({feat}) => {
    const preReqString = () => {
        let stringBuilder = ""
        for(const prop in feat){
            if(prop!=="id"&&prop!=="name"&&prop!=="description"&&feat[prop]!==null){
                const [propParser,] = prop.split("PR")
                stringBuilder+= (propParser.slice(0,4)==="feat" ? `${feat[prop].name}, ` : `${propParser.toUpperCase()} ${feat[prop]}+, `)
            }
        }
        if(stringBuilder.length) return stringBuilder.slice(0,-2)
    }
    return <>
        <div className="flexside">
            <div className="detailColumn1">{feat.name}</div>
            <div className="detailColumn2">{preReqString()}</div>
            <div className="detailColumn3">{feat.description}</div>
        </div>
    </>

}