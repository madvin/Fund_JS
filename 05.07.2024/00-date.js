const date = new Date();

const todaysDate = {
    day: date.toLocaleDateString(), 
    showDate() {
        return this.day;

    },
};
// const today = todaysDate.showDate()
// console.log(today);

console.log(date);