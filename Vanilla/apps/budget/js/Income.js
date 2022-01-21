class Income extends Data{
    static contIncome = 0;
    constructor(description, value){
        super(description, value);
        this._id = ++Income.contIncome;
    }

    get id(){return this._id;}
}