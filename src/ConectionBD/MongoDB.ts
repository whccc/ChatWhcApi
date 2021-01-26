const mongoose = require("mongoose");

const ConnextionDB = async ({
  user,
  password,
  host,
  dbName,
}: {
  user: string;
  password: string;
  host: string;
  dbName: String;
}) => {
  try {
    const uri = `mongodb+srv://${user}:${password}${host}/${dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Base de datos iniciada con éxito.");
  } catch (Error) {
    console.log(Error);
  }
};

module.exports = ConnextionDB;
