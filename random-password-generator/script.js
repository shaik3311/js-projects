const lengthRange = document.getElementById('length-range');
const lengthValue = document.getElementById('length-value');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const passwordOutput = document.getElementById('password-output');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

lengthRange.oninput = () => {
  lengthValue.textContent = lengthRange.value;
};

function generatePassword(length, options) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const number = '0123456789';
  const symbol = '!@#$%^&*()_+=[]{}<>?';

  let chars = '';
  if (options.uppercase) chars += upper;
  if (options.lowercase) chars += lower;
  if (options.numbers) chars += number;
  if (options.symbols) chars += symbol;

  if (chars.length === 0) return 'Select at least 1 option';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

generateBtn.onclick = () => {
  const length = parseInt(lengthRange.value);
  const options = {
    uppercase: uppercase.checked,
    lowercase: lowercase.checked,
    numbers: numbers.checked,
    symbols: symbols.checked,
  };
  const password = generatePassword(length, options);
  passwordOutput.textContent = password;
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(passwordOutput.textContent).then(() => {
    alert('Password copied!');
  });
};

// Optional: handle security level buttons
document.querySelectorAll('.level-buttons button').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.level-buttons button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (btn.id === 'weak') {
      lengthRange.value = 6;
      lengthValue.textContent = 6;
      uppercase.checked = false;
      lowercase.checked = true;
      numbers.checked = true;
      symbols.checked = false;
    } else if (btn.id === 'medium') {
      lengthRange.value = 10;
      lengthValue.textContent = 10;
      uppercase.checked = true;
      lowercase.checked = true;
      numbers.checked = true;
      symbols.checked = false;
    } else {
      lengthRange.value = 14;
      lengthValue.textContent = 14;
      uppercase.checked = true;
      lowercase.checked = true;
      numbers.checked = true;
      symbols.checked = true;
    }
  };
});
