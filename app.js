
App = (function createNameSpaces(){

    // Default Descriptors
    var defaults = { writable: true, enumerable: false, configurable: false}

    // means enumerable: false, configurable: false,
    var ns = {
        base: {},
        user:{
            interfaces:{}
        },
        decorators:{},
        classes:{ },
        interfaces:{},
        utils:{},
        runtime:{}
    };

    // means enumerable: false, configurable: false, ?? what is best?
   // Object.seal(ns);

    return ns;

})();

