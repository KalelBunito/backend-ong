class Entidade {
    //  parâmetro
    // toda classe possui propriedades e métodos
    constructor(id, nome, cnpj, site) {
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
        this.mensagem = "ONG cadastrada com sucesso"
    }
}

const ong1 = new Entidade("2", "silvestre em perigo", "12345678901234", "silvestresemperigo.com.br")
const ong2 = new Entidade(3, "tutu o tatu", 12345678901234, "tutuotatu.com.br")
console.log(ong1);
console.log(ong2);