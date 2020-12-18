/**
 * scrollEventHandler - обработчик события scroll
 * при начале прокрутки экрана срабатывает коллбек start,
 * при окончании прокрутки экрана срабатывает коллбек end,
 * @param start {callback function} - onStartScroll event
 * @param end {callback function} - onEndScroll event
 * 
 */
const scrollEventHandler = (start, end) => {
    if (!end || typeof end !== 'function') return;
    if (!start || typeof start !== 'function') return;

    let isScrolling, started;

    window.addEventListener('scroll', () => {
        if (isScrolling && !started) {
            started = true
            start();
        }
        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(() => {
            started = false;
            end();
        }, 200);

    }, false);

};


const start = () => {
    console.log('start')
}

const end = () => {
    console.log('end')
}

scrollEventHandler(start, end);
