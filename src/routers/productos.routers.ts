import { Router } from "express";
import { getAll, postAll, updateAll, deleteAll} from "../controllers/productos.controller.ts";
const ruta = Router()

ruta.get("/all", getAll)
ruta.post("/insertar", postAll)
ruta.put("/update", updateAll)
ruta.delete("/delete", deleteAll)

export default ruta;