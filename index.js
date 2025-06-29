
// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to sum the battery counts
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);
