export class Hospital {
  // Add "?" to make it optional if it's not always present during creation
  hospitalId!:number;
  hospitalName: string;
  password: string;
  address: string;
  phoneNo: string;

  constructor(
    hospitalName: string,
    password: string,
    address: string,
    phoneNo: string
  ) {
    this.hospitalName = hospitalName;
    this.password = password;
    this.address = address;
    this.phoneNo = phoneNo;
  }
}
