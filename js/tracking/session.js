// constructor for  a session
function Session(activityName, startTime, endTime){
    this.activityName = activityName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = startTime + endTime;
}

// creating a session object
let s001 = new Session('Learn javascript', 1000, 1400);