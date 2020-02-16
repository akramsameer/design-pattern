class Employee {
  static instance: Employee;

  private constructor(private name: string) {}

  static getEmployee(name: string): Employee {
    if (this.instance) return this.instance;

    this.instance = new Employee(name);
    return this.instance;
  }
}

// private constructor is the key
// create a static instance
// create a static method to return the static instance and initialize it if it's null
