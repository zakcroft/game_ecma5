App.decorators.MagicDecorator = (function (_super, utils) {

    function MagicDecorator(user) {
        _super.apply(this, arguments);

        Object.defineProperties(User, {
            "invisibility": { writable: true, enumerable: true, configurable: true, value: null },
            "strength": {  writable: true, enumerable: true, configurable: true, value: null }
        });

        utils.inheritsEC5(MagicDecorator, _super);
    }

    utils.inheritsEC5(User, _super);

    MagicDecorator.prototype.castSpell = function(target) {
        return target.die();
    };


    return MagicDecorator;

})(App.decorators.UserDecorator);


