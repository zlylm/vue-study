const Env = process.env.NODE_ENV !== 'production'
module.exports = {
    configureWebpack: (config) => {
        if (Env) {
            config.devtool = 'source-map'
        }
    }
}