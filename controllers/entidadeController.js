let ongs = [
    {id: 1, nome: "salvacao", cnpj:95446222000149, site:"sitetesste.com.br"},
    {id: 2, nome: "salvacao", cnpj:95446222000149, site:"sitetesste.com.br"},
    {id: 3, nome: "salvacao", cnpj:95446222000149, site:"sitetesste.com.br"},
    {id: 4, nome: "salvacao", cnpj:95446222000149, site:"sitetesste.com.br"},
    {id: 5, nome: "salvacao", cnpj:95446222000149, site:"sitetesste.com.br"}
]

const listaOngs = (req, res)=>{
    res.status(200).json({
        sucesso: true,
        totalOngs: ongs
    })
}

const createOngs = (req, res)=>{
    try{
        const {id ,nome, cnpj, site} = req.body;

        const novaOng = new Entidade(id ,nome, cnpj, site);

        const ongFormatada = {
            id: novaOng.id,
            nome: novaOng.nome,
            cnpj: novaOng.cnpj,
            site: novaOng.site,
            mensagem: novaOng.mensagem
        }
        ongs.push(ongFormatada)

        res.status(201).json({
            sucesso: true,
            mensagem: "ONG cadastrada com sucesso",
            dados: ongFormatada
        })

    }catch(error){
        res.status(400).json({sucesso: false, mensagem: error})
    }
}

module.exports = {listaOngs, createOngs}
