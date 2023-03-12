/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/#devserverproxy
 */
//import {pathRewrite} from '../utils/helpers';

// const httpProxyTarget = {
//     port: 80,
//     protocol: 'http',
// };
//
// const httpsProxyTarget = {
//     port: 443,
//     protocol: 'https',
// };

export const devServerProxyConfig = {
    '/api/config': {
        target: `https://editor.finsber.com`,
        changeOrigin: true,
        secure: false,
    },
    '/cdn/': {
        target: `https://finsber.com/`,
        changeOrigin: true,
        secure: false,
    },
    // '/ws/v1': {
    //     target: 'http://localhost:1234',
    //     ws: true,
    // },

    /*
    // Example proxy configuration endpoins

    '/someurl/test': {
        target: `${httpsProxyTarget.protocol}://reqres.in:${httpsProxyTarget.port}`,
        pathRewrite: pathRewrite('^/someurl/test', '/api'),
        changeOrigin: true,
        secure: false,
    },
    */
};
