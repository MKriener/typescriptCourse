export class Point2D {
    protected _xPos: number;
    protected _yPos: number;

    public static NUM_DIMENSIONS = 2;

    public constructor(xPos:number, yPos: number) {
        this._xPos = xPos;
        this._yPos = yPos;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(value: number) {
        this._xPos = value;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(value: number) {
        this._yPos = value;
    }
}

export class Point3D extends Point2D{
    private _zPos: number;

    public static NUM_DIMENSIONS = 3;

    public constructor(xPos: number, yPos: number, zPos: number) {
        super(xPos, yPos);
        this._zPos = zPos;
    }

    public get zPos(): number {
        return this._zPos;
    }

    public set zPos(value: number) {
        this._zPos = value;
    }
}

