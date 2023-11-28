export class Hospital {
  id?: number; // Add "?" to make it optional if it's not always present during creation
  name: string;
    password: string;
    address: string;
    phoneNumber: string;
  
    constructor(hospitalName: string, password: string, address: string, phone_no: string) {
      this.name = hospitalName;
      this.password = password;
      this.address = address;
      this.phoneNumber = phone_no;
    }
  }