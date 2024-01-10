![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - do wykonania z wykładowcą

**W tym zadaniu nie korzystamy z Reduxa. Ma ono na celu przybliżenie tematu HOC.**

W pliku `hoc/withTimer.js` stwórz HOC (komponent wyższego rzędu) i nazwij go `withTimer`. Powinien on udostępniać następujące funkcjonalności:

- funkcję `startTimer`, która wystartuje licznik, zliczający co sekundę
- funkcję `stopTimer`, która zatrzyma licznik

Oprócz wyżej wymienionych funkcji HOC powinien wstrzykiwać do komponentu docelowego pole `counter`, które przechowywać będzie wartość licznika.

Początkowa wartość licznika powinna być ustawiona na `0`.

Następnie w pliku `components/Stopper` zaimplementuj komponent wyświetlający:

- przycisk start - startujący licznik
- przycisk stop - zatrzymujący licznik
- `<p>` w którym wyświetlisz aktualną wartość licznika
- komponent powinien też wyświetlać to, co zostanie przekazane do niego jako `children`. Niech wyświetla tą zawartość zaraz poniżej znacznika `<p>` z wartością licznika.

Wyeksportuj oba komponenty `Stopper` i `StopperWithTimer`.