const cointainerEL = document.querySelector(".cointainer");

const hobbys = ["programovátor", "Lezec", "OW hráč", "volejbalista"];

let index = 0;
let charaqters = 0;

updateText();

function updateText() {
    // zvětši počet vypsaných písmen
    charaqters++;

    // vypiš aktuální stav
    cointainerEL.innerHTML = `<h1>Jmenuji se Martin a jsem ${hobbys[index].slice(0, charaqters)}</h1>`;

    if (charaqters < hobbys[index].length) {
        // pokud ještě nejsme na konci slova → další písmeno za 100 ms
        setTimeout(updateText, 200);
    } else {
        // celé slovo je dopsané → počkej 1 vteřinu
        setTimeout(() => {
            index++;
            if (index === hobbys.length) {
                index = 0; // vrátíme se na začátek
            }
            charaqters = 0; // resetujeme počítadlo písmen
            updateText(); // spustíme nové slovo
        }, 500);
    }
}
