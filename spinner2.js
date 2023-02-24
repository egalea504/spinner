// defininf variable with array containing all spinner phases
const spinnerValues = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let previousTime = 100;

// loop through array and output each phase at the beginning of the line
for (const char of spinnerValues) {
  setTimeout(() => {
    process.stdout.write('\r|  ');
  }, previousTime += 100);
}
// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\  ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 1700);


