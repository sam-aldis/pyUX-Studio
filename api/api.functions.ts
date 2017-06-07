import * as fs from 'fs';
import * as path from 'path';


export class CreateNewProject {
    constructor(public filename) {}
    create(): string {
        const fpath = path.join(__dirname, this.filename + '.xml');
        const fdata = '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
                    + this.filename
                    + '">\n\n</App>';
        fs.writeFile(fpath, fdata);
        return fdata;
    }
}
export class SaveToProject  {
    constructor(public filename) {}
    writeAll(data: XMLDocument | string): string {
        const fpath = path.join(__dirname, this.filename + '.xml');
        const fdata = '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
                    + this.filename
                    + '">\n\n</App>';
        fs.writeFile(fpath, fdata);
        fs.appendFile(fpath, data);
        return fdata;
    }
    appendData(data: XMLDocument | string) {
        const fpath = path.join(__dirname, this.filename + '.xml');
        fs.appendFile(fpath, data);
    }
}

export class LoadProject {
    private rdata: string;
    constructor(public filename) {}
    content(): string {
        const fpath = path.join(__dirname, this.filename + '.xml');
        return fs.readFileSync(fpath).toString();
    }
}
