// funkcja do obsługi kontenera z powiadomieniami
const displayAlert = ({ msg, type }) => {
  // znajdujemy kontener
  const alertBox = document.querySelector("div.msg-alert");

  // usuwamy z niego klasy cssowe
  alertBox.classList.remove("alert-danger", "alert-success");
  // a następnie dodajemy taką, która nas interesuje
  alertBox.classList.add(`alert-${type}`);

  // jeśli wiadomość jest pusta to ukrywamy kontener
  if (!msg) {
    alertBox.style.display = "none";
    return;
  }

  // ustawiamy treść na msg
  alertBox.innerHTML = msg;
  // i zmieniamy widoczność całego kontenera
  alertBox.style.display = "block";
};

// znajdujemy uchwyt do przycisku wysyłania
const submitBtn = document.querySelector("button[type=submit");
// i nasłuchujemy na kliknięcie przycisku
submitBtn.addEventListener("click", (e) => {
  // zapobiegamy odświeżaniu
  e.preventDefault();
  // szukamy uchwytów do pól z loginem i hasłem, oraz wyciągamy z nich wartości
  const login = document.querySelector("input#login").value;
  const password = document.querySelector("input#password").value;

  // jeśli pola są puste
  if (!login || !password) {
    // to wyświetlamy w naszym kontenerze odpowiednią wiadomość
    displayAlert({
      msg: "Musisz uzupełnić brakujące pola.",
      type: "danger",
    });
  }

  // jeśli login i hasło są takie jak oczekujemy
  if (login === "adm" && password === "omatkobosko") {
    // to wyświetlamy "zielony" kontener
    displayAlert({
      msg: "Zalogowano poprawnie.",
      type: "success",
    });
  } else {
    // w innym wypadku...
    displayAlert({
      msg: "Podany login i/lub hasło nie są prawidłowe.",
      type: "danger",
    });
  }
});
