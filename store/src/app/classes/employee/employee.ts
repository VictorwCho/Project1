import { Sex } from "src/app/enumerations/sex";

export class Employee {
    private emp_no?: number;
    private birth_date: Date;
    private first_name: string;
    private last_name: string;
    private emp_sex: Sex;
    private hire_date: Date;

    constructor(birth_date: Date, first_name: string,
        last_name: string, sex: Sex, hire_date: Date, emp_no?: number, ) {
        this.emp_no = emp_no
        this.birth_date = birth_date
        this.first_name = first_name
        this.last_name = last_name
        this.emp_sex = sex
        this.hire_date = hire_date
    }

    get employeeNumber() {
        return this.emp_no
    }

    get employeeBirthdate() {
        return this.birth_date
    }

    get firstName() {
        return this.first_name
    }

    set firstName(firstName: string) {
        this.first_name = firstName

    }

    get lastName() {
        return this.last_name
    }

    set lastName(lastName: string) {
        this.last_name = lastName
    }

    get sex() {
        return this.emp_sex
    }

    set sex(sex: Sex) {
        if (sex = Sex.Female) {
            this.emp_sex = Sex.Female
        } else if (sex = Sex.Male) {
            this.emp_sex = Sex.Male
        } else {
            throw TypeError("Sex is not 'M' or 'F'.")
        }
    }

    get hireDate() {
        return this.hire_date
    }
    
}
