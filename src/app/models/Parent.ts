export class Parent {
    parent_id?: number; // Add "?" to make it optional if it's not always present during creation
    parent_name: string;
    password: string;
    address: string;
    phone_no: string;
  
    constructor(parent_name: string, password: string, address: string, phone_no: string) {
      this.parent_name = parent_name;
      this.password = password;
      this.address = address;
      this.phone_no = phone_no;
    }
  }