const getOptions = (array, variant) => {
    const options = array.map(({ characteristics }, i) => {
        const value = characteristics.find(field => field[variant]);

        return {
            value: value?.[variant],
            id: i
        }
    }).filter(item => item.value);

    const uniqueOptions = [];
    const seenValues = {};

    for (const obj of options) {
        const {value} = obj;

        if (!seenValues[value]) {
            seenValues[value] = true;
            uniqueOptions.push(obj);
        }
    }

    return uniqueOptions;
}


const createOptions = (products) => {
    const filterSet = ['color', 'strength', 'year', 'collection', 'country'];
    let options = {};

    options.sort = {
        label: "Sort by",
        name: "sortBy",
        options: [
            { value: 'Alphabetically A-Z', id: 1 },
            { value: 'Alphabetically Z-A', id: 2 },
            { value: 'By popularity', id: 3 },
        ]
    };

    filterSet.forEach(filter => {
        const [first, ...rest] = filter;
        let word = first.toUpperCase() + rest.join('');

        options[filter] = {
            name: filter,
            label: word,
            options: getOptions(products, filter)
        }
    });

    return options;
}
export default createOptions;