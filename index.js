const fs = require('fs/promises');

async function sumTxt() {
    try {
        const dataA = await fs.readFile('./datasets/a.txt', 'utf-8');
        const dataB = await fs.readFile('./datasets/b.txt', 'utf-8');
        const sum = parseInt(dataA) + parseInt(dataB);
        console.log(
            `The sum of the two numbers read from the a.txt and b.txt files is equal ${sum}`
        );
    } catch (error) {
        console.log(error);
    }
}

sumTxt();
