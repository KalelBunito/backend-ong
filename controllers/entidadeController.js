let ongs = [
    { id: 1, nome: "salvacao", cnpj: 95446222000149, site: "sitetesste.com.br" },
    { id: 2, nome: "salvacao", cnpj: 95446222000149, site: "sitetesste.com.br" },
    { id: 3, nome: "salvacao", cnpj: 95446222000149, site: "sitetesste.com.br" },
    { id: 4, nome: "salvacao", cnpj: 95446222000149, site: "sitetesste.com.br" },
    { id: 5, nome: "salvacao", cnpj: 95446222000149, site: "sitetesste.com.br" }
]

const Entidade = require('../models/Entidade')

const listaOngs = (req, res) => {
    res.status(200).json({
        sucesso: true,
        totalOngs: ongs
    })
}

const createOngs = (req, res) => {
    try {
        const { id, nome, cnpj, site } = req.body;

        const novaOng = new Entidade(id, nome, cnpj, site);

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

    } catch (error) {
        res.status(400).json({ sucesso: false, mensagem: error })
    }
}

const updateOngs = (req, res) => {
    const id = parseInt(req.params.id);
    let procurarIndice = ongs.findIndex(o => o.id === id);

    if (procurarIndice === -1) {
        return res.status(404).json({ sucesso: false, mensagem: "ONG não encontrada" })
    };

    const { nome, cnpj, site } = req.body;

    ongs[procurarIndice] = {
        ...ongs[procurarIndice],
        nome: nome || ongs[procurarIndice].nome,
        cnpj: cnpj || ongs[procurarIndice].cnpj,
        site: site || ongs[procurarIndice].site
    }

    res.status(200).json({
        sucesso: true,
        mensagem: "ONG atualizada com sucesso",
        dados: ongs[procurarIndice]
    });

}

const deleteOngs = (req, res) => {
    const id = parseInt(req.params.id);
    let procurarIndice = ongs.findIndex(o => o.id === id);

    if (procurarIndice === -1) {
        return res.status(404).json({ sucesso: false, mensagem: "ONG não encontrada" })
    };

    const removida = ongs.splice(procurarIndice, 1);

    res.status(200).json({
        sucesso: true,
        mensagem: "Ong removida com sucesso",
        dados: removida
    })
}

module.exports = { listaOngs, createOngs, updateOngs, deleteOngs }


//find index, operador de resto