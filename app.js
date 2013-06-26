
App = (function createNameSpaces(){

    var ns = {
        base: {},
        abstracts: {},
        interfaces:{},
        classes:{},
        decorators:{},
        utils:{},
        runtime:{}
    };

    // means configurable: false
    Object.seal( ns);

    return ns;

})();

