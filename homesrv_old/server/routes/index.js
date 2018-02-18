import ModbusHandler from "../controllers/ModbusHandler"

const path=`${process.cwd()}/server`;

const routes=(app)=>{
  const modHandler =  new ModbusHandler()
  modHandler.init()

  app.get("/", (req, res) => {
    res.sendFile(`${path}/index.html`);
  })

  app.get("/api/ustawienia/konfiguracja", modHandler.getUstawieniaKonfiguracja);
  
  app.post("/api/rejestr/wy", modHandler.zmienWy)  
  app.post("/api/rejestr/temp", modHandler.zmienTemp)
}
export default routes
