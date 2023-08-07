class Animal {
    protected name: string;
    protected posX: number;
    protected posY: number;

    constructor(name: string, posX: number = 0, posY: number = 0) {
        this.name = name;
        this.posX = posX;
        this.posY = posY;
    }

    eat = ():string => `${this.name} is eating...`
    
    moveX = (dir: boolean):void => {
        if (dir) {
            this.posX += 1
        } else {
            this.posX -= 1
        }
    }

    moveY = (dir: boolean):void => {
        if (dir) {
            this.posY += 1
        } else {
            this.posY -= 1
        }
    }

    getPosX = ():number => this.posX;

    getPosY = ():number => this.posY;

    getPosXY = ():number[] => [this.posX, this.posY];

    getPos = ():string => `${this.name} is at: [${this.posX}, ${this.posY}]`
}

class Cat extends Animal {
    constructor(name: string, posX: number, posY: number) {
        super(name, posX, posY);
        this.name = name + ' the Cat';
    }

    moveX = (dir: boolean):void => {
        if (dir) {
            this.posX += 2
        } else {
            this.posX -= 2
        }
    }

    moveY = (dir: boolean):void => {
        if (dir) {
            this.posY += 2
        } else {
            this.posY -= 2
        }
    }
}

class Mouse extends Animal {
    constructor(name: string, posX: number, posY: number) {
        super(name, posX, posY);
        this.name = name + ' the Mouse';
    }
}

//Apologies for the dump code at Simulation class, I'll think bout this later @<@
class Simulation {
    private tom: Cat;
    private jerry: Mouse;

    constructor() {
        this.tom = new Cat('Tom', 0, 0);
        this.jerry = new Mouse('Jerry', 5, 0);
    }

    run(): void {
        console.log('Simulation started:');
        console.log(this.tom.getPos());
        console.log(this.jerry.getPos());

        while (true) {
            const tomX = this.tom.getPosX();
            const jerryX = this.jerry.getPosX();
            const tomY = this.tom.getPosY();
            const jerryY = this.jerry.getPosY();

            if (tomX === jerryX) {
                console.log(`Tom caught Jerry at position ${tomX}`);
                break;
            } else {
                const direction = tomX < jerryX;
                this.tom.moveX(direction);
                console.log(this.tom.getPos());

                const escapeDirection = Math.random() < 0.5;
                this.jerry.moveX(escapeDirection);
                console.log(this.jerry.getPos());
            }
        }
    }
}

const simulation = new Simulation();
simulation.run();

