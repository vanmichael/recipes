import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

function Ingredients({ title = 'Ingredients needed', ingredients }) {
    return (
        <div>
            {ingredients && (
            <List>
                <h3>{title}</h3>
                {ingredients.map((ingredient) => (
                <ListItem key={ingredient}>
                    <ListItemText>{ingredient}</ListItemText>
                </ListItem>
                ))}
            </List>
            )}
        </div>
    )
}

export default Ingredients
