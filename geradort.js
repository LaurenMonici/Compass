import {faker} from '@faker-js/faker';
import { error, log } from 'console';
import {writeFileSync} from 'fs';
import { join } from 'path';

const quantidadeUser = process.argv[2]||1;
let Tickets = [];

for (let i = 0; i < quantidadeUser; i++) {
    const tick = {
        'movieId': 'MOVIEID',
        'userId': String(faker.finance.accountNumber()),
        'seatNumber': faker.number.int({max: 99}),
        'price': Number(faker.commerce.price({max: 60})),
        'showtime': faker.date.future()
    }

    Tickets.push(tick)
}

const body = {
    tick:Tickets
}
console.log(Tickets);

const caminho = 'data/dynamic'
const arquivo = 'tickets.json'
const juntar = join(caminho,arquivo)
writeFileSync(juntar, JSON.stringify(body, null, 2),error=>{
    if (error) {
        console.log(error)
    }
})

