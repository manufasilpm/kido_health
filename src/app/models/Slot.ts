export class Slot {
    hospitalId!:string | null;
    slotCount!:number;
    dayOfWeek!:string;
    fromTime!:string;
    toTime!:string;


    constructor(hospitalId: string | null, slotCount: number, day: string,fromTime: string,toTime: string) {
        this.hospitalId = hospitalId;
        this.slotCount = slotCount;
        this.dayOfWeek = day;
        this.fromTime = fromTime;
        this.toTime = toTime;
      }

}