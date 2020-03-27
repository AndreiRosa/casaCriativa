const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./casacriativa.db')

db.serialize(function() {
    // CREATE
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    // INSERT
    /*
    const query = `
        INSERT INTO  ideas(
            image, title, category, description, link
        ) VALUES (?,?,?,?,?);
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de programação",
        "Estudo",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, qui accusantium. Temporibus saepe minima ex laudantium adipisci dolor ipsa ad nostrum voluptates molestiae fugiat corrupti et, consequatur officia vero accusamus!",
        "https://rocketseat.com.br",
    ] */

    /*
    db.run(query, values, function(err){
        if(err) return console.log(err)

        console.log(this)
    })
    */

    // DELETE
    /*
    db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
        if (err) return console.log(err)

        console.log("DELETED", this) 
    })
    */

    // SELECT
    /*
    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })
    */

})

module.exports = db