export class Estudiante {
    
    public first_name1: string;
    public last_name1: string;
    public id_group: number;
    public ingreso: string;
    public id_student: number

    constructor(first_name1: string, last_name1: string, id_group: number, 
                ingreso: string, id_student: number)
    {
        this.first_name1    = first_name1;
        this.last_name1     = last_name1;
        this.id_group       = id_group;
        this.ingreso        = ingreso;
        this.id_student     = id_student;
    }
}
