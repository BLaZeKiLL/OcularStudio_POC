export class Project {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public save(): boolean {
    return false;
  }

}
