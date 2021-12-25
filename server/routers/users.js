const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const UsersController = require("../controllers/users");
// const { , checkUser } = require("../middleware/auth");
var User = require("../models/user");
const {serverEmail, serverPassword} = require("../config/settings").email
console.log(serverEmail, serverPassword)

router.route("/login").post(UsersController.login_a_user);
router.route("/signup").post(UsersController.create_a_user);
router.route("/update/:userId").put(UsersController.find_a_user_and_update);
router.route("/f").post(UsersController.forgot);
router.route("/forgot/update").post(UsersController.forgotUpdate);
router.route("/phone").post(UsersController.send_a_message);

router.route("/getone/:userId").get(async(req, res) => {
    const id = req.params.userId;
    const user = await User.findById({_id: id});
    res.send(user)
});


router.route("/updates/:userId").put(async (req,res)=>{
    const id = req.params.userId;
    const data = req.body;
    for (var k in data) {
        if(data[k]==="")
        {
            delete data[k];
        }
    }
 

    const updatedUser = await User.findByIdAndUpdate({_id:id},data , {new:true})
    res.send(updatedUser);
});
router.route("/f").post(UsersController.forgot);
router.route("/forgot/update").post(UsersController.forgotUpdate);
router.route("/phone").post(UsersController.send_a_message);
// prettier-ignore
router.route("/")
    .get(UsersController.find_All) // for the Admin
    .post( UsersController.create_A_New_One) // will be used from the interface of the admin
// .put(UsersController.update); // to ban, unban, lock account, etc ...

// prettier-ignore
router.route("/:userId")
    .get(UsersController.find_One) // user can read data of a specific user
    .put( UsersController.update_One) // user can update / disable his own account (or be banned or locked by the admin)
    .delete( UsersController.remove_One) // user can remove his own account

// prettier-ignore
router.route("/:userId/tools")
    .get(UsersController.find_All_Tools_of_Specific_User) // useful for the user & admin too
    .post( UsersController.create_One_Tool_of_Specific_User) // admin can add for a user an tool too if the user asked for help
    .delete( UsersController.remove_All_Tools_of_Specific_User) // a user can delete all his tools, or an admin can do it for a specific user

// prettier-ignore
router.route("/:userId/tools/:toolId")
    .get(UsersController.find_One_Tool_of_Specific_User) // any user (or admin) can have acces to a specific tool of a specific user
    .put( UsersController.update_One_Tool_of_Specific_User) // only the owner or admin can modify (or ban) a specific tool
    .delete( UsersController.remove_One_Tool_of_Specific_User) // only the owner (or any admin) can remove a specific tool that he owns




    router.post("/feedback", async (req, res) => {
      // Retreive data from req.body with destructuring
      let { content ,email, subject, text, html } = req.body; // if you rename one of these variable, the sever will brake
      //
      // if the email is not specified from the font-end side, it will take a default testing email:
      if (!email) email = "aminejelassi95@gmail.com";
      //
      // if the subject is not specified from the font-end side, it will take a default value as a boilerplate:
      if (!subject) subject = "A new user made a feedback";
      //
      // if the text is not specified from the font-end side, it will take a default value as a boilerplate:
      if (!text) text = ""; // this is at the same time useless & usefull later, the text variable should be specified (even as an empty value), because, if we pass the content of the html variable as a text, the content of html will be shown with the html tags hardcoded
      //
      // if the html is not specified from the font-end side, it will take a default value as a boilerplate: (ARROW FUNCTION !!!!)
      const init_HTML_Message = (fullName , content ) =>
        `<p>Hello ${fullName}</p>
        <p>${content}</p>`;
    
    
          // if the html is not specified from the font-end side, it will take a default value as a boilerplate
          if (!html) {
            html = init_HTML_Message( "amine jelassi", content);
          }
    
          // we create a newMail settings, which take, the email of person who lost his password, the subject of the mail, the text & the html that will be shown when the person receive an email from our server
          const newMail = { email, subject, text, html };
          //
          // this function will send an email directly to the user
    
          //
          // send a response to the front end saying that the server did his job
          
    
            let transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: serverEmail, // generated ethereal user
                pass: serverPassword, // generated ethereal password
              },
            });
        
            try {
              // send mail with defined transport object
              console.log('AAAAAAAAAAAA', transporter);
              let info = await transporter.sendMail({
                from: `"tools renter 👻" <${serverEmail}>`, // sender address
                to: email, // list of receivers
                subject: subject, // Subject line
                // text: "Hello world?", // plain text body
                html: html, // html body
              });
        
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              res
            .status(201)
            .json(
              "We've sent to you an email containing new link for reseting password for your teacher account"
            );
            } catch (error) {
              console.error(error)
            }
    
    
      // followed this guide: https://mailtrap.io/blog/nodemailer-gmail/
    });















// prettier-ignore
router.route("/:userId/tools/:toolId/comments/:commentId")
// .get(UsersController.find_One_Comment_of_Specific_Tool_of_Specific_User)
// .put(UsersController.update_One_Comments_of_Specific_Tool_of_Specific_User)
// .delete(UsersController.remove_One_Comments_of_Specific_Tool_of_Specific_User)
router.route("/getone/:userId").get(async (req, res) => {
  const id = req.params.userId;
  const user = await User.find({ _id: id });
  res.send(user);
});

router.route("/update/:userId").put(async (req, res) => {
  const id = req.params.userId;
  const data = req.body;
  
  for (var k in data) {
    if (!data[k]) {
      delete data[k];
    }
  }
  const updatedUser = await User.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  res.send(updatedUser);
});
router.route("/f").post(UsersController.forgot);
router.route("/forgot/update").post(UsersController.forgotUpdate);
router.route("/phone").post(UsersController.send_a_message);

module.exports = router;
