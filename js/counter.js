function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value30");
animateValue(obj, 0, 30, 1500);
const ob = document.getElementById("value40");
animateValue(ob, 0, 40, 1500);
const obe = document.getElementById("value60");
animateValue(obe, 0, 60, 1500);
const obr = document.getElementById("value70");
animateValue(obr, 0, 70, 1500);
const obt = document.getElementById("value80");
animateValue(obt, 0, 80, 1500);
const oby = document.getElementById("value100");
animateValue(oby, 0, 100, 1500);