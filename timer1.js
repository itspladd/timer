const args = process.argv.slice(2);

const timerMsg = "BEEPBEEP";

const setTimer = (delay, msg) => {
  const output = () => console.log(`${msg} (it's been ${delay} seconds)`);
  setTimeout(output, delay * 1000);
};

args.map(arg => Number(arg))
  .filter(arg => arg >= 0)
  .forEach(element => setTimer(element, timerMsg));