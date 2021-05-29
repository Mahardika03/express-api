const {Todo} = require('../db/models/index');


class TodoController {

    static async get(req,res) {
        const todos = await Todo.findAll();
        res.json(todos);
    }

    static async getById(req,res) {
        const todos = await Todo.findByPk(req.params["id"]);
        res.json(todos);
    }

    static async create(req,res) {
        //console.log(req.body);
        const data = await Todo.create(req.body);
        res.json(data);
    }

    static async update(req,res) {
        const data = await Todo.update(req.body, {
            where : {
                id : req.params["id"]
            }
        });
        const get = await Todo.findByPk(req.params["id"]);
        res.json(get)
    }

    static async delete(req,res) {
        const data = await Todo.destroy({
            where : {
                id : req.params["id"]
            }
        });
        if(data){
            res.json("Delete data complete");
        } else {
            res.json("Data not found");
        }
    }
}

module.exports = TodoController;