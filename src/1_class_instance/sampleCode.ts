// src/1_class_instance/sampleCode.ts

// 🌟 犬の「設計図（クラス）」を定義する
// class Dog {
//   // 1. プロパティ（持っているデータ・特徴）
//   name: string;
//   age: number;

//   // 2. コンストラクタ（誕生時の初期設定ルール）
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   // 3. メソッド（できる動き・機能）
//   bark(): void {
//     console.log(`${this.name} says: Waon!`);
//   }
// }

// // 🌟 設計図（Dogクラス）から、実態（インスタンス）を作成！
// // 「new」というキーワードを使うことで、コンストラクタ（初期設定）
// const myDog = new Dog("Tarou", 3);

// // 実体のデータ（プロパティ）を確認してみる
// console.log(`名前は ${myDog.name} です。`);
// console.log(`年齢は ${myDog.age} 歳です。`);

// // 実体を動かしてみる（メソッドの呼び出し）
// myDog.bark();

class Cat {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  meow(): void {
    console.log(`${this.name} says: Nyaa!`);
  }
}
const myCat = new Cat("Noa", "Black");

console.log(`猫の ${myCat.name} の色は ${myCat.color} です。`);

myCat.meow();
