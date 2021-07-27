let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alertKeyB = function() {
  process.stdout.write('\x07');
  process.stdin.write('\r');
};

const instantTimer = function(number) {
  console.log(`\n` + `Setting timer for ${number} seconds...`);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number * 1000);
};

const sayBye = function() {
  process.stdout.write('Thanks for using me, ciao!');
  setTimeout(() => {
    process.exit();
  }, 2500);
  setTimeout(() => {
    process.stdout.write('\n');
  }, 2450);
};

process.stdin.on('keypress', (key) => {
  if (key === 'b') {
    alertKeyB();
  }
  if (key === '\u0003') {
    sayBye();
  }
  if (key >= 1 && key <= 9) {
    instantTimer(key);
  }
});

