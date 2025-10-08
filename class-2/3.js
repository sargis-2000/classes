class Person {
    #firstName
    #lastName
    #gender
    #age

    constructor(firstName, lastName, gender, age) {
        this.#firstName = firstName
        this.#lastName = lastName
        this.#gender = gender
        this.#age = age
    }

    get firstName() {
        return this.#firstName
    }

    get lastName() {
        return this.#lastName
    }

    get gender() {
        return this.#gender
    }

    get age() {
        return this.#age
    }

    set firstName(firstName) {
        this.#firstName = firstName
    }

    set lastName(lastName) {
        this.#lastName = lastName
    }

    set gender(gender) {
        this.#gender = gender
    }

    set age(age) {
        this.#age = age
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`
    }
}

class Student extends Person {
    #year
    #fee
    #program

    constructor(firstName, lastName, gender, age, year, fee, program) {
        super(firstName, lastName, gender, age)
        this.#year = year
        this.#fee = fee
        this.#program = program
    }

    get year() {
        return this.#year
    }

    get fee() {
        return this.#fee
    }

    get program() {
        return this.#program
    }

    set year(year) {
        this.#year = year
    }

    set fee(fee) {
        this.#fee = fee
    }

    set program(program) {
        this.#program = program
    }

    passExam(programName, grade) {
        const program = this.program.find(p => p.programName === programName)

        if (program) {
            program.grade = grade
        }

        if (this.isAllPassed()) {
            this.year += 1
            console.log(`${this.firstName} ${this.lastName} passed all exams`)
        }
    }

    isAllPassed() {
        return this.program.every(p => p.grade >= 50)
    }

    toString() {
        return `${super.toString()} Year: ${this.year} Fee: ${this.fee}`
    }
}

const student1 = new Student(
    'Alice',
    'Johnson',
    'female',
    21,
    1,
    2000,
    [
        { programName: 'math', grade: 10 },
        { programName: 'english', grade: 10 }
    ]
)

student1.passExam('math', 50)
student1.passExam('english', 60)

console.log(student1.toString())