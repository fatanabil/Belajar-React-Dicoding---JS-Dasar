function getJapanName(name) {
    const alfaString = 'abcdefghijklmnopqrstuvwxyz';
    const alfabet = [...alfaString.split("")];

    const japanString = "ka zu mi te ku lu ji ri ki zu me ta rin to mo no ke shi ari chi do ru mei na fu zi";
    const japanAlfa = [...japanString.split(" ")];

    const yourName = name.split("");
    const japanName = yourName.map(a => {
        if (a === " ") {
            return " "
        } else {
            return japanAlfa[alfabet.indexOf(a)];
        }
    })

    return japanName.join("");
}

const jName = getJapanName("levi");
console.log(jName);