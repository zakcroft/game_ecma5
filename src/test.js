function extend(subClass, superClass) {
    var F = function () {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}


var Macbook = new App.base.Interface('Macbook', ['addEngraving', 'addParallels', 'add4GBRam', 'add8GBRam', 'addCase']);

var MacbookPro = function () {
    //implements Macbook
}

MacbookPro.prototype = {
    addEngraving: function () {
    },
    addParallels: function () {
    },
    add4GBRam: function () {
    },
    add8GBRam: function () {
    },
    addCase: function () {
    },
    getPrice: function () {
        return 900.00; //base price.
    }
};


//Macbook decorator abstract decorator class
function MacbookDecorator(macbook) {
    App.base.Interface.ensureImplements(macbook, Macbook);
    this.macbook = macbook;
}
MacbookDecorator.prototype = {
    addEngraving: function () {
        return this.macbook.addEngraving();
    },
    addParallels: function () {
        return this.macbook.addParallels();
    },
    add4GBRam: function () {
        return this.macbook.add4GBRam();
    },
    add8GBRam: function () {
        return this.macbook.add8GBRam();
    },
    addCase: function () {
        return this.macbook.addCase();
    },
    getPrice: function () {
        return this.macbook.getPrice();
    }
};

function CaseDecorator(macbook) {
    /*call the superclass's constructor next*/
    MacbookDecorator.call(this, macbook);
}

/*Let's now extend the superclass*/
App.utils.inheritsEC5(CaseDecorator, MacbookDecorator);

CaseDecorator.prototype.addCase = function () {
    return this.macbook.addCase() + " Adding case to macbook ";
};
CaseDecorator.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45.00;
};


function ttttt(macbook) {
    /*call the superclass's constructor next*/
    MacbookDecorator.call(this, macbook);
}

/*Let's now extend the superclass*/
App.utils.inheritsEC5(ttttt, MacbookDecorator);

ttttt.prototype.addCase = function () {
    return this.macbook.addCase() + " Adding case to macbook ";
};
ttttt.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45.00;
};

//Instantiation of the macbook
var myMacbookPro = new MacbookPro();
//This will return 900.00
console.log(myMacbookPro.getPrice());
//Decorate the macbook
myMacbookPro = new CaseDecorator(myMacbookPro);
myMacbookPro = new ttttt(myMacbookPro);
/*note*/
//This will return 945.00
console.log(myMacbookPro.getPrice());
