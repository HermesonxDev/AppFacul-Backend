const db = require('../config/database');

exports.getAll = () => {
    try {
        const select = db.prepare('SELECT * FROM users')
        const result = select.all()
        return { message: "Usuários listados com sucesso!", users: result }
    } catch (error) {
        return { message: "Erro ao buscar usuários", error: String(error) }
    }
}

exports.create = (email, password, type) => {
    try {
        const insert = db.prepare('INSERT INTO users (email, password, type) VALUES (?, ?, ?)')
        const result = insert.run(email, password, type)
        return { message: "Usuário criado com sucesso", userData: { id: result.lastInsertRowid, email, password, type }}
    } catch (error) {
        return { message: "Erro ao criar usuário", error: String(error) }
    }
}

exports.update = (id, email, password, type) => {
    try {
        const update = db.prepare('UPDATE users SET email = ?, password = ?, type = ? WHERE id = ?')
        const result = update.run(email, password, type, id)
        
        if (result.changes > 0) {
            return { message: "Usuário atualizado com sucesso!" }
        } else {
            return { message: "Erro ao atualizar usuário" }
        }
    } catch (error) {
        return { message: "Erro ao atualizar usuário", error: String(error) }
    }
}

exports.delete = (id) => {
    try {
        const deleted = db.prepare('DELETE FROM users WHERE id = ?')
        const result = deleted.run(id)
        
        if (result.changes > 0) {
            return { message: "Usuário deletado com sucesso!" }
        } else {
            return { message: "Falha ao deletar usuário" }
        }
    } catch (error) {
        return { message: "Erro ao deletar usuário", error: String(error) }
    }
}

exports.findByEmail = (email) => {
    try {
        const query = db.prepare('SELECT * FROM users WHERE email = ?')
        const user = query.get(email);

        if (user) {
            return { exists: true, user };
        } else {
            return { exists: false, message: "Usuário não encontrado" };
        }
    } catch (error) {
        return { exists: false, message: "Erro ao verificar usuário", error: String(error) }
    }
}