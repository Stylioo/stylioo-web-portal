
const generateTimeIntervals = () => {
    const intervals = [];
    const currentTime = new Date('2000-01-01T08:00:00');

    const endTime = new Date('2000-01-01T17:45:00');

    while (currentTime <= endTime) {
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        intervals.push(formattedTime);
        currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    return intervals;
};

const timeIntervals = generateTimeIntervals();

export default timeIntervals;