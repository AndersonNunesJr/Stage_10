const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password, avatar} = request.body;
    const database = await sqliteConnection();

    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }
    
    if(password == ""){
      throw new AppError("Password Vazio!")
    }

    const hashedPassword = await hash(password, 8);
    
    
    // let checkIfAvatarIsPng = /\.png$/i; 
    // // está linha acima verifica se a string termina com .png||.PNG
    // // no if abaixo verifica se avatar está definido,caso não esteja entra no if
    // //||no outro caso ele testa se o parametro passado ("Booleano") e falso 
    // if(avatar === undefined || checkIfAvatarIsPng.test(avatar) === false){    
    //   throw new AppError("Avatar não definido ou tipo de arquivo não suportado! ('Exemplo.png')");
    // }

    await database.run(
      "INSERT INTO users (name,email,password,avatar) VALUES(?,?,?,?)",
      [name, email, hashedPassword,avatar]
    );

    

    return response.status(201).json();
  }
  async update(request, response) {
    const { name, email, password, old_password,avatar} = request.body;
    const user_id  = request.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.avatar = avatar ?? user.avatar;
       
    var checkIfAvatarIsPng = /\.png$/i; 
    if(avatar === undefined || checkIfAvatarIsPng.test(user.avatar) === false){    
      throw new AppError("Avatar não definido ou tipo de arquivo não suportado! ('Exemplo.png')");
    }
    

    if (password && !old_password) {
      throw new AppError(
        "Você prescisa informar a senha antiga para definir a nova senha."
      );
    }
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }
      user.password = await hash(password, 8);
    }
    await database.run(
      `
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    avatar=?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
      [user.name, user.email,user.password,user.avatar,user_id ]
    );
    return response.json();
  }
}

module.exports = UsersController;
