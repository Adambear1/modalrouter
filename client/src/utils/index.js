export const compile = (str) => {
        return str.toLowerCase().substring(0, str.length - 1).replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    }
