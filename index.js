const app = require("./app");

const port = 5000;
// const port = process.env.PORT;
const mongoose = require("mongoose");

// database connection
const boostrap = async () => {
  try {
    // await mongoose.connect(process.env.DATABASE_URL);
    await mongoose.connect(" mongodb+srv://assignment:M8qzuTZGRfOk5qlf@cluster0.ixcymbh.mongodb.net/book-catalog?retryWrites=true&w=majority");

    app.listen(port, () => {
      console.log(`Application  listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to database connection: ", error);
  }
};

boostrap();

/*

 app.post("/user", async (req, res) => {
      const user = req.body;

      const result = await userCollection.insertOne(user);

      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;

      const result = await userCollection.findOne({ email });

      if (result?.email) {
        return res.send({ status: true, data: result });
      }

      res.send({ status: false });
    });
*/
