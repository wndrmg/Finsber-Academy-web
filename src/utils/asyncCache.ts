const get = (key: string): any | null => {
    try {
        const data = localStorage.getItem(`@cache.${key}`);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('asyncCache get ' + key, e);
    }

    return null;
};

const save = (key: string, data: any): void => {
    try {
        const dataString = JSON.stringify(data);
        if (dataString) {
            localStorage.setItem(`@cache.${key}`, dataString);
        }
    } catch (e) {
        console.error('asyncCache save ' + key, e);
    }
};
export const asyncCache = {
    get,
    save,
    COURSES: 'COURSES',
    PROGRESS: 'PROGRESS',
};
