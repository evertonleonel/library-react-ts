export const converterEmBase64 = (raw: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(raw);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = (error: Event) => {
      reject(error);
    };
  });
};
