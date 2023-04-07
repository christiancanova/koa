const DaoException = require('../DaoException.js');


class IProductDAO {
    constructor () {}

    async create (data){
        throw new DaoException ('Falta implementar create()');
    }

    async findById (id) {
        throw new DaoException ('Falta implementar findById()');
    }

    async findAll() {
        throw new DaoException ('Falta implementar findAll()');
    }

    async update(id, toUpdate){
        throw new DaoException ('Falta implementar update()');
    }
    async delete(id){
        throw new DaoException ('Falta implementar delete()');
    }
}

module.exports = IProductDAO;