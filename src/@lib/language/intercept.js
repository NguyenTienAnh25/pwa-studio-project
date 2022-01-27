module.exports = targets => {
    const { Targetables } = require('@magento/pwa-buildpack');

    const targetables = Targetables.using(targets);
    // Create a React component targetable linked to the productFullDetail.js file
    const MainComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/header.js'
    );
    targetables.setSpecialFeatures('esModules', 'cssModules');
    const Test = MainComponent.addImport(
        "import Language from 'src/@lib/language/language.js'"
    );
    const Test1 = MainComponent.addImport(
        "import Test from 'src/@lib/language/test.js'"
    );
    const Test2 = MainComponent.addImport(
        "import Test1 from 'src/@lib/language/test1.js'"
    );
    MainComponent.insertAfterJSX('CurrencySwitcher', `${Test}`);
    MainComponent.insertAfterJSX('StoreSwitcher', `${Test2}`);
    MainComponent.insertBeforeJSX('StoreSwitcher', `${Test1}`);
};
