export class Appointment {
    hospitalId!:number;
    vaccineId!:number;
    appointmentDate!:string;


    constructor(hospitalId: number, vaccineId: number, appointmentDate: string) {
        this.hospitalId = hospitalId;
        this.vaccineId = vaccineId;
        this.appointmentDate = appointmentDate;
      }
}

