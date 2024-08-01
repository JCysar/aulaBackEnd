import { Router } from 'express'
import { atualizarSenha, criarConta, deletarConta, logar } from '../controles/usuarios.js'


export const rota = Router()

// post get delete put/update


// get = consulta de livros, produtos (mais rapido)

// post = criação conta, login, criação de nota fiscal (segurança maior) 


// put = atualizar determinado campo/campos de uma tabela / update = atualizar toda a tabela do banco

// delet = deletar um determinado campo/ tabela / reseta


rota.post("/sign", criarConta)
rota.get("/login", logar)
rota.delete("/deleta", deletarConta)
rota.put("/atualizar", atualizarSenha)
