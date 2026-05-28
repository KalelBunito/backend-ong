class Entidade {
    //  parâmetro
    // toda classe possui propriedades e métodos
    constructor(id, nome, cnpj, site, email, cidade, descricao) {
        if (isNaN(id) || isNaN(cnpj)) {
            throw new Error("A propriedade precisa ser um número válido")
        }

        if (String(cnpj).length < 14){
            throw new Error("O CNPJ precisa ter pelo menos 14 dígitos")
        }
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.site = site
        this.email = email
        this.cidade = cidade
        this.descricao = descricao
        this.mensagem = "ONG cadastrada com sucesso"
    }
}

module.exports = Entidade;