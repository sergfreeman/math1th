export function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};