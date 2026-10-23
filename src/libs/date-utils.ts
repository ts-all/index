/**
 * convert excel date number to Date
 * @param number - excel date number
 * @param tzHours - timezone in hours
 * @returns Date object
 */
export function excelNumberToDate(number: number, tzHours?: number): Date {
    const offsetHours: number = tzHours ?? (-(new Date().getTimezoneOffset() / 60));

    // ((number of days in excel) - (days from 1900.01.01 to 1970.01.01) - (timezone offset of a day))* (24 hours a day) * (60 miniutes an hour) * (60 seconds a miniute) * (1000 miliseconds a second)
    return new Date(Math.round((number - 25569 - (offsetHours / 24)) * 24 * 60 * 60 * 1000));
}

export function isValidDate(value: unknown): value is Date {
    return value instanceof Date && Number.isFinite(value.getTime());
}
