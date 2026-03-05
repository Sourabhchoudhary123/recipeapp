import Recipe from "../models/recipeModel.js";
import mongoose from "mongoose";

export const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json({
            success: true,
            message: "Recipe created successfully",
            data: recipe
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get All recipe

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get Single Recipe
export const singleRecipes = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid ID format"
            });
        }

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found",
                success:false
            });
        }

        res.status(200).json({
            success: true,
            message: "Recipe fetched successfully",
            data: recipe
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};
// UpdatedRecipe

export const recipeUpdate = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!recipe) {
            return res.status(404).json({ message: "recipe not found", success: false, data: recipe });
        }

        res.status(200).json({ message: "Recipe updated successfully", data: recipe , success:true});


    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        });
    }
};

// Delete Recipe

export const receiptDelete = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
};
