App.decorators.SpiritInvokerDecorator = (function (AbstractAvatarDecorator, utils) {

    function SpiritInvokerDecorator(avatar) {
        AbstractAvatarDecorator.call(this, avatar);
    }

    utils.inheritsEC5(SpiritInvokerDecorator, AbstractAvatarDecorator);

    SpiritInvokerDecorator.prototype.invokeSpirit = function(spirit) {
       spirit.invoke();
    };


    return SpiritInvokerDecorator;

})(App.abstracts.AbstractAvatarDecorator, App.utils);


