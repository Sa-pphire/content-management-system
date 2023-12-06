const { Router } = require("express");
const userController = require("../controllers/userController");
require('../services/passport');

const router = Router();

router.post("/signup", userController.create )

router.post("/login", userController.login)

router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['email', 'profile'],
    }),
);
  
router.get(
    '/google/redirect',
    passport.authenticate('google', {
      session: false,
    }),
    userController.handleAuth,
);

router.get("/", userController.getUsers)

router.put("/:id/update", userController.update)

router.get("/logout", userController.logout)

module.exports = router