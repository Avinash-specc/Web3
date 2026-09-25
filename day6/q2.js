class BankAccount{
    BankAccount(accountNo,holderName,balance){
        this.accountNo = accountNo;
        this.holderName = holderName
        this.balance = balance
    }

    depositAmount(amount){
        this.balance+=amount
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount;
            console.log("Withdrawl Successful of",amount)
            console.log("Current balance is",this.balance)
        }
        else {
            console.log("Insufficient balance")
        }
    }

    static bankInfo(){
        console.log("Bank Name","fdh")
        console.log("Address", "Ghaziabad")
    }
}

let b1 = new BankAccount(54,"Avinash",5445654)
BankAccount.bankInfo()
let b2 = new BankAccount(55,"Ash",93409900)
b2.withdraw(4355)