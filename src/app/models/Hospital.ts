export class Hospital {
  hospitalId?: number; // Add "?" to make it optional if it's not always present during creation
  hospitalName: string;
    password: string;
    address: string;
    phoneNo: string;
  
    constructor(hospitalName: string, password: string, address: string, phoneNo: string) {
      this.hospitalName = hospitalName;
      this.password = password;
      this.address = address;
      this.phoneNo = phoneNo;
    }
  }