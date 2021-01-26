const MDMongoDBUser = require("./ModelMongoDB");

module.exports = {
  //===================================================
  // FUNCIÓN PARA CREAR UN USUARIO EN LA BASE DE DATOS
  //===================================================
  async CreateUser({
    blobImageUser,
    strNameAndLastName,
    strUser,
    strPassword,
  }: {
    blobImageUser: string;
    strNameAndLastName: string;
    strUser: String;
    strPassword: string;
  }) {
    try {
      //==============================================
      // CREAMOS EL OBJETO USER EN EL MODELO MONGODB
      //==============================================
      const User = new MDMongoDBUser({
        blobImageUser,
        strNameAndLastName,
        strUser,
        strPassword,
      });
      //========================================================
      // GUARDAMOS EL NUEVO USUARIO EN LA BASE DE DATOS MONGODB
      //========================================================
      await User.save();
    } catch (Error) {
      throw Error;
    }
  },
};
