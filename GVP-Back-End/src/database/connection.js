import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://AlexRGB:q5xQa1C8qV88FCAH@cluster0.hm1sfft.mongodb.net/gvp"
    );
    console.log("Conecction From", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
