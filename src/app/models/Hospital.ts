export class Hospital {
  id?: number; // Add "?" to make it optional if it's not always present during creation
    name: string;
    password: string;
    address: string;
    phone_no: string;
  
    constructor(name: string, password: string, address: string, phone_no: string) {
      this.name = name;
      this.password = password;
      this.address = address;
      this.phone_no = phone_no;
    }
  }