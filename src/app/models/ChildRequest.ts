export class ChildRequest {
    // Add "?" to make it optional if it's not always present during creation
    name: string;
    gender: string;
    completed_vaccine: string;
    latest_vaccine: string;
    dob: string;
    childId:number;
  
  
    constructor(
      name: string,
      gender: string,
      completed_vaccine: string,
      latest_vaccine: string,
      dob: string,
      childId: number,
      
    ) {
      this.name = name;
      this.gender = gender;
      this.completed_vaccine = completed_vaccine;
      this.latest_vaccine = latest_vaccine;
      this.dob = dob;
      this.childId= childId;
      
    }
    
  }
  