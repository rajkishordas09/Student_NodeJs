const authAdminOnly = (req, res, next) => {
    const role = req.role;
    if (role === 'admin') {
        next();
    }
    else {
        res.status(404).json({ message: 'forbridden' })
    }
}
module.exports = authAdminOnly;