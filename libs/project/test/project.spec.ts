import { Project, ProjectData } from '../src/lib/project';

describe('Project class', () => {

  let project: Project;

  const data: ProjectData = {
    name: 'Test',
    path: './test/project/'
  }

  it('Create a project', () => {
    project = new Project(data);
    expect(project.Name).toBe(data.name);
  });

  it('Save the project', async () => {
    try {
      const result = await project.save();
      expect(result).toBe(true);
    } catch (err) {
      throw err;
    }
  });

  it('Load the project', async () => {
    try {
      const load = await Project.load(data.path + data.name + '.osproj');
      expect(load.Name).toBe(data.name);
    } catch (err) {
      throw err;
    }
  });

});
