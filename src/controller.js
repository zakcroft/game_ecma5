




register : function( user ) {

        utils.isType(user, AbstractUser);

        if(user.id && !this.users[user.id]) {

            this.users[user.id] = lightbox;
            //this.fire('UserRegistered', user);

        } else {
            throw new Error("Id is invalid or duplicated");
        }


}



