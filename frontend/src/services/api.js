export const fakeApi = (data, delay = 800) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), delay);
    });
};