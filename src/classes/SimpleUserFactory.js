App.classes.SimpleAvatarFactory = (function (classes, decorators) {
    "use strict"
    function SimpleAvatarFactory() {

    };

    //extend(SimpleAvatarFactory, Avatar); ?? is this avatar user or abstract user???


    SimpleAvatarFactory.prototype = {

        // its better to have a settings object to pass up the hierarchy as easily scaled for
        // adding new parameters at any level.

        createAvatar: function (type, settings, decorations) {

            var avatar = new SimpleAvatarFactory.avatars[type](settings);

            // Iterate through the options and instantiate decorators.
            for (var i = 0, len = decorations.length; i < len; i++) {
                var decorator = SimpleAvatarFactory.decorators[decorations[i]];
                if (typeof decorator !== 'function') {
                    throw new Error('Decorator ' + decorations[i] + ' not found.');
                }

                avatar = new decorator(avatar, decorations[i]);
            }

            // Check the interface and return the finished object.
            App.base.Interface.ensureImplements(avatar, App.interfaces.user);

            return avatar;
        }
    }


    // Avatar name to class name mapping.
    SimpleAvatarFactory.avatars = {
        'Wizard': classes.Wizard,
        'Warrior': classes.Warrior
        //'Dragon': Dragon
    };

    // Decorators name to decorator class name mapping.
    SimpleAvatarFactory.decorators = {

          'master': decorators.MasterDecorator
//        'spirit_invoker': SpiritInvoker,
//        'tree_talker': TreeTalker,
//        'teleport': Teleport
    };


    return SimpleAvatarFactory;

})(App.classes, App.decorators)


//    var AcmeBicycleShop = function() {};
//    extend(AcmeBicycleShop, BicycleShop);
//    AcmeBicycleShop.prototype.createBicycle = function(model, options) {
//// Instantiate the bicycle object.
//        var bicycle = new AcmeBicycleShop.models[model]();
//// Iterate through the options and instantiate decorators.
//        for(var i = 0, len = options.length; i < len; i++) {
//            var decorator = AcmeBicycleShop.options[options[i].name];
//            if(typeof decorator !== 'function') {
//                CHAPTER 12 ■ THE DECORATOR PATTERN
//                throw new Error('Decorator ' + options[i].name + ' not found.');
//            }
//            var argument = options[i].arg;
//            bicycle = new decorator(bicycle, argument);
//        }
//// Check the interface and return the finished object.
//        Interface.ensureImplements(bicycle, Bicycle);
//        return bicycle;
//    };
//// Model name to class name mapping.
//    AcmeBicycleShop.models = {
//        'The Speedster': AcmeSpeedster,
//        'The Lowrider': AcmeLowrider,
//        'The Flatlander': AcmeFlatlander,
//        'The Comfort Cruiser': AcmeComfortCruiser
//    };
//// Option name to decorator class name mapping.
//    AcmeBicycleShop.options = {
//        'headlight': HeadlightDecorator,
//        'taillight': TaillightDecorator,
//        'bell': BellDecorator,
//        'basket': BasketDecorator,
//        'color': FrameColorDecorator,
//        'lifetime warranty': LifetimeWarrantyDecorator,
//        'timed warranty': TimedWarrantyDecorator
//    };

