const app = require("./app");

const port = process.env.PORT;
const mongoose = require("mongoose");

// database connection
const boostrap = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    app.listen(port, () => {
      console.log(`Application  listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to database connection: ", error);
  }
};

boostrap();
