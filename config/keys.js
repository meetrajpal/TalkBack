if (process.env.NODE_MY_ENV !== "production")
    module.exports = require('./prod');
else
    module.exports = require('./dev');
