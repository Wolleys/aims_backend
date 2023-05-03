const { connect } = require("../database/dbConfig");
const PORT = process.env.PORT || 3300;

// Start server and connect to MySQL DB
const startServer = (app) => {
  try {
    app.listen(PORT, () => {
      console.log("SERVER: started on port", PORT);
      setTimeout(connect, 1000);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = startServer;
