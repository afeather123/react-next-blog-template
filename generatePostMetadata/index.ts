import {readdir, writeFile} from 'fs';

readdir('../pages/posts', function(err, files) {
    // so, we we want to iterate over all the files in the directory and generate some valid import statements.

    const imports = files.map((file, i) => {
        const [fileName, extension] = file.split('.');

        return `import {metadata as a${i}} from './pages/posts/${extension === 'mdx' ? file : fileName}'` 
    }).join('\n');

    const exprt = 'export default [' + files.map((file, i) => `{path: '${file.split('.')[0]}', ...a${i}}`).join(',') + ']';

    writeFile('../postMetadata.ts', imports + '\n' + exprt, (err) => {
        if(!err)
            console.log('generated metadata import!');
    });
})