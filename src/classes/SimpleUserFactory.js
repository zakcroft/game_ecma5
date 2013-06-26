App.SimpleAvatarFactory = (function () {

    function SimpleAvatarFactory(args) {
           //var Avatar =  Array.prototype.slice(0, arguments);
    }

    SimpleAvatarFactory.prototype = {
           createAvatar:function(type){
               var avatar = null;
               switch(type) {
                   case 'Wizard':
                       avatar = new Wizard();
                       break;
                   case 'Warrior':
                       avatar = new Warrior();
                       break;
//                   case 'Dragon':
//                       avatar = new Dragon();
//                       break;
//                   case 'User':
//                   default:
//                       avatar = new User();
               }

               return avatar;

           }
    }

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



    return SimpleAvatarFactory;

    var factory = new SimpleAvatarFactory();
    var magician = factory.createAvatar('Magician', decoration );


})()