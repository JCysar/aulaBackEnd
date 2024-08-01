import { verificarLogin } from "../repositorios/usuarios.js"



export const verificarConta = async (login, senha) => {

    const resp = await verificarLogin(login)

    if(!resp){

        return false

    }

    const { login: username, senha: password} = resp

    if(login == username && senha == password){
        return true
    }

    
    return false
    
}