import express from "express";
import mongoose from "mongoose";
import {createRecipe ,getAllRecipes,getRecipeById,updateRecipe,deleteRecipe } from "../controllers/recipeController.js";

// we have to import router 
const router = express.Router() 

// api call

//post api call for post the data
router.post("/recipeapps", createRecipe)


//get api call for get all the data

router.get("/recipeapps", getAllRecipes);

router.get("/recipeapps/:id", getRecipeById );

router.put("/recipeapps/:id", updateRecipe);

router.delete("/recipeapps/:id",deleteRecipe);


export default router;