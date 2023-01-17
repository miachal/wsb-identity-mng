const b64Decode = (text) => Buffer.from(text, "base64").toString();
const b64Encode = (text) => Buffer.from(text).toString("base64");

const assertions = [
  ["razdwatrzy", "cmF6ZHdhdHJ6eQ=="],
  ["BASE64ENCODE.ORG", "QkFTRTY0RU5DT0RFLk9SRw=="],
  ["error", "error"],
];

assertions.forEach(([txt, b64]) => {
  if (txt === b64Decode(b64)) {
    return;
  }

  if (b64 === b64Encode(txt)) {
    return;
  }

  console.log(`Error: txt: ${txt} !== b64: ${b64}`);
});
