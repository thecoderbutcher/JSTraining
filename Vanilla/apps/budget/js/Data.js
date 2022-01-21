class Data{
    constructor(description, value){
        this._description = description;
        this._value = value;
        this._date = new Date();
    }

    get description(){return this._description;}
    get value(){return this._value;}
    get date(){return this._date;}
    
    set description(description){this._description = description;    }
    set value(value){this._value = value;}
    set date(date){this._date = date;}
}