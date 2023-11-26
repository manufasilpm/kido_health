export class ConfirmDialogModel {
    title: string | undefined;
    message : string | undefined;
    constructor(public title1: string | undefined, public message1: string) {
      this.title=title1;
      this.message=message1;
    }
  }