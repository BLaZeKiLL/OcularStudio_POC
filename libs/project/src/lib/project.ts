import { readFile, writeFile } from '@ocular/promise';

export interface ProjectData {
  name: string,
  path: string
}

export class Project {

  private name: string;
  private path: string;

  constructor(data: ProjectData) {
    this.name = data.name;
    this.path = data.path + data.name + '.osproj';
  }

  public static async load(path: string): Promise<Project> {
    try {
      const data: ProjectData = await readFile(path);
      return new Project(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async save(): Promise<boolean> {
    const data = {
      name: this.name
    };

    try {
      await writeFile(this.path, data);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public get Name(): string {
    return this.name;
  }

}
