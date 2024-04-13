     class BankAccount{
        constructor(accountNumber,ownername,balance){
            this.accountNumber = accountNumber ;
            this.ownername = ownername;
            this.balance = balance;
        }
        deposit(amount){
            this.balance += amount;
            console.log(`Deposited Amount: ৳${amount} \nNew Balance: ৳${this.balance}`);
        }
        withdraw(amount){
            if(amount>this.balance){
                console.log(`Insufficient Balance`);
            }
            else{
                this.balance-=amount;
                console.log(`Withdrawn Amount: ৳${amount} \nNew Balance: ৳${this.balance}`);
            }
        }
        getBalance(){
            return this.balance;
        }
        displayAccountInfo(){
            console.log(`Account Number: ${this.accountNumber} \nOwner Name: ${this.ownername} \nBalance: ৳${this.balance} `);
        }
    }
    const account1 = new BankAccount(1001, "John Doe", 1000);
    const account2 = new BankAccount(1002, "Jane Smith", 500);
    
    // Demonstrate functionality
    console.log("Before transactions:");
    console.log("---------------------");
    account1.displayAccountInfo();
    account2.displayAccountInfo();
    
    console.log("\nAfter transactions:");
    console.log("---------------------");
    account1.deposit(200);
    account1.withdraw(300);
    account1.displayAccountInfo();
    
    account2.deposit(100);
    account2.withdraw(700); // Attempt to withdraw more than available balance
    account2.displayAccountInfo();
    
