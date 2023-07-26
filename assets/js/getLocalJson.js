export const getLocalJson = async (path) => {
    const response = await fetch(`assets/data/${path}.json`)
    const testimonials = await response.json()
    return testimonials
}