import { IStudentId } from "./student-id.interface";
import { ITutorId } from "./tutor-id.interface"



export interface IBooking {
    id: string;
    TutorId: ITutorId;
    StudentId: IStudentId;
    Date: string;
    StartTime: string;
    EndTime: string;
}



