const getAdditionalOptions = (array, variant) => {
    const options = array?.map(({ characteristics }, i) => {
        const value = Object.entries(characteristics).find(field => {
            if (field[0] === variant) return field[1];
        });

        return {
            value: value?.[1],
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

    const options = array?.map(({ collectionBelongs }, i) => {

        return {
            value: collectionBelongs,
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
        name: "collectionBelongs",
        options: getOptions(products)
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