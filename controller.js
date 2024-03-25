const Paint = require('./model/paint');

const getAllStatus = async (req, res) => {
    try {
        const data = await Paint.find({});
        res.send(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
const updateStatus = async (req, res) => {
    try {
        const filter = { color: req.body.color };
        const update = { status: req.body.status };
        const data = await Paint.findOneAndUpdate(filter, update, {new: true});
        res.send(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
module.exports = {
    getAllStatus,
    updateStatus
};