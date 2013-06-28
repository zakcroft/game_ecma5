App.classes.SimpleAvatarFactory = (function (classes, decorators) {
    "use strict"
    function SimpleAvatarFactory() {

    };

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

            // Check avatar implements the interface and return the finished object.
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

          'master': decorators.MasterDecorator,
          'spirit_invoker': decorators.SpiritInvokerDecorator
//        'tree_talker': TreeTalker,
//        'teleport': Teleport
    };


    return SimpleAvatarFactory;

})(App.classes, App.decorators)



