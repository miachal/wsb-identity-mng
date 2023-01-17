const POSSIBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const SPECIAL_CHARS = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const inRange = (index, from, to) =>
  POSSIBLE_CHARS[index] >= from && POSSIBLE_CHARS[index] <= to;

const passgen = () => {
  let password = "";
  let uppercaseCount = 0;
  let specialCount = 0;
  let numberCount = 0;
  let lowercaseCount = 0;
  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * POSSIBLE_CHARS.length);
    password += POSSIBLE_CHARS[randomIndex];
    if (inRange(randomIndex, "A", "Z")) {
      uppercaseCount++;
    } else if (inRange(randomIndex, "a", "z")) {
      lowercaseCount++;
    } else if (inRange(randomIndex, "0", "9")) {
      numberCount++;
    } else if (SPECIAL_CHARS.indexOf(POSSIBLE_CHARS[randomIndex]) >= 0) {
      specialCount++;
    }
  }
  while (uppercaseCount === 0 || specialCount === 0 || numberCount === 0) {
    let randomIndex = Math.floor(Math.random() * POSSIBLE_CHARS.length);
    if (uppercaseCount === 0 && inRange(randomIndex, "A", "Z")) {
      password += POSSIBLE_CHARS[randomIndex];
      uppercaseCount++;
    } else if (
      specialCount === 0 &&
      SPECIAL_CHARS.indexOf(POSSIBLE_CHARS[randomIndex]) >= 0
    ) {
      password += POSSIBLE_CHARS[randomIndex];
      specialCount++;
    } else if (numberCount === 0 && inRange(randomIndex, "0", "9")) {
      password += POSSIBLE_CHARS[randomIndex];
      numberCount++;
    }
  }
  return password;
};

for (let j = 0; j < 10; j++) {
  console.log(passgen());
}
