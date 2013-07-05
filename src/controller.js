App.controller = (function(AvatarFactory, AbstractAvatar, AbstractAvatarDecorator, utils){

    function Controller(){
        this.factory = new AvatarFactory();
        this.avatars = [];
        this.init();
    }

    Controller.prototype = {

        init: function () {
             this.createPlayers();
             this.movePlayer(this.avatars[0]);// test
        },


        createPlayers:function(){
            var wizard = this.factory.createAvatar('Wizard',
                {name: 'Megamus', icon: 'hat', age: '77'}, // mandatory
                ['master', 'spirit_invoker']) // decorators
                //['master', 'spirit_invoker', 'tree_talker', 'teleport'] // decorators


            this.avatars[wizard.id = this.getNextId()] = wizard

        },

        movePlayer: function (avatar) {

            // check type as must have move method for polymorphism
            if (utils.isType(avatar, AbstractAvatarDecorator) && this.avatars[avatar.id]) {

                avatar.move();

            } else {
                throw new Error(avatar.type+" avatar does not exist");
            }
        },

        getNextId:function(){
            var count = 0;
            this.getNextId = function(){
                return count++;
            }
            return count++;
        }
    }

    return Controller;

})(App.classes.SimpleAvatarFactory, App.abstracts.AbstractAvatar, App.abstracts.AbstractAvatarDecorator, App.utils);




