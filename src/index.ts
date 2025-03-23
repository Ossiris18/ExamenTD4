import dot from 'dotenv'
import express from 'express'
import {productosRouters} from "./routers/index.ts"

dot.config({path:'/home/taller4N/productos/src/.env'})

const app = express();
app.use(express.json())
// const port=process.env.PORT||3000;

const port = process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hola Productos')
})

app.use("/productos",productosRouters)
app.listen(port, () =>{
    console.log(`Puerto siendo escuchado en: ${port}`)
})

