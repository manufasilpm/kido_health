export class Hospital {
  id?: number; // Add "?" to make it optional if it's not always present during creation
  hospitalName: string;
    password: string;
    address: string;
    phone_no: string;
  
    constructor(id:number ,hospitalName: string, password: string, address: string, phone_no: string) {
      this.hospitalName = hospitalName;
      this.id=id;
      this.password = password;
      this.address = address;
      this.phone_no = phone_no;
    }
  }