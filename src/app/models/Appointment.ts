export class Appointment {
    hospitalId!:number;
    vaccineId!:number;
    appointmentDate!:string;
    status!:string;


    constructor(hospitalId: number, vaccineId: number, appointmentDate: string,status:string) {
        this.hospitalId = hospitalId;
        this.vaccineId = vaccineId;
        this.appointmentDate = appointmentDate;
        this.status=status;
      }
}

