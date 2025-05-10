const vars = {
    IS_PROD: false,
    IS_LOCAL_SERVER: false,
};

let baseUrl = 'https://api-test.adithyan-portfolio.com';
let fileBaseUrl = 'https://adithyan-portfolio.sfo3.digitaloceanspaces.com/web';

if (vars.IS_PROD) {
    baseUrl = 'https://api.adithyan-portfolio.com';
    fileBaseUrl = 'https://adithyan-portfolio.sfo3.digitaloceanspaces.com/web';
}

if (vars.IS_LOCAL_SERVER) {
    baseUrl = 'http://localhost:4000';
}

export default {
    baseUrl,
    fileBaseUrl,
    isProd: vars.IS_PROD,
};
