import React, { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import Recipe from "../../Components/Recipe"
import Ingredients from "../../Components/Ingredients"
import { RecipePageWrapper } from "./styles"
import * as actions from "../../actions"

function RecipePage(props) {
  let { id } = useParams()

  const recipe = useSelector(state => state.recipe)

  useEffect(() => {
    props.findRecipe(id)
  }, [id])

  return (
    <RecipePageWrapper>
      <h3>{props.title}</h3>
      <Recipe name={recipe.name} id={recipe.id} />
      <Divider />
      <h3>Back to search recipes</h3>
      <Link to='/' >Home</Link>
      <Divider />
      {recipe && recipe.ingredients && (
        <Ingredients ingredients={recipe.ingredients}/>
      )}
    </RecipePageWrapper>
  )
}

const mapStateToProps = (state) => {
    const { search, recipe } = state
    return { ...search, recipe }
}
  
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        findRecipe: actions.findRecipe,
        },
        dispatch
    )

  export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
