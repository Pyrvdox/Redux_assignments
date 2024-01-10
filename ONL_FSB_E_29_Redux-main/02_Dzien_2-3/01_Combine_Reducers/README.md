![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie - Combine Reducers

### Część 1

W pliku `bankApp.js` znajduje się szkielet aplikacji. Twoim zadaniem jest połączenie aplikacji z reduxem.

Celem aplikacji jest wyświetlanie stanu konta. Udostępnia ona pole do wpisania kwoty i dwa przyciski do wpłaty i wypłaty środków.

Stwórz store, który będzie przechowywał dane o saldzie konta. Powinien on także reagować na dwie akcje:
1. `WITHDRAW` - wypłać pieniądze
1. `DEPOSIT` - wpłać pieniądze
Każda akcja powinna mieć swój action-creator (`withdrawMoney` oraz `depositMoney`).

Reducer zaimplementuj w pliku `redux/reducers/bank.js`, akcje natomiast w pliku `redux/actions/bank.js`.

Odpowiednio zabezpiecz konto przed ujemnym saldem.

---

### Część 2
W pliku `redux/index.js` utwórz reducer, który będzie połączeniem dwóch reducerów - `bankReducer` i `counterReducer`.

Licznik trzymaj pod polem `counter`, a saldo bankowe pod polem `balance`. Użyj funkcji `combineReducers` z pakietu `redux`.

