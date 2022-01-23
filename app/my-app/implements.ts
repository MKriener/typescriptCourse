// properties of interfaces are public
// to change it set class properties to private or protected
interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printEntry(): void;
}

class AppointmentABC implements AppointmentInterface {
    protected startTime: Date;
    protected endTime: Date;
    protected description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    printEntry() {
        console.log(this);
    }
}
