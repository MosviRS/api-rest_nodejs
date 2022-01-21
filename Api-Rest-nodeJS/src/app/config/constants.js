const TABLES={
        cursos: 'cursos',
        usuarios: 'users'
};
const SECRET_KEY = process.env.SECRET || 'cursosapi';
const DATABASE = {
        host: process.env.HOST,
        user: process.env.USER_DATABASE,
        password: process.env.PASSWORD,
        name: process.env.DATABASE
}
module.exports = {TABLES,SECRET_KEY,DATABASE};