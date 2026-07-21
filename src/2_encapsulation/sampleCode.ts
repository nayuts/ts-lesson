// src/2_encapsulation/sampleCode.ts

export class BankAccount {
  // 🌟 メリット①：データを守る
  // 「private」をつけると、クラスの外から直接触れなくなります（強固な金庫）
  private balance: number;
  private accountNumber: string;

  // 「public」は誰でも外から触れることができます（看板のようなもの）
  public bankName: string;

  // コンストラクタ（口座開設時の初期設定）
  constructor(accountNumber: string, initialBalance: number = 0, bankName: string = "MyBank") {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.bankName = bankName;
  }

  // 🌟 メリット②：使う人をラクにする「操作ボタン（窓口）」
  // 使う人は、現在の残高がどう計算されるか知らなくても、これを使うだけで預金できます。
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`${amount}円 預金しました。現在の残高は ${this.balance}円 です。`);
  }

  // 「残高不足なら引き出せない」という複雑な確認処理も、この中に隠しています。
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("エラー：残高が不足しています！");
    } else {
      this.balance -= amount;
      console.log(`${amount}円 引き出しました。現在の残高は ${this.balance}円 です。`);
    }
  }

  checkBalance(): void {
    console.log(`口座番号: ${this.accountNumber}, 現在の残高: ${this.balance}円`);
  }
}

// 1. 口座（インスタンス）を開設する
const myAccount = new BankAccount("12345-6789", 1000);

// 2. 「操作ボタン」を通してお金を出し入れしてみる
// ※使う側は、内部でどうやって引き算や残高確認が行われているか気にする必要はありません！
myAccount.checkBalance(); // まずは残高確認
myAccount.deposit(500); // 500円預金
myAccount.withdraw(200); // 200円引き出し
myAccount.withdraw(5000); // ❌ わざと残高より多く引き出そうとしてみる

myAccount.balance = 10000000;
