export const updateProgressBar = (element, height) => {
    const progress = (document.documentElement.scrollTop / height) * 100;
    element.style.width = progress + "%";
}