// 1. init code

let counter =1

export function setup() {
    // 2. setup code
    console.log(`SETUP ${counter}`)
  }
  
  export default function (data) {
    // 3. VU code
    console.log(`FUNÇÃO PRINCIPAL - ${counter} VU_${__VU} ITER_${__ITER}`)
    counter = counter +1
    sleep(1)
  }
  
  export function teardown(data) {
    // 4. teardown code
    console.log(`TEARDOWN - ${counter}`)
  }
  