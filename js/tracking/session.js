// constructor for  a session
function Session(activityName, startTime, endTime){
    this.activityName = activityName;
    this.startTime = startTime;
    this.endTime = endTime;
    
    this.totalDuration = () => {
        return this.endTime - this.startTime;
    }

    // function to calculate total duration
    
}

// creating a session object
let s001 = new Session('Learn javascript', 1000, 1400);
console.log(s001.totalDuration());
