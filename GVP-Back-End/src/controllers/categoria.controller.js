import categoria from "../models/categoria";

export const getCategorias = async (req, res) => {
    const categorias = await categoria.find().lean();
    return res.json(categorias);
};

export const addCategoria = async (req, res) => {
    const { nombre } = req.body;
    const newCategoria = {
        nombre: nombre,
    };
    const categorias = categoria(newCategoria);
    const categoriaSave = await categorias.save();
    res.json(categoriaSave);
};

export const removeCategoria = async (req, res) => {
    const { name } = req.params;
    const categorias = await categoria.findOne({ nombre: name });

    if (categorias == null) {
        res.json({ msg: "category not found" });
    } else {
        const updateCategoria = await categoria.remove({ nombre: name });
        res.json(updateCategoria);
    }
}


export const updateCategoria = async (req, res) => {
    const { nombre } = req.body;
    const { name } = req.params;

    const categorias = await categoria.findOne({ nombre: name });

    if (categorias == null) {
        res.json({ msg: "category not found" });
    } else {
        if(nombre != null && nombre != '') await categoria.updateOne({nombre: name}, {$set: {nombre: nombre}});
        const updateCategoria = await categoria.findOne({ nombre: nombre });
        res.json(updateCategoria);
    }
};

export const searchCategoriaByName = async (req, res) => {
    const { name } = req.params;
    const categoriaList = await categoria.find({ nombre: {$regex: '.*'+name+'*.'} });

    res.json(categoriaList);
};