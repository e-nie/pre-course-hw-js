
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const deutscheFlagge = colors.filter(el=> {
        return el === "черный" || el === "красный" || el === "желтый";
    })
    return deutscheFlagge
}

console.log(createColorString(colors));


