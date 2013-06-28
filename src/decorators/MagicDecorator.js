App.decorators.SpiritInvoker = (function (AbstractUserDecorator, utils) {

    function SpiritInvoker(user) {
        AbstractUserDecorator.call(this, user);


    }

    utils.inheritsEC5(SpiritInvoker, AbstractUserDecorator);

    SpiritInvoker.prototype.callSpirit = function(spirit) {
        return spirit.invoke();
    };


    return SpiritInvoker;

})(App.abstracts.AbstractUserDecorator, App.utils);


