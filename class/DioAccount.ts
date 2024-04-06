export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }


  getName = (): string => {
    return this.name;
  };

  deposit = (): number => {
    const valueDeposit: number = 60;
    const newDeposit: number = valueDeposit + this.balance;
    if (this.validateStatus()) {
      console.log(`Você depositou R$${valueDeposit}`);
      this.balance = newDeposit;
      console.log(`Seu saldo total é de R$${this.balance}`);
    }
    return newDeposit;
  };

  withdraw = (): void => {
    const valueWithDraw: number = 70;
    const newWithDrw: number = this.balance - valueWithDraw;
    if (this.validateStatus()) {
      if (this.balance >= valueWithDraw) {
        console.log(`Saque realizado no valor de R$${valueWithDraw}`);
        this.balance = newWithDrw;
        console.log(`Seu saldo total é de R$${this.balance}`);
      }else{
        console.log('Saldo insuficiente para saque.')
        console.log(`Saldo R$${this.balance}`)
      }
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
