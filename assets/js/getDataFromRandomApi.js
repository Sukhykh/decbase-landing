export const getDataFromRandomApi = async url => {
    return fetch(url)
    .then(resp => resp.json())
    .then(data => data)
}



