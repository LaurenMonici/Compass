import assert from 'assert'
import chai from 'chai'
import Calculadora from './src/Calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 10/5 resultando em 2', () => {
        let resultado = Calculadora.div(10, 5)
        expect(resultado).to.be.eq(2)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 35*45 resultando em 1575', () => {
        let resultado = Calculadora.mult(35, 45)
        expect(resultado).to.be.eq(1575)
    })
})

describe('Testes de Potenciação', () => {
    it('Deve realizar a potência 9*2 resultando em 81', () => {
        let resultado = Math.pow(9, 2)
        expect(resultado).to.be.eq(81)
    })
})



















// describe('Primeiro teste ',() => {
//     it('verificar variável "aux"', () => {
//         let aux = 2
//         //assert.strictEqual(aux, 2)
//         expect(aux).to.be.equal(2).and.to.be.a('number')
//         //expect(aux).to.be.a('number')
//     })
//     it.only('verificar outra variável', () => {
//         let aux = 'carro'
//         //assert.strictEqual(aux, 'carro')
//         expect(aux).to.be.equals('carro').and.not.equals('charrete')

//     })
// })

// describe('segundo teste ',() => {
//     it('verificar uma desigualdade', () => {
//         let aux = 2
//         //assert.notStrictEqual(aux, '2')
//     })
//     it('verificar uma desigualdade', () => {
//         let aux = 'carro'
//         //assert.notStrictEqual(aux, 'charrete')
//     })
// })

