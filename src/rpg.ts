// インターフェイス(設計図)作成
interface ICharacter {
  name: string;
  attack(): void;
}

// 契約したクラスの作成
class BaseCharacter implements ICharacter {
  // プロパティを持たせる
  public name: string;
  private hp: number;

  // コンストラクタ
  constructor(name: string, hp: number = 0) {
    this.name = name;
    this.hp = hp;
  }

  attack(): void {
    console.log("攻撃！");
  }

  // ダメージ窓口
  takeDamage(damage: number): void {
    if (damage >= this.hp) {
      this.hp = 0;
      console.log(`${this.name}に${damage}のダメージ！HPは${this.hp}になった！`);
    } else {
      this.hp -= damage;
      console.log(`${this.name}に${damage}のダメージ！HPは${this.hp}になった！`);
    }
  }
}

// クラス作成　オーバーライド
class Warrior extends BaseCharacter {
  attack(): void {
    console.log(`${this.name}の剣攻撃！`);
  }
}
class Mage extends BaseCharacter {
  attack(): void {
    console.log(`${this.name}の魔法攻撃！`);
  }
}

// インスタンス作成
const myWarrior = new Warrior("アーサー", 100);
const myMage = new Mage("マーリン", 80);

// 配列作成
const party: ICharacter[] = [myWarrior, myMage];

// 攻撃！
for (const character of party) {
  character.attack();
}

// 戦士に攻撃
myWarrior.takeDamage(150);

// npx tsx src/rpg.ts
