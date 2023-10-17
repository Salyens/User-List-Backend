const router = require("express").Router();
const UserController = require("@controllers/UserController");
const registrationValid = require("@middlewares/registrationValid");
const verifyToken = require("@middlewares/verifyToken");

router.post("/registration", [registrationValid], UserController.registration);
router.post("/login", UserController.login);
router.delete("/delete", [verifyToken], UserController.delete);
router.patch("/update", [verifyToken], UserController.update);
router.get("/me", [verifyToken], (req, res) => res.send(req.user));
router.get("/", [verifyToken], UserController.getAllUsers);

module.exports = router;
