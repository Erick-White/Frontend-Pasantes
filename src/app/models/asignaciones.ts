export class Asignaciones {
    
    id_Assigment?: number
    id_Intership?: number
    internship?:{
        idInternship: number,
        name: string,
        description: string,
        initial_date: string,
        final_date: string,
        intern_limit: 0,
        status: true
    }
    title?: string
    description?:string
    limitDate?: Date
    modality?: string

}
