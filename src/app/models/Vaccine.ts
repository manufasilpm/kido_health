export class Vaccine {
    vaccineId?: number; // Add "?" to make it optional if it's not always present during creation
    vaccineName: string;
    vaccine_category: string;
    company: string;
    description: string;
  
    constructor(vaccineName: string, password: string, vaccine_category: string, company: string,description:string) {
      this.vaccineName = vaccineName;
      this.vaccine_category = vaccine_category;
      this.company = company;
      this.description = description;
    }
  }