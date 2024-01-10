![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie

Zainstaluj paczkę `prop-types`. Następnie w pliku `User.js` zaimplementuj komponent, który będzie wyświetlał informacje o użytkowniku.

Komponent przyjmuje 4 propsy:

- `firstName` - imię
- `lasName` - nazwisko
- `onClick` - handler na zdarzenie onClick
- `age` - wiek użytkownika

Jego struktura HTML powinna składać się z:

- `<h1>` w którym wypisany będzie text: "Cześć! {imię} {nazwisko}"
- `<div>` w którym wyświetlany będzie text: `Masz {age} lat", element ten powinien być wyświetlany tylko wtedy kiedy prop 'age' jest zdefiniowany
- `<button>` do którego przypięty będzie handler przekazany jako prop `onClick`

Do komponentu dopisz odpowiednie pole `propTypes`, które przechowywać będzie informację o atrybutach, które można przekazać do komponentu:

- `firstName` - string - wymagany
- `lastName` - string - wymagany
- `onClick` - funkcja - wymagana
- `age` - wiek - wymagany
