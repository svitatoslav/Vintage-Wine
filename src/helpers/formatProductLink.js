export const formatProductLink = (name) => {
    return `/shop/${name.replace(/ /g, '-').replace(/\./g, '+')}`
}
