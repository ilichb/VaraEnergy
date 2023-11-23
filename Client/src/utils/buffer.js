// src/utils/buffer.js
let Buffer;
if (typeof window !== 'undefined') {
  try {
    // Intenta importar buffer de la manera normal
    Buffer = require('buffer').Buffer;
  } catch (e) {
    // Si hay un error, asigna una implementación de buffer simple
    Buffer = class SimpleBuffer {
      static from(str, encoding) {
        if (encoding && encoding !== 'hex') {
          throw new Error('Unsupported encoding');
        }
        return new SimpleBuffer(str, encoding);
      }

      constructor(str, encoding) {
        this.value = str;
        this.encoding = encoding;
      }

      toString(encoding) {
        if (encoding && encoding !== this.encoding) {
          throw new Error('Unsupported encoding');
        }
        return this.value;
      }
    };
  }
}

export { Buffer };
