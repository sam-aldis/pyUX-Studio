import * as fs from 'fs';
import * as path from 'path';


export class CreateNewProject {
    constructor(public filename) {}
    create() {
        const fpath = path.join(__dirname, this.filename + '.xml');
        fs.writeFile(fpath, '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
                            + this.filename
                            + '">\n\n</App>');
    }
}
export class SaveToProject {
    constructor(public filename) {}
    writeAll(data: XMLDocument | string) {
        const fpath = path.join(__dirname, this.filename + '.xml');
        fs.writeFile(fpath, '<?xml version="1.0" encoding="UTF-8" ?>\n<App type="pyUX" version="1.0" project="'
                            + this.filename
                            + '">\n\n</App>');
        fs.appendFile(fpath, data);
    }
    appendData(data: XMLDocument | string) {
        const fpath = path.join(__dirname, this.filename + '.xml');
        fs.appendFile(fpath, data);
    }
}

export class LoadProject {
    private rdata: Buffer;
    constructor(public filename) {}
    content(): Buffer {
        const fpath = path.join(__dirname, this.filename + '.xml');
        return fs.readFileSync(fpath);
    }
}
