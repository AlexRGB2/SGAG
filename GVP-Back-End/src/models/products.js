import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  precio: {
    type: Number,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  codeBar: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

export default model("producto", productoSchema);
