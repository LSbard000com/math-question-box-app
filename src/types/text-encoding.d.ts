declare module '@sinonjs/text-encoding' {
    export const TextEncoder: typeof globalThis.TextEncoder;
    export const TextDecoder: typeof globalThis.TextDecoder;
  }

declare module 'web-streams-polyfill' {
  export const ReadableStream: typeof globalThis.ReadableStream;
}
