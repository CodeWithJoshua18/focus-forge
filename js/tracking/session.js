//  creating a session object
function Session(activityName, startTime, endTime){
    this.activityName = activityName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = startTime + endTime;
}

// instatiating the session object
let s001 = new Session('Learn javascript', 1000, 1400);