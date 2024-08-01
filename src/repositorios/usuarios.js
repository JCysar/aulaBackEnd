import { prisma } from "../database/index.js";


export const verificarLogin = async (login) => {
    try {
       const resp = await prisma.conta.findUnique({
        where: { login: login}, 
       })
       

       if(resp) 
        return resp

       
       return false
    }
    
    finally {
        await prisma.$disconnect()

    }
}


export const criarContaDB = async (login, senha) => {
    try {
        const resp = await prisma.conta.create({
            data: {
                login,
                senha
            }
        })
        
        if(resp)
            return true

        return false

    }

    finally {
        await prisma.$disconnect()

    }
}


export const deletarContaDB = async (login) => {
    try {
        const resp = await prisma.conta.delete({
            where: { login}
        })
        if(!resp)  // !false =  verdadeiro
            return false

        return true

    } finally {
        await prisma.$disconnect()
    }
}

export const atualizarSenhaDB = async (login, novaSenha) => {
    try {
        const resp = await prisma.conta.update({
            where: { login },
            data: { senha: novaSenha }

        })

        if(!resp)
             return false
        
        return true
    }
    finally {
        await prisma.$disconnect()
    }
}