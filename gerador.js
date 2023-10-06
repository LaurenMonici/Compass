import { faker } from '@faker-js/faker';
import { error, log } from 'console';
import {writeFileSync} from 'fs';
import { join } from 'path';

const quantidadeUser = process.argv[2]||1;
let Movies = [];

for (let i = 0; i < quantidadeUser; i++) {
    const movie = {
        'title': faker.person.fullName(),
        'description': faker.person.jobDescriptor(),
        'launchdate': faker.date.anytime(),
        'showtimes': [faker.date.anytime()]
    }

    Movies.push(movie)
}

const body = {
    movie:Movies
}
console.log(Movies);

const caminho = 'data/dynamic'
const arquivo = 'filmes.json'
const juntar = join(caminho,arquivo)
writeFileSync(juntar, JSON.stringify(body, null, 2),error=>{
    if (error) {
        console.log(error)
    }
})






































// import {faker} from '@faker-js/faker';
// import { log } from 'console';
// import {writeFileSync} from 'fs';
// import { join } from 'path';

// const gerador = [];
// const gerador2 = [];
// for (let i = 0; i < 5; i++) {
//     const nome = faker.person.fullName();
//     const email = faker.internet.email();
//     const password = faker.internet.password();
//     const administrador = String(faker.datatype.boolean());
//     const pessoa = {
//         nome,
//         email,
//         password,
//         administrador,
//     };
//     const login = {
//         email,
//         password,
//     };

//     gerador2.push(login);
//     gerador.push(pessoa);

// }


// console.log(gerador);
// console.log(gerador2);
// const pastinha = 'data/dynamic';
// const humanos = 'humanos.json';
// const juncao = join(pastinha, humanos);
// const jason = JSON.stringify({users:gerador}, null,2);
// try{
//     writeFileSync(juncao, jason);
//     console.log('deu certo');
// } catch(error){
//     console.log("deu ruim");
// }




// const pastinha2 = 'data/dynamic';
// const humanos2 = 'humanos2.json';
// const juncao2 = join(pastinha2, humanos2);
// const jason2 = JSON.stringify({users:gerador2}, null,2);
// try{
//     writeFileSync(juncao2, jason2);
//     console.log('deu certo');
// } catch(error){
//     console.log("deu ruim");
// }