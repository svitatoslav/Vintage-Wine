export const filters = [
    {
        name: 'sortBy',
        title: 'Sort by',
        options: [
            { value: 'alphabeticallyAZ', label: 'Alphabetically A-Z' },
            { value: 'alphabeticallyZA', label: 'Alphabetically Z-A' },
            { value: 'byPpopularity', label: 'By popularity' },
        ]
    },
    {
        name: 'color',
        title: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'red', label: 'Red' },
            { value: 'deep-ruby-red', label: 'Deep ruby red' },
        ]
    },
    {
        name: 'collection',
        title: 'Сollection',
        options: [
            { value: 'special-edition', label: 'Special Edition' },
            { value: 'georgian-legend', label: 'Georgian Legend' },
            { value: 'reserve', label: 'Reserve' },
        ]
    },
    {
        name: 'year',
        title: 'Year',
        options: [
            { value: '2007', label: '2007' },
            { value: '2022', label: '2022' },
            { value: '2014', label: '2014' },
            { value: '2011', label: '2011' },
            { value: '2004', label: '2004' },
        ]
    },
    {
        name: 'strength',
        title: 'Strength',
        options: [
            { value: 'light', label: '9,0-13,0' },
            { value: 'middle', label: '10,0-13,0' },
            { value: 'strong', label: '10,5-13,5' },
        ]
    },
    {
        name: 'country',
        title: 'Country',
        options: [
            { value: 'georgia', label: 'Georgia' },
            { value: 'italy', label: 'Italy' },
            { value: 'spain', label: 'Spain' },
            { value: 'scotland', label: 'Scotland' },
            { value: 'south africa', label: 'South Africa' },
            { value: 'ukraine', label: 'Ukraine'},
        ]
    }
];