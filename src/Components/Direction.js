import React from "react";
import { useContext } from 'react';
import { userContext } from "./UserContext";

export default function Direction() {
    const userCtx = useContext(userContext);
    return (
        <>
            <h2>עליך להכניס את כל הפרטים המבוקשים</h2>
            <p>הכנס את פרטיך, לאחר מכן הכנס את מס' הילדים ואז הזן את פרטי ילדיך</p>
        </>
    )
}