// src/3_inheritanceAndPolymorphism/sampleCode.ts

// 🌟 親クラス（基本となる設計図）
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 共通の動き
  run(): void {
    console.log(`${this.name} is running!!`);
  }

  // とりあえずの鳴き声（後で子クラスで上書きします）
  makeSound(): void {
    console.log("動物の鳴き声...");
  }
}

// 🌟 子クラス：Dog（Animalを「extends」で継承する）
export class Dog extends Animal {
  constructor(name: string) {
    // 💡 super() とは？：親（Animal）の初期設定（コンストラクタ）を呼び出し、
    // 「親さん、名前の登録をお願いします！」と任せるための手続きです。
    super(name);
  }

  // 親の makeSound() メソッドを上書き（オーバーライド）して個性を出す！
  makeSound(): void {
    console.log(`${this.name} says: Woof!（ワン！）`);
  }
}

// 🌟 子クラス：Cat（同じくAnimalを継承）
export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  // こちらも猫専用の鳴き声に上書き（オーバーライド）
  makeSound(): void {
    console.log(`${this.name} says: Meow!（ニャー！）`);
  }
}

// 5. 【演習課題】新しい動物を追加してみよう！
export class Bird extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Chirp! (チュン！)`);
  }
}

// インスタンスを作成
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");
// const myBird = new Bird("feather");

// 親から受け継いだ「走る」メソッドを使ってみる
myDog.run();

// それぞれ自分専用に上書きした「鳴く」メソッドを使ってみる
myDog.makeSound();
myCat.makeSound();
// myBird.makeSound();

console.log("\n--- ポリモーフィズムの魔法 ---");

// 犬も猫も「Animal（動物）」の仲間なので、同じ配列にまとめることができます！
const myAnimals: Animal[] = [new Dog("Pochi"), new Cat("Tama"), new Bird("Pii")];

// ループで回して、全員に同じ「makeSound()」を命令する
for (const animal of myAnimals) {
  // 🌟 ここがすごい！
  // 相手が犬か猫かを確認しなくても、「動物なら鳴け！」という1つの命令だけで、
  // それぞれが空気を読んで正しい鳴き声を出してくれます。
  animal.makeSound();
}
