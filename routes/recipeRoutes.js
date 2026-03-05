import express from "express";
import mongoose from "mongoose";
import {createRecipe ,getAllRecipes,singleRecipes,recipeUpdate,receiptDelete } from "../controllers/recipeController.js";

// we have to import router 
const router = express.Router() 

// api call

//post api call for post the data
router.post("/recipeapps", createRecipe)


//get api call for get all the data

router.get("/recipeapps", getAllRecipes);

router.get("/recipeapps/:id", singleRecipes );

router.put("/recipeapps/:id", recipeUpdate);

router.delete("/recipeapps/:id",receiptDelete);


export default router;