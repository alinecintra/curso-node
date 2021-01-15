// métodos que podemos ter dentro de um controller:
// -> index , show, update, store, destroy
/*
index: listagem de sessões
store: criar uma sessão
show: quando queremos listar uma ÚNICA sessão
update: quando queremos alterar alguma sessão
destroy: quando queremos deletar alguma sessão
*/

class SessionController{

    store(req, res){
        return res.json({ message: 'Minha Api!'})
    }

}

export default new SessionController();