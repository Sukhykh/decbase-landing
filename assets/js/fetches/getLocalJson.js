export const getLocalJson = async (path) => {
    const response = await fetch(`assets/data/${path}.json`)
    const data = await response.json()
    return data
}