// Исходящие Commands
export const GET_CONFIG_COMMAND = 'GET_CONFIG_COMMAND';
export const GET_USER_DATA_COMMAND = 'GET_USER_DATA_COMMAND';

export type RequestApi = {
    type: string;
    payload?: any;
};
