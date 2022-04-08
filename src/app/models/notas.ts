export class Notas {
    
    public id_student: number;
    public id_subject: number;
    public date: string;
    public mark: number;
    public id_mark: number;

    constructor(id_student: number, id_subject: number, date: string, 
                mark: number, id_mark: number)
    {
        this.id_student  = id_student;
        this.id_subject  = id_subject;
        this.date        = date;
        this.mark        = mark;
        this.id_mark     = id_mark;
    }
}
