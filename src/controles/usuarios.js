

//criar conta

import { atualizarSenhaDB, criarContaDB, deletarContaDB, verificarLogin } from "../repositorios/usuarios.js"
import { verificarConta } from "../utilitarios/usuarios.js"

// logar conta
// atualizar ...

//sincrona || assyncrona
export const criarConta = async (req, res) => {
    const { login, senha} = req.body
    try {
        const resp = await verificarLogin(login)

        if(resp)
            return res.status(401).json({mensagem: "Login já esta sendo usado!"})


        const novoUsuario = await criarContaDB(login, senha)

        if(!novoUsuario)
            return res.status(400).json({mensagem: "Erro na criação"})

        return res.status(201).json()
    } catch (error) {
        console.log(error.message)
       return res.status(500).json({mensagem: "Erro interno do servidor"}) 
    }
}




export const logar = async (req,res) => {
    const { login, senha } = req.body
    try {
        const resp = await verificarLogin(login)

        if(!resp){

            return res.status(401).json({mensagem: "Login ou senha incorreta!"})

        }

        const { login: username, senha: password} = resp

        if(login == username && senha == password){

            return res.status(203).json({mensagem: `Bem vindo ${login}!`})
        }

        
        return res.status(401).json({message: "Login ou senha incorreta"})

    } catch (error) {
       return res.status(500).json({mensagem: "Erro interno do servidor"}) 
        
    }

}

export const deletarConta = async (req,res) => {
    const {login, senha} = req.body

    try {
        const resp = await verificarLogin(login)

        if(!resp){

            return res.status(401).json({mensagem: "Login ou senha incorreta!"})

        }

        const { login: username, senha: password} = resp

        if(login == username && senha == password){
            const delet = await deletarContaDB(login) 
            return res.status(200).json({mensagem: `Conta deletada com sucesso!`})
        }

        
        return res.status(401).json({message: "Login ou senha incorreta"}) 
    } catch (error) {
        return res.status(500).json({mensagem: "Erro interno do servidor"}) 
    }
}


export const atualizarSenha = async (req, res) => {
    const {login, senha, novaSenha} = req.body

    try {
        const resp = await verificarConta(login, senha)
        if(!resp)
            return res.status(401).json({mensagem: "Usuario ou senha incorreta!"})


        const atualizarConta = await atualizarSenhaDB(login, novaSenha)

        if(!atualizarConta)
            return res.status(500).json({mensagem: "Erro ao buscar dados!"})
   

        return res.status(200).json({mensagem: "Senha atualizada com sucesso"})
      

        
       
    } catch (error) {
        return res.status(500).json({mensagem: "Erro interno do servidor"}) 
    }
}