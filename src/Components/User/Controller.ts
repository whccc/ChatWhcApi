const MDUser = require('./Model');

module.exports = {
  // ========================================================================
  // FUNCIÓN TIPO POST, EN EL CUAL SE OBTIENE LA DATA DEL USUARIO PARA CREAR
  // ========================================================================
  async CreateUser(req: any, res: any) {
    try {
      // console.log(req.body);
      // ==================================================================================
      // IMPORTAMOS LA FUNCIÓN CREAR USARIO DEL MODELO Y PASAMOS LOS PARAMETROS DEL USARIO
      // ==================================================================================
      MDUser.CreateUser(req.body);
      // ========================
      // ENVIO DE RESPUESTA API
      // ========================
      res.status(200).json({
        Success: true
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({
        Success: false
      });
    }
  },
  // ===
  // FUNCIÓN LOGIN USER APP
  // ==
  async LoginUser(req: any, res: any) {
    try {
      const Data = await MDUser.FindUserLogin(req.body);

      res.status(200).json({
        Success: Data !== null,
        DataUser: Data
      });
    } catch (Error) {
      console.log(Error);
      res.status(500).json({
        Success: false
      });
    }
  }
};
