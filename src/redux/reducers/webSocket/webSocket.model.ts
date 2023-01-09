export type WebSocketState = {
    isOnline: boolean;
};

export enum WebSocketErrorType {
    WEB_SOCKET_TIMEOUT = 'WEB_SOCKET_TIMEOUT',
}

export interface WebSocketError {
    type: WebSocketErrorType;
}
