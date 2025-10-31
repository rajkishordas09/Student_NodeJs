const auth_AdminOrStudent = (req, res, next) => {
    const role = req.role;
    if (role === 'admin' || role === 'student' || role === 'teacher') {
        next()
    }
    else {
        return res.status(404).json({ message: 'Forbridden' })
    }
}
module.exports = auth_AdminOrStudent;