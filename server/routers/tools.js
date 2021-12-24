const express = require("express");
const router = express.Router();
const ToolsController = require("../controllers/tools");
const tool = require("../models/tool")
router
  .route("/")
  .get(ToolsController.find_All)
  .post(async(req,res)=>{
        var data = req.body ; 
        var newTool = await tool.create(data, {new:true})
        res.send(newTool)  
      });

router
  .route("/:itemId")
  .get(ToolsController.find_One)
  .put(ToolsController.update_One)
  .patch(ToolsController.view_Plus_PLUS)
  .delete(ToolsController.remove_One);
module.exports = router;
