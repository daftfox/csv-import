// Bind to the port supplied by the host (or default to 9001) because this is what Heroku requires
module.exports = {
  port: process.env.PORT || 9001
};