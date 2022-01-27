module.exports = targets => {
    const { Targetables } = require('@magento/pwa-buildpack');

    const targetables = Targetables.using(targets);
    // Create a React component targetable linked to the productFullDetail.js file
    const MainComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );

    targetables.setSpecialFeatures('esModules', 'cssModules');
    const Test = MainComponent.addImport(
        "import Details from 'src/@lib/extension/details.js'"
    );
    const Test1 = MainComponent.addImport(
        "import Product from 'src/@lib/extension/product.js'"
    );
    MainComponent.insertAfterJSX('RichContent', `<${Test}/>`);
    MainComponent.insertAfterJSX('Form', `<${Test1}/>`);

    // MainComponent1.insertBeforeJSX('CategoryTile', `<div>English</div>`);
};
