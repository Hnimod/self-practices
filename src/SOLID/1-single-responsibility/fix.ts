class StepsTracker {
  currentSteps: number;

  constructor(currentSteps: number) {
    this.currentSteps = currentSteps;
  }

  trackSteps(stepsCount: number) {
    this.currentSteps += stepsCount;
    return this.currentSteps;
  }
}

class StepsTrackerLogger {
  steps: number;

  constructor(steps: number) {
    this.steps = steps;
  }

  notifyToSmartPhone() {
    console.log('Notify to smart phone: ' + this.steps);
  }
}

const tracker = new StepsTracker(0);
const jogging = tracker.trackSteps(1000);

const logger = new StepsTrackerLogger(jogging);
logger.notifyToSmartPhone();

export {};
