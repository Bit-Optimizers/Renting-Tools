const express = require("express");
const router = express.Router();
const ToolsController = require("../controllers/tools");
const tool = require("../models/tool")
router
  .route("/")
  .get(ToolsController.find_All)
  .post(ToolsController.create_A_New_One)



router
  .route("/:itemId")
  .get(ToolsController.find_One)
  .put(ToolsController.update_One)
  .patch(ToolsController.view_Plus_PLUS)
  .delete(async(req,res)=>{
   const id = req.params.itemId;
   const dele = await tool.findByIdAndRemove({ _id: id},{new:true})
   console.log(dele)
  });
module.exports = router;
