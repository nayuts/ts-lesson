// src/4_abstraction/sampleCode.ts

// 🌟 1. ルールブック（インターフェース）の作成
// 「Paymentを名乗るなら、必ず processPayment(金額) という機能を持て！」という契約書
interface Payment {
  processPayment(amount: number): void;
}

// 🌟 2. クレジットカード決済クラス
// 「implements Payment」と書くことで、ルールブックと契約を結びます
class CreditCardPayment implements Payment {
  // 契約通りに processPayment を作らないとエラーになります！
  processPayment(amount: number): void {
    console.log(`クレジットカードで ${amount}円 の支払いを処理しています...`);
  }
}

// 🌟 3. PayPal決済クラス
// こちらも同じく Payment と契約を結びます
class PayPalPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`PayPalで ${amount}円 の支払いを処理しています...`);
  }
}

// PayPay
class PayPayPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`PayPayで ${amount}円 払います`);
  }
}

// 買い物かごの合計金額
const totalAmount = 5000;

// 支払い方法を配列にまとめる（※ Paymentという共通ルールを持っているのでまとめられます！）
const myPayments: Payment[] = [new CreditCardPayment(), new PayPalPayment(), new PayPayPayment()];

// ループで回して、それぞれの方法で決済テスト！
console.log("--- 決済テスト開始 ---");
for (const payment of myPayments) {
  // 相手がクレカかPayPalかを気にせず、ただ「ルール通りに決済しろ！」と命令するだけ
  payment.processPayment(totalAmount);
}

// npx tsx src/4_abstraction/sampleCode.ts
