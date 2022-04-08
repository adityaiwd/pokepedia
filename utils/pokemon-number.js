const pokemonNumber = (num) => {
    if (num.length === 1) {
        return "#00" + num;
    } else if (num.length === 2) {
        return "#0" + num;
    } else {
        return "#" + num;
    }
}

export default pokemonNumber