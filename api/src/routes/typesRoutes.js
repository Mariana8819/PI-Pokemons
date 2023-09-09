require("dotenv").config();
const {Router} = require("express");
const axios = require("axios");
const { createTypesDb } = require("../controllers/allTypesControllers");


const router= Router();

router.get("/", async(req, res)=>{
    try {
        const createTypes = await createTypesDb();
        res.status(200).json(createTypes)
    } catch (error) {
        res.status(400).json(`Here is the error: ${error.message}`);
    }
})

module.exports= router;