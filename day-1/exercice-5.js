export const my_array_alpha = (str) => {
    let tab = [];
    let i = 0;
    if (typeof str !== 'string') return [];

    while (str[i] != undefined){
        tab = [...tab, str[i]];
        i++;
    }
    return tab;
}
