const getAdditionalOptions = (array, variant) => {
    const options = array?.map(({ characteristics }, i) => {
        const value = characteristics.find(field => field[variant]);

        return {
            value: value?.[variant],
            id: i
        }
    }).filter(item => item.value);

    const uniqueOptions = [];
    const seenValues = {};

    for (const obj of options) {
        const { value } = obj;

        if (!seenValues[value]) {
            seenValues[value] = true;
            uniqueOptions.push(obj);
        }
    }

    return uniqueOptions;
}

const getOptions = (array) => {
    const options = array?.map(({ collection }, i) => {
        return {
            value: collection,
            id: i
        }
    }).filter(item => item.value);

    const uniqueOptions = [];
    const seenValues = {};

    for (const obj of options) {
        const { value } = obj;

        if (!seenValues[value]) {
            seenValues[value] = true;
            uniqueOptions.push(obj);
        }
    }

    return uniqueOptions;
}


const createOptions = (products) => {
    const filterSet = ['color', 'strength', 'year', 'country'];
    let options = {};

    options.sort = {
        label: "Sort by",
        name: "sortBy",
        options: [
            { value: 'Alphabetically A-Z', id: 1 },
            { value: 'Alphabetically Z-A', id: 2 },
        ]
    };

    options.collection = {
        label: "Collection",
        name: "collection",
        options: getOptions(products, "collection")
    };

    filterSet.forEach(filter => {
        const [first, ...rest] = filter;
        let word = first.toUpperCase() + rest.join('');

        options[filter] = {
            name: filter,
            label: word,
            options: getAdditionalOptions(products, filter)
        }
    });

    return options;
}
export default createOptions;