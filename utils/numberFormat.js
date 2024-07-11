export const numFormat = value => {
    let config = {}
    if(value > 9999){
        config = {
            notation: "standard",
            maximumFractionDigits: 1
        }
    }
    return Intl.NumberFormat("tr", config).format(value)
}

export const numFormatReels = value => {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1).replace('.', ',').replace(/,0$/, '') + 'M';
    } else if (value >= 100_000) {
        return Math.round(value / 1_000) + 'B';
    } else if (value >= 10_000) {
        return (value / 1_000).toFixed(1).replace('.', ',').replace(/,0$/, '') + 'B';
    }
    // Binlerin altında
    return value.toString().replace('.', ',');
};