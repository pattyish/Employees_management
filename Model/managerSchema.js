class ManagerSchema {
  constructor(managerData) {
    this.manager_name = managerData.manager_name;
    this.nationalId = managerData.nationalId;
    this.phone = managerData.phone;
    this.email = managerData.email;
    this.dob = managerData.dob;
    this.position = "";
    this.status = "inactive";
    this.password = managerData.password;
  }
  displayManager() {
    return {
      name: this.manager_name,
      nationalId: this.nationalId,
      phone: this.phone,
      email: this.email,
      dob: this.dob,
      position: this.position,
      status: this.status
    };
  }
}

export default ManagerSchema;
