import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private Compamybalance: number = 0;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): void => {
    const valueLaon:number = 30
    if(this.validateStatus()){
      console.log(`Voce pegou um empréstimo no valor de R$${valueLaon}`)
      this.Compamybalance = this.Compamybalance + valueLaon
      console.log(`Saldo: R$${this.Compamybalance}`)
    }
  }
}
