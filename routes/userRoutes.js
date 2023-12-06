const { Router } = require("express");
const userController = require("../controllers/userController");
require('../services/passport');
const authenticate = require('../middlewares/authMiddleware')

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

router.get("/", authenticate, userController.getUsers)

router.put("/:id/update", authenticate, userController.update)

router.get("/logout", authenticate, userController.logout)

module.exports = router