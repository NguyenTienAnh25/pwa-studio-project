module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'MyGreetingRoute',
            pattern: '/page/:who?',
            path: require.resolve('../page.js')
        });
        return routes;
    });
};
