exports.create = (req, res) => {
    res.send({ message: 'create handler' });
};

exports.findALl = (req, res) => {
    res.send({ message: 'findALl handler' });
};

exports.findOne = (req, res) => {
    res.send({ message: 'findOne handler' });
};

exports.update = (req, res) => {
    res.send({ message: 'update handler' });
};

exports.delete = (req, res) => {
    res.send({ message: 'delete handler' });
};

exports.deleteALl = (req, res) => {
    res.send({ message: 'deleteALl handler' });
};

exports.findALlFavorite = (req, res) => {
    res.send({ message: 'findALlFavorite handler' });
}