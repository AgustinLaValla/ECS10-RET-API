//Router
import { Router } from 'express';
const router = Router();

//DATABASE CONNECTION
import { connect } from '../src/databse';
import { ObjectID } from 'mongodb';

//Get collection
router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
    res.send('Task Router Works Fine!')
});

//Create Document
router.post('/', async (req, res) => {
    const db = await connect();
    const { title, description } = req.body;
    const task = { title, description };
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]);
});

//Get a Document
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });
    res.json({ result });
});

//Delete a document
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({ _id: ObjectID(id) });
    res.json({
        message: `Task: ${id} deleted`,
        result
    })
});

//Update a document
router.put('/:id', async (req,res) => {
    const { id } = req.params;
    const { body } = req;
    const db = await connect();
    const result = await db.collection('tasks').updateOne({_id:ObjectID(id) }, {$set:body});
    res.json({
        message: `Task ${id} successfully updated`,
    });
});

export default router