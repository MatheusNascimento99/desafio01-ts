import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    depositPlus = (): void => {
        const plus:number = 10
        const valudeposit:number = 30
        if(this.validateStatus()){
          console.log(`Deposito conta plus no valor de R$${valudeposit}`)
          console.log(`Saldo depósito conta PLus R$${valudeposit + plus}`)
        }
      }
}