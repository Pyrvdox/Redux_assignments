import bankApp from "./bankApp";
import counterApp from "./counterApp";

// Tego pliku nie musisz modyfikować
// Po uruchomieniu skryptu `npm start` powinieneś zobaczyć w przeglądarce aplikację bankApp
counterApp();
bankApp.start(document.querySelector("#app"));
