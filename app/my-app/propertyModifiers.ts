interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string;
}

const p1: Point2D = {xPos: 0, yPos: 0, name: 'centerPoint'};

//Attempt to assign to const or readonly variable
//p1.name = 'otherPoint';

const p2: Point2D = {xPos: 1, yPos: 1};