//Serviço de login
//  Na implementação real, deverá ser realizada chamada ao backend para autenticação
const signIn = (username, password) => {
  //console.log(`AuthService: ${username}, ${password}`);
  if(username.toString() === "user" && password.toString() === "12345678"){
    return true;
  }
  return false;
}

export const authService = {
  signIn,
};