const app = require('./server');
const { db } = require('./db/db');

const port = process.env.PORT || 3000;

const init = async() => {
    try {
        if (!process.env.PORT) {
            await db.sync();
        }
        app.listen(port, () => console.log(`
            Listening on port ${port}

            http://localhost:${port}/
        `));
        } catch (error) {
        console.log('SERVER INIT ERROR: ', error);
    }
};
init();
