export class Place {
  public id: string;
  public m2: string;
  public images: any[];
  public name: string;
  public numberHabit: number;
  public location: string;
  public price: string | number;
  public reference: string;
  public type: string;
  public street: string;

  constructor() {
    this.id = '';
    this.m2 = '';
    this.images = [];
    this.name = '';
    this.numberHabit = 0;
    this.location = '';
    (this.price = ''),
      (this.reference = ''),
      (this.type = ''),
      (this.street = '');
  }
}
