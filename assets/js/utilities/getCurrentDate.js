export const getCurrentDate = isYear => {
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const date = currentDate.toLocaleDateString()
    return isYear ? year : date
}