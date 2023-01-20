export const NUMBER_DECLINATIONS_TEMPLATES: {[key: string]: string[]} = {
    minute: ['минуты', 'минут', 'минут'],
    hour: ['часа', 'часов', 'часов'],
    day: ['дня', 'дней', 'дней'],
    month: ['месяца', 'месяцев', 'месяцев'],
    lessons: ['урок', 'урока', 'уроков'],
};

export const numberDeclination = (n: number, wordArr: string[]) => {
    n %= 100;
    if (n >= 5 && n <= 20) {
        return wordArr?.[2];
    }
    n %= 10;
    if (n === 1) {
        return wordArr?.[0];
    }
    if (n >= 2 && n <= 4) {
        return wordArr?.[1];
    }
    return wordArr?.[2];
};
