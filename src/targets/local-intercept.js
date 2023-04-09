// Require TargetableReactComponent
const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    //Custom route
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'MyGreetingRoute',
            pattern: '/greeting/:who?',
            path: require.resolve('../components/GreetingPage/greetingPage.js')
        });
        return routes;
    });
};

// module.exports = targets => {
//     const targetables = Targetables.using(targets);

//     // Create a TargetableModule instance that points to the main.js source
//     const MainComponent = targetables.module(
//         '@magento/venia-ui/lib/components/Main/main.js'
//     );

//     // Insert a console log message in the source
//     MainComponent.insertAfterSource(
//         'const Main = props => {\n',
//         '\tconsole.log("Hello World");\n'
//     );
// };

// module.exports = targets => {
//     const targetables = Targetables.using(targets);

//     // Custom News Letter
//     // Create a TargetableReactComponent linked to the `footer.js` file
//     const FooterComponent = targetables.reactComponent(
//         '/src/components/Footer/footer.js'

//     );
//     // Add an import statement for Newsletter component
//     const NewsLetter = FooterComponent.addImport(
//         "NewsLetter from '/src/components/NewsLetter'"
//     );
//     // Use targetable method to append newsletter component inside div of footer component
//     FooterComponent.appendJSX(
//         '<div className={classes.links}>',
//         `<${NewsLetter}/>`
//     );
// };


// module.exports = targets => {
//        // Initialize TargetableReactComponent
//        const targetables = Targetables.using(targets);

//        // Create a TargetableReactComponent linked to the `main.js` file
//        const MainComponenet = targetables.reactComponent(
//            '@magento/venia-ui/lib/components/Main/main.js'
//        );
   
//        // Create a TargetableReactComponent linked to the `customBlog.js` file
//        const CustomBlog = MainComponenet.addImport(
//            "CustomBlog from '/src/components/CustomBlog/customBlog.js'"
//        );
   
//        // Insert a custom blog before Footer Component
//        MainComponenet.insertBeforeJSX('<Footer />', `<${CustomBlog} />`);
// };



// module.exports = targets => {
//     const moduleOverridePlugin = require('./moduleOverrideWebpackPlugin'); 
//     const componentOverrideMapping = { 
//         '@magento/venia-ui/lib/components/Footer/footer.js': './components/Footer/footer.js', 
//         // add comma-separated files 
//     }; 
//     module.exports = targets => {
//         targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
//             flags[targets.name] = {esModules: true, cssModules: true};
//         });
//         targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => { 
//             new moduleOverridePlugin(componentOverrideMapping).apply(compiler); 
//         }); 
//     };
// };