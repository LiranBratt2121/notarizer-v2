const convertBase64 = (file: Blob) => {
    return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            const b64Result = fileReader.result;

            if (typeof b64Result === 'string') {
                resolve(b64Result);
            } else {
                reject("Shouldn't happpen but the result we got when parsing the image to b64 is not a string!")
            }
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export { convertBase64 }