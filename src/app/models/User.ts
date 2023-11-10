export class User {
     // Add "?" to make it optional if it's not always present during creation
     phoneNumber: string;
    password: string;
   
  
    constructor(phoneNumber: string, password: string) {
      this.phoneNumber = phoneNumber;
      this.password = password;
    
    }
  }