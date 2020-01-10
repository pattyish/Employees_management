
class EmployeeSchema {
  constructor(employeeData) {
    this.empl_name = employeeData.empl_name;
    this.nationalId = employeeData.nationalId;
    this.phone = employeeData.phone;
    this.email = employeeData.email;
    this.dob = employeeData.dob;
    this.position = employeeData.position;
    this.status = employeeData.status;
  }

  displayUser() {
    return {
      empl_name: this.empl_name,
      nationalId: this.nationalId,
      phone: this.phone,
      email: this.email,
      dob: this.dob,
      position: this.position,
      status: this.status
    };
  }
}

export default EmployeeSchema;
