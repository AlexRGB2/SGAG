import products from "../models/products";

export const getProducts = async (req, res) => {
  const product = await products.find().lean();
  return res.json(product);
};

export const getProduct = async (req, res) => {
  const { codeBar } = req.params;
  const product = await products.findOne({ codeBar: codeBar });
  res.json(product);
};

export const addProduct = async (req, res) => {
  const { nombre, precio, tipo, stock, codeBar, img } = req.body;
  const newProduct = {
    nombre: nombre,
    precio: precio,
    tipo: tipo,
    stock: stock,
    codeBar: codeBar,
    img: img,
  };

  const codeBarDup = await products.findOne({ codeBar: codeBar });
  if (codeBar != codeBarDup) {
    const product = products(newProduct);
    const productsSave = await product.save();
    res.json(productsSave);
  } else {
    res.json({ msg: "Codigo de Barras Duplicado" });
  }
};

export const removeProduct = async (req, res) => {
  const { name } = req.params;
  const product = await products.findOne({ nombre: name });

  if (product == null) {
    res.json({ msg: "product not found" });
  } else {
    const updateProduct = await products.remove({ nombre: name });
    res.json(updateProduct);
  }
};

export const updateProduct = async (req, res) => {
  const { precio, tipo, stock, img } = req.body;
  const { name } = req.params;

  const product = await products.findOne({ nombre: name });

  if (product == null) {
    res.json({ msg: "product not found" });
  } else {
    if (precio != null && precio != 0)
      await products.updateOne({ nombre: name }, { $set: { precio: precio } });
    if (tipo != null && tipo != "")
      await products.updateOne({ nombre: name }, { $set: { tipo: tipo } });
    if (stock != null && precio != 0)
      await products.updateOne({ nombre: name }, { $set: { stock: stock } });
    if (img != null && img != "")
      await products.updateOne({ nombre: name }, { $set: { img: img } });
    const updateProduct = await products.findOne({ nombre: name });
    res.json(updateProduct);
  }
};

export const searchProductByName = async (req, res) => {
  const { name } = req.params;
  const productList = await products.find({
    nombre: { $regex: ".*" + name + "*." },
  });

  res.json(productList);
};

export const searchProductByType = async (req, res) => {
  const { type } = req.params;
  const productList = await products.find({
    tipo: { $regex: ".*" + type + "*." },
  });

  res.json(productList);
};
