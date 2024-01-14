import React from "react"
import { Link } from "react-router-dom"

function Recipe({ id, name }) {
    return (
        <>
            <Link to={`/recipes/${id}`} >{name}</Link>
        </>
    )
}

export default Recipe
