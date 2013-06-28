App.controller = (function(avatarFactory){

    function Controller(){
        this.factory = new avatarFactory();
        this.avatars = [];
        this.id = 0;
        this.init();
    }

    Controller.prototype = {

        init: function () {
              this.createPlayers();
        },


        createPlayers:function(){
            this.avatars[this.getNextId()] = this.factory.createAvatar('Wizard',
                {name: 'Megamus', icon: 'hat', age: '77'}, // mandatory
                ['master', 'spirit_invoker']) // decorators
                //['master', 'spirit_invoker', 'tree_talker', 'teleport'] // decorators
        },

        movePlayer: function (avatar) {

            utils.isType(avatar, AbstractAvatar); // check type as must have move method for polymorphism

            if (this.avatars[avatar]) {

                avatar.move();

            } else {
                throw new Error(avatar.type+" avatar does not exist");
            }
        },

        getNextId:function(){
                 return this.id++;
        }
    }

    return Controller;

})(App.classes.SimpleAvatarFactory);




