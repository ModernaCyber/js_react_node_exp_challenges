const handleLoginController = async( req, res) => {
    res.send('Welcome logged in')
}
const handleLogoutController = async( req, res) => {}
const handleSearchController = async( req, res) => {}
const handleSettingsController = async( req, res) => {}



module.exports = {
    handleLoginController,
    handleLogoutController,
    handleSearchController,
    handleSettingsController
  };