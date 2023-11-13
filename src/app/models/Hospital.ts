export class Hospital {
    hospital_id?: number; // Add "?" to make it optional if it's not always present during creation
    hospital_name: string;
    password: string;
    address: string;
    phone_no: string;
  
    constructor(hospital_name: string, password: string, address: string, phone_no: string) {
      this.hospital_name = hospital_name;
      this.password = password;
      this.address = address;
      this.phone_no = phone_no;
    }
  }