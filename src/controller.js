



//An abstract (base) class forms an is-a relationship and allows for polymorphism.

// so fire move?
register : function( user ) {

        utils.isType(user, AbstractUser);

        if(user.id && !this.users[user.id]) {

            this.users[user.id] = lightbox;
            //this.fire('UserRegistered', user);

        } else {
            throw new Error("Id is invalid or duplicated");
        }


}



