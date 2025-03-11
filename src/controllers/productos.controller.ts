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