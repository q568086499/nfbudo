const path = require('path');
const glob = require('glob');

// 获取入口文件
let entries = (entryPath => {
    let files = {};
    filesPath = glob.sync(`${entryPath}/*/*.js`);
    filesPath.forEach((entry, index) => {
        let chunkName = path.relative(entryPath, entry).replace(/\.js$/i, '');
        files[chunkName] = path.resolve(__dirname, '../', entry);
    });
    return files;
})('src/pages');

// 获取自定义端口号
let port = (() => {
    const argv = JSON.parse(process.env.npm_config_argv).cooked;
    let argvIndex = param => {
        return argv.indexOf(param);
    };
    return argvIndex('--port') === -1 ? '' : argv[argvIndex('--port') + 1] || '';
})();

module.exports = {
    entries: entries,
    distRootPath: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    absolutePath: '-',
    server: {
        port: port || 8080
    }
};
