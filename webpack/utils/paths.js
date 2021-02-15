const { join, resolve } = require('path');

const PROJECT_PATH = resolve(__dirname + '/../..');

module.exports = {
    PROJECT_PATH,

    SRC_PATH: join(PROJECT_PATH, '/src'),
    RES_PATH: join(PROJECT_PATH, '/res'),

    DIST_PATH: join(PROJECT_PATH, '/dist'),
};
