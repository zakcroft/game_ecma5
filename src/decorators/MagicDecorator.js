App.decorators.MagicDecorator = (function (AbstractUserDecorator, utils) {

    function MagicDecorator(user) {
        UserDecorator.call(this, user);


    }

    utils.inheritsEC5(MagicDecorator, AbstractUserDecorator);

    MagicDecorator.prototype.castSpell = function(target) {
        return target.die();
    };


    return MagicDecorator;

})(App.abstracts.AbstractUserDecorator, App.utils);


