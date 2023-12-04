import { Child } from "./Child";
import { Hospital } from "./Hospital";
import { Vaccine } from "./Vaccine";

export class Appointment {
  id!: number;
  hospitalId!: number;
  vaccineId!: number;
  appointmentDate!: string;
  status: string ;
  child!: Child;
  hospital!: Hospital;
  vaccine!: Vaccine;


  constructor(hospitalId: number, vaccineId: number, appointmentDate: string, status: string) {
    this.hospitalId = hospitalId;
    this.vaccineId = vaccineId;
    this.appointmentDate = appointmentDate;
    this.status = status;
  }
}

