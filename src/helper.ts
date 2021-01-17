export const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});

export const handleFetchErrors = (response: Response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}