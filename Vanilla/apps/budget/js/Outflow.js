class Outflow extends Data{
    static contOutflow = 0;
    constructor(description, value){
        super(description, value);
        this._id = ++Outflow.contOutflow;
    }

    get id(){return this._id;}
}