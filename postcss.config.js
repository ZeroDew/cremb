module.exports = () => {
    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport': {
                viewportWidth: 375,
                exclude: /(\/|\\)(node_modules)(\/|\\)/
            }
        }
    }
}