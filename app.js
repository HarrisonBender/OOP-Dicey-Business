let diceArray = [];
let container = document.createElement('div');
document.body.appendChild(container);

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        container.appendChild(this.div);
        let numberGenerator = Math.floor((Math.random() * 6) + 1);
        this.div.innerText = numberGenerator;
        this.div.addEventListener('click', () => {
            this.roll();
        });
        this.div.addEventListener('dblclick', () => {
            container.removeChild(this.div);
            diceArray.splice(diceArray.indexOf(this), 1);
        })
        this.roll();
    }

    roll() {
        let numberGenerator = Math.floor((Math.random() * 6) + 1);
        this.value = numberGenerator;
        this.getChar();
        this.div.innerText = this.char;
    }
    getChar() {
        if (this.value === 1) {
            this.char = "⚀";
        } else if (this.value === 2) {
            this.char = "⚁"
        } else if (this.value === 3) {
            this.char = "⚂";
        } else if (this.value === 4) {
            this.char = "⚃";
        } else if (this.value === 5) {
            this.char = "⚄";
        } else {
            this.char = "⚅";
        }
    }
    
}

document.getElementById('sumBtn').addEventListener('click', () => {
    let sum = diceArray.reduce((a, b) => a + b.value, 0);
    alert(sum);
})

document.getElementById('generateBtn').addEventListener('click', () => {
    let newDice = new Die();
    diceArray.push(newDice);
})

document.getElementById('rollBtn').addEventListener('click', () => {
    diceArray.forEach(die => die.roll());
})