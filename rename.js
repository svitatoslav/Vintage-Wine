const fs = require('fs');
const path = require('path');

const renameFilesInDirectory = (directoryPath) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log(`Unable to scan directory: ${err}`);
        }

        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    return console.log(`Unable to get file stat: ${err}`);
                }

                if (stat.isDirectory()) {
                    // If it's a directory, recurse into it
                    renameFilesInDirectory(filePath);
                } else if (file.endsWith('.js')) {
                    // If it's a .js file, rename it
                    const newFilePath = path.join(directoryPath, file.replace('.js', '.jsx'));
                    fs.rename(filePath, newFilePath, (err) => {
                        if (err) {
                            console.log(`Error renaming file: ${err}`);
                        } else {
                            console.log(`Renamed ${filePath} to ${newFilePath}`);
                        }
                    });
                }
            });
        });
    });
};

const startDirectory = 'src/components';  // Root directory to start from
renameFilesInDirectory(startDirectory);

