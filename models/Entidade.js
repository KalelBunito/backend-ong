class Entidade {
    //  parâmetro
    // toda classe possui propriedades e métodos
    constructor(id, nome, cnpj, site, email, cidade, descricao, telefone) {
        if (isNaN(id)) {
            throw new Error("ID precisa ser um número válido")
        }

        if (isNaN(cnpj) || String(cnpj).length < 14){\n            throw new Error("O CNPJ precisa ser um número válido com pelo menos 14 dígitos")
        }
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.site = site
        this.email = email
        this.cidade = cidade
        this.descricao = descricao
        this.telefone = telefone
        this.mensagem = "ONG cadastrada com sucesso"
    }
}

module.exports = Entidade;