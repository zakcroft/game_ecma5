App.controller = (function(avatarFactory){

    function Controller(){
        this.factory = new avatarFactory();
        this.avatars = [];
        this.avatarCount= 0;
        this.init();
    }

    Controller.prototype = {

        init: function () {
              this.createPlayers();
        },


        createPlayers:function(){
            var wizard = this.factory.createAvatar('Wizard',
                {name: 'Megamus', icon: 'hat', age: '77'}, // mandatory
                ['master', 'spirit_invoker']) // decorators
                //['master', 'spirit_invoker', 'tree_talker', 'teleport'] // decorators


            this.avatars[wizard.id = this.getNextId()] = wizard
        },

        movePlayer: function (avatar) {

            utils.isType(avatar, AbstractAvatar); // check type as must have move method for polymorphism

            if (this.avatars[avatar.id]) {

                avatar.move();

            } else {
                throw new Error(avatar.type+" avatar does not exist");
            }
        },

        getNextId:function(){
            return this.avatarCount++;
        }
    }

    return Controller;

})(App.classes.SimpleAvatarFactory);




