export const toUpperCase = (str) => {
    if (!str) {
        return null
    }
    return str[0].toUpperCase() + str.slice(1)
}