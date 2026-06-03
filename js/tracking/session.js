// constructor for  a session
function Session(activityName, startTime, endTime){
    this.activityName = activityName;
    this.startTime = startTime;
    this.endTime = endTime;
    
    this.totalDuration = () => {
        const milliseconds = this.endTime - this.startTime;
        const hours = milliseconds / (1000 * 60 * 60);
        return hours;
    }

    // function to calculate total duration
    
}

// creating a session object
let s001 = new Session('Learn javascript', new Date('2026-06-03T10:00:00'), new Date('2026-06-03T14:00:00'));

console.log(s001.activityName);

console.log(s001.totalDuration());
