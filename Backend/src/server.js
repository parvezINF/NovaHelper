const app = require("./app");
const { testConnection } = require("./config/DB");

const startServer = async () => {
  try {
    await testConnection();

    app.listen(process.env.PORT, () => {
      console.log(`Server : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Server Error:", error);
    process.exit(1);
  }
};

startServer();
