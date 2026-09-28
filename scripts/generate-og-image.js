import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// CRC32 table
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const crcPayload = Buffer.concat([typeBuf, data]);
  const crc = crc32(crcPayload);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([lenBuf, crcPayload, crcBuf]);
}

function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Raw image buffer with 1 filter byte per row (RGBA)
  // Each scanline: filter_type (1 byte) + width * 4 bytes
  const scanlineLength = 1 + width * 4;
  const rawBuffer = Buffer.alloc(scanlineLength * height);

  // Background color: #090A0C -> r: 9, g: 10, b: 12
  // Accent purple: #863BFF -> r: 134, g: 59, b: 255
  // Border thickness: 6px
  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawBuffer[rowOffset] = 0; // Filter byte: None

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;

      // Draw border or grid accent
      const isBorder = (x < 6 || x >= width - 6 || y < 6 || y >= height - 6);
      const isCornerAccent = (x < 40 && y < 40) || (x >= width - 40 && y >= height - 40);

      if (isBorder || isCornerAccent) {
        rawBuffer[pixelOffset] = 134;     // R
        rawBuffer[pixelOffset + 1] = 59;   // G
        rawBuffer[pixelOffset + 2] = 255;  // B
        rawBuffer[pixelOffset + 3] = 255;  // A
      } else {
        // Subtle gradient / dark background
        const v = Math.min(25, 9 + Math.floor(y / 40));
        rawBuffer[pixelOffset] = v;
        rawBuffer[pixelOffset + 1] = v + 1;
        rawBuffer[pixelOffset + 2] = v + 3;
        rawBuffer[pixelOffset + 3] = 255;
      }
    }
  }

  // PNG Header
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: 6 (RGBA)
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT chunk (compressed raw buffer)
  const compressed = zlib.deflateSync(rawBuffer, { level: 9 });
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);

  const outputPath = path.resolve('public', 'og-image.png');
  fs.writeFileSync(outputPath, png);
  console.log(`Successfully generated ${outputPath} (${width}x${height}, ${(png.length / 1024).toFixed(1)} KB)`);
}

generateOgImage();
