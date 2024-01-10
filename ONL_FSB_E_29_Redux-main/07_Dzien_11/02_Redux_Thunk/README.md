![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie do wykonania z wykładowcą

> Wróć do katalogu `06_Dzien_9-10/01_Asynchronicznosc/` a następnie wykonaj zadania.

W pliku `redux/store.js` utwórz store i dodaj middleware `redux-thunk`.

Utwórz kreator akcji `fetchQuote`, który zamiast zwarać obiekt akcji, zwróci funkcję. Funkcja ta powinna wywołać metodę `fetchQuote` z obiektu `api/index.js` oraz wcześniej utworzone akcje:

- `startFetching` - dla uaktualnienia stanu ładowania
- `quoteFetched` - w momencie rozwiązania Promise
- `quoteError` - w momencie błędu

### Zadania do samodzielnego wykonania

Zaimplementuj dodatkowy reducer `favourites`, w którym będziesz przechowywać ulubione cytaty. Niech reaguje on na akcję `ADD_FAV`.

Cytat do ulubionych można dodać poprzez kliknięcie przycisku `Dodaj do ulubionych`. Dodaj taki przycisk do komponentu `Quote`, ale wyświetl go tylko wtedy kiedy pobrany został cytat.

Utwórz nowy kontener oraz komponent o nazwie `Favourites`. Ma on wyświetlać listę ulubionych cytatów.
