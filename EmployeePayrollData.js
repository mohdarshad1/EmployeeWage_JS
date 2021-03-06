class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        let idAndSalaryRegex = RegExp("[0-9]+");
        if(idAndSalaryRegex.test(params[0])){
        this.id = params[0];}
        else{
            throw "ID is incorrect";
        }
        this.name = params[1];
        if(idAndSalaryRegex.test(params[2])){
        this.salary= params[2];}
        else{
            throw "Salary is incorrect";
        }
        let genderRegex = RegExp("[MF]");
        if(genderRegex.test(params[3])){
        this.gender = params[3];}
        else{
            throw "Gender is incorrect";
        }
        let dateRegex = RegExp("[0-2][0-9][0-9][0-9][-]");
        if(params[4] <= new Date()){
        this.startDate = params[4];}
        else{
            throw "Date is incorrect";
        }
    }

    get name(){ return this._name;}
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                        this.startDate.toLocalDateString("en-US",options);
        return "id="+ this.id+", name="+this.name+", salary="+this.salary+
                ", gender="+this.gender+", startDate="+empDate;
    }
}

/*let employeePayrollData = new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
try{
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}*/
let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData);