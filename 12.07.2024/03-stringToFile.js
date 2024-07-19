function extraxctFile(path) {
    const pathParts = path.split('\\');

    const fileNameExtention = pathParts.pop();

    const lastDotIndex = fileNameExtention.lastIndexOf('.');
    
    const fileName = fileNameExtention.substring(0, lastDotIndex);

    const fileExtention = fileNameExtention.substring(lastDotIndex + 1);


    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}

extraxctFile('C:\\Projects\\Data-Structures\\LinkedList.cs')