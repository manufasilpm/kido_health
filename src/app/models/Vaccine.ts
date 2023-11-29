export class Vaccine {
    vaccineId?: number; // Add "?" to make it optional if it's not always present during creation
    vaccineName: string;
    vaccineCategory: string;
    company: string;
    description: string;
    status:string;
  
    constructor(vaccineName: string, vaccineCategory: string, company: string,description:string,status:string) {
      this.vaccineName = vaccineName;
      this.vaccineCategory = vaccineCategory;
      this.company = company;
      this.description = description;
      this.status = status;
    }
  }