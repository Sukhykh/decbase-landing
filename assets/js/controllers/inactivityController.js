const modal = document.querySelector('.inactiviti')

const inactivityTimer = 60000;
let timeoutId;
let resetTimeoutId;

const newTimer = () => {
    clearTimeout(timeoutId);
    clearTimeout(resetTimeoutId);
    resetTimeoutId = setTimeout(() => {
        close()
    }, inactivityTimer * 2);
    timeoutId = setTimeout(() => {
        modal.classList.remove('inactiviti--none');
        document.body.classList.add('body--none');
        modal.addEventListener('click', () => {
            modal.classList.add('inactiviti--none');
            document.body.classList.remove('body--none');
            newTimer()
        })
    }, inactivityTimer);
}

export const inactivityController = () => {
    document.addEventListener("mousemove", newTimer);
    document.addEventListener("mousedown", newTimer);
    document.addEventListener("keypress", newTimer);
    document.addEventListener("touchmove", newTimer);
    document.addEventListener("touchstart", newTimer);
    newTimer()
}