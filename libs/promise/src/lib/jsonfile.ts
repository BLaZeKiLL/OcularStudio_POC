import * as json from 'jsonfile';

export function readFile(file: json.Path, options?: json.JFReadOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    json.readFile(file, options, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

export function writeFile(file: json.Path, data: any, options?: json.JFWriteOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    json.writeFile(file, data, options, (err) => {
      if (err) reject(err);
      else resolve();
    })
  })
}
