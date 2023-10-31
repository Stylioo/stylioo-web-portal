export const covertMinToHMin = (min: number) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    if (hours === 0) return `${minutes}min`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}min`;
}