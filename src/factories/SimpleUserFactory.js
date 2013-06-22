App.SimpleAvatarFactory = (function () {

    function SimpleAvatarFactory(args) {
           //var Avatar =  Array.prototype.slice(0, arguments);
    }

    SimpleUserFactory.prototype = {
           createUser:function(avatar){
               switch(avatar) {
                   case 'Magician':
                       avatar = new Magician();
                       break;
                   case 'Warrior':
                       avatar = new Warrior();
                       break;
                   case 'Dragon':
                       avatar = new Dragon();
                       break;
                   case 'User':
                   default:
                       avatar = new User();
               }

           }
    }


    return AvatarFactory;

    var factory = new SimpleUserFactory();
    var magician = factory.createUser('Magician');


})()