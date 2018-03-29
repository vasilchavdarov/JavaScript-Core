class PaymentProcessor {
    constructor(option){
        this.data = [];
        this.option = option
    }

    set option(newValue){
        if (newValue == undefined){
            this._option = {
                types: ["service", "product", "other"],
                precision: 2
            };

            for (let obj of this.data) {
                obj.type = this._option.types;
            }

        }
    }

    registerPayment(id,name,type,value){
        if (typeof id !== 'string'){
            throw new Error('Id must be a non-empty string');
        }

        if (id.length === 0){
            throw new Error('Id must be a non-empty string');
        }

        if (typeof name !== 'string'){
            throw new Error('Name must be a non-empty string');
        }

        if (name.length === 0){
            throw new Error('Name must be a non-empty string');
        }

        if (typeof value !== 'number'){
            throw new Error('value must be a non-negative number');
        }



        this._id = id;
        this._name = name;
        this._value = value;
        this._type = type;

        this.data.push({id: this._id, name: this._name,type: this._type, value: this._value})
    }

    get(id){
        let test = [];
        let str;
        for (let obj of this.data) {
            if (obj.id === id){
                test.push(id);
                str = `Details about payment ID: ${obj.id}
- Name: ${obj.name}
- Type: ${obj.type}
- Value: ${obj.value.toFixed(`${this._option.precision}`)}`
            }
        }

        if (test.length > 0){
            return str;
        } else {
            throw new Error('ID not found');
        }
    }

    deletePayment(id){
        let test = [];
        for (let obj of this.data) {
            if (obj.id === id){
                test.push(id);
            }
        }

        if (test.length > 0){
            this.data.filter(a => a.id !== id)
        } else {
            throw new Error('ID not found');
        }
    }

    toString(){
        let sum = 0;
        for (let obj of this.data) {
            sum += obj.value;
        }
        return `Summary:
- Payments: ${this.data.length}
- Balance: ${sum.toFixed(`${this._option.precision}`)}`
    }
}

let p = new PaymentProcessor();
p.registerPayment('gea','feafea','srgrs',225)
console.log(p.get('gea'));


