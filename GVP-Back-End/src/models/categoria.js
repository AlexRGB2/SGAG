import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  }
});

export default model("categoria", categoriaSchema);