
class EmployeeSchema {
  constructor(employeeData) {
    this.nationalId = employeeData.nationalId;
    this.phone = employeeData.phone;
    this.email = employeeData.email;
    this.dob = employeeData.dob;
    this.position = employeeData.position;
    this.status = employeeData.status;
  }

  displayUser() {
    return {
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
