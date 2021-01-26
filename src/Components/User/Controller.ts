const MDUser = require("./Model");

module.exports = {
  //========================================================================
  //FUNCIÓN TIPO POST, EN EL CUAL SE OBTIENE LA DATA DEL USUARIO PARA CREAR
  //========================================================================
  async CreateUser(req: any, res: any) {
    try {
      //==================================================================================
      //IMPORTAMOS LA FUNCIÓN CREAR USARIO DEL MODELO Y PASAMOS LOS PARAMETROS DEL USARIO
      //==================================================================================
      MDUser.CreateUser(req.body);
      //========================
      // ENVIO DE RESPUESTA API
      //========================
      res.status(200).json({
        Succes: true,
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({
        Succes: false,
      });
    }
  },
};