![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie - Implementacja Redux

### Część 1 - rozwiązywane z wykładowcą
Na bazie Redux API zaimplementuj własną wersję `store` w pliku `redux/customStore.js`. 

Store powinien implementować następujące metody:

- `getState`
- `subscribe`
- `dispatch`
 
--- 

### Część 2 - rozwiązywane z wykładowcą
W pliku `counterApp.js` zaimplementuj aplikację typu "licznik" bazującą na reduxie.

Aplikacja powinna utworzyć nowy store za pomocą zaimplementowanej funkcji z części 1.

Następnie za pomocą metody `subscribe` należy zapisać się na zmiany w store. Podczas każdej zmiany w store należy "wyrzucić" na konsolę odpowiedni tekst:

`from subsribe {COUNTER_VALUE}`

Stan aplikacji powinien przechowywać liczbę. Na początku niech będzie to `0`.

Aby zmienić stan należy zaimplementować dwie akcje:

- `INCREMENT` - zwiększającą licznik o podaną wartość
- `DECREMENT` - zmniejszającą licznik o podaną wartość

W pliku `redux/actions/counter.js` zaimplementuj akcje wraz z kreatorami akcji. Pamiętaj o exporcie.

Reducer do aplikacji zaimplementuj w pliku `redux/reducers/counter.js`.

Aplikacja counter powinna:
1. stworzyć nowy store
1. zapisać się na zmiany, każda zmiana loguje na konsole "from subsribe {VALUE}"
1. odpalić akcję `increment(5)` zwiększającą licznik o 5
1. odpalić akcję `decrement(2)` zmniejszającą licznik o 2
1. wypisać się ze zmian
1. odpalić akcję `decrement(2)`
1. sprawdzić poprzez prosty console.log czy wartość stanu uległa zmianie.

Wynikiem aplikacji powinnien być następujący zapis z konsoli:
```
from subscribe 5
from subscribe 3
1
```

---

### Część 3 - do samodzielnego wykonania

Po implementacji zadania spróbuj zmienić funkcję tworzącą store na tą z biblioteki `redux`. Czy widać różnicę?