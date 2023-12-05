export class Parent {

  parentName: string;
    password: string;
    address: string;
    phoneNo: string;
    email: string;
  
    constructor(parentName: string,password: string, address: string, phoneNo: string,email:string) {
      this.parentName = parentName;
      this.password = password;
      this.address = address;
      this.phoneNo = phoneNo;
      this.email = email;
    }
  }