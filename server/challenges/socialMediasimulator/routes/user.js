const { handleLoginController, handleLogoutController, handleSearchController, handleSettingsController } = require('../controllers/user') ;


const router = require('express').Router();

router.post('/login',handleLoginController);
router.post('/search',handleSearchController);
router.post('/logout',handleLogoutController);
router.post('/settings',handleSettingsController);

module.exports = router;