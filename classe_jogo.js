// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que define o tipo de ataque com base no tipo do herói
    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um herói
const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
const heroi2 = new Heroi("Gandalf", 150, "mago");

// Método atacar
heroi1.atacar(); 
heroi2.atacar(); 