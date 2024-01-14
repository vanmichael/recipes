import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"

const ingredientToString = (ingredient): string => {
  const { name, unit, amount } = ingredient
  return `${amount} ${unit} of ${name}`
}

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    try {
      const id = req.params.id
      if (id) {
        const recipe = await RecipeModel.findById(id).exec();
        if (recipe) {
          const ingredientsAsStrings = recipe.ingredients.map((ingredient) => ingredientToString(ingredient))
          const response = {
            name: recipe.name,
            instructions: recipe.instructions,
            ingredients: ingredientsAsStrings
          }
          res.send(response);
        } else {
          res.status(404).send('Not found')
        }
      } else {
        res.status(400).send('Missing recipe id')
      }
    } catch(err) {
      next(err)
    } 
}
