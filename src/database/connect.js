const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.u4gfj.mongodb.net/CursoNode?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          `Ocorreu erro ao se conectar ao banco de dados: `,
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDatabase;
