const args = process.argv.slice(2);
const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

const timerMsg = "BEEPBEEP";

const setTimer = (delay, msg) => {
  const output = () => console.log(`${msg} (it's been ${delay} seconds)`);
  setTimeout(output, delay * 1000);
};

args.map(arg => Number(arg))
  .filter(arg => arg >= 0)
  .forEach(element => setTimer(element, timerMsg));

stdin.on('data', (key) => {
  if (key === "\u0003") {
    stdout.write("\n");
    process.exit();
  }
  if (key === "b") {
    setTimer(0, timerMsg);
  } else if (parseInt(key) >= 1 && parseInt(key) <= 9) {
    setTimer(key, timerMsg);
  }
});