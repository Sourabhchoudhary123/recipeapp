import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true, "Title is required"],
            trim:true,
            minlength:3
        },
        ingredients:{
            type:[String],
            required:[true,"Ingredient are required"]
        },
        instructions: {
            type: String,
            required:[true,"Instruction are required"]
        },
        cookingTime:{
            type:Number,
            required:[true,"cooking Time is required"],
            min:1
        }
    },
    {timestamps:true}
);
//collection and model
const Recipe = mongoose.model("recipe", recipeSchema);
export default Recipe;