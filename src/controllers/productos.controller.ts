import { query } from 'express';
import db from '../../database/configDB.ts';

export const getAll = (req: any, res: any) => {
    db.connect(async()=>{


        const datos = (await db.promise().query('SELECT * FROM producto'))[0];
        res.status(200).json({
            Titulo: "Listado de productos",
            Datos: datos
        })
    })
}

export const postAll = async(req: any, res: any) => {    
    try{//recibir datos

        const {Nombre, Precio,Descripcion,Categoria}= req.body;
        if (!Nombre || !Precio || !Descripcion || !Categoria) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        
    //insertar datos
        (await db.promise().query('INSERT INTO producto (Nombre, Precio,Descripcion,Categoria) VALUES (?, ?, ?,?)',[Nombre, Precio,Descripcion,Categoria]));
        res.status(200).json({
            Message:"Insertado correctamnete",
        })
    }
    catch(error){
        res.status(200).json({ error: "Error al insertar el producto", detalle: error.message });
    }
}

export const updateAll = async(req: any, res: any) => {    
    try{//recibir datos
        const { id } = req.query;
        const {Nombre, Precio,Descripcion,Categoria}= req.body;
        
        if (!id) {
            return res.status(200).json({ error: "El ID del producto es obligatorio" });
        }
        (await db.promise().query(`UPDATE producto SET Nombre = COALESCE(?, Nombre), Precio = COALESCE(?, Precio), Descripcion = COALESCE(?, Descripcion), Categoria = COALESCE(?, Categoria) 
             WHERE id = ?`, [Nombre, Precio, Descripcion, Categoria, id]));

         res.status(200).json({ Message: "Actualizado correctamente" });

    } 
    catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto", detalle: error.message });
    }
}

export const deleteAll = async(req: any, res: any) => { 
    try{
        const{id} = req.query;
        if (!id){
            return res.status(200).json??({error:"El ID es obligatorio"});
        }
        await db.promise().query("DELETE FROM producto WHERE id = ?", [id]);

        res.status(200).json({Message:"Producto eliminado correctamente"});
        }
    catch (error) {
        res.status(200).json({error: "Error al eliminar el producto", detalle:error.message});
    }
    
};
