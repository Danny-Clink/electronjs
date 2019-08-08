const path = require('path');
const url = require('url');

module.exports = {
    urlFormat: {
        pathname: path.join(__dirname, '../pages/main.html'),
        protocol: 'file:',
        slashes: true
    }
}