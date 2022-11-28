const express = require("express");
const path = require("path");

const PORT = 32167;

const app = express();

// middleware dla basic auth
// równie dobrze (właściwie to lepiej) można użyć express-basic-auth
// i ograniczyć całość do app.use(basicAuth('login', 'password'))
app.use((req, res, next) => {
  // prawidłowe credentiale
  const validCredentials = {
    login: "adm",
    password: "omatkobosko",
  };

  // Basic 0g== (:)
  // rozbijamy powyższe i bierzemy to co jest po spacji
  const base64Auth = (req.headers.authorization || "").split(" ")[1] || "";
  // dekodujemy b64, zrzucamy na string, otrzymujemy parę login:hasło, które rozbijamy po ":" i przypisujemy do odpowiednich zmiennych
  const [login, password] = Buffer.from(base64Auth, "base64")
    .toString()
    .split(":");

  // porównujemy otrzymane wyniki z naszymi
  if (
    login === validCredentials.login &&
    password === validCredentials.password
  ) {
    // jeśli wszystko jest okej to wołamy kolejny middleware
    return next();
  }

  // jeśli nie to ustawiamy odpowiedni header
  res.setHeader("WWW-Authenticate", "Basic");
  // zwracamy status 401
  res.status(401).send("Authentication needed.");
});

// serwujemy statyczną zawartość z folderu public
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  // callback z informacją, że server wystartował
  console.log(`* Server is listening on port: ${PORT}...`);
});
