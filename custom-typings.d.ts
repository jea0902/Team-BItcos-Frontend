declare module 'websocket' {
  class W3CWebSocket {
    constructor(url: string, protocol?: string | string[], origin?: string, headers?: object, requestOptions?: object);
    onopen: () => void;
    onclose: () => void;
    onerror: (error: Event) => void;
    onmessage: (message: { data: string | ArrayBuffer }) => void;
    close: () => void;
    send: (data: string | ArrayBuffer) => void;
  }

  export { W3CWebSocket };
}