   interface ICharacter {
    profile(name: string, attack(): number): void;
   }

class BaseCharacter implements ICharacter {
    public name: string;
    private hp: number;
}

constructor()