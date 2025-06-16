export class Option{
    id:number;
    name:string;
    questionId:number;
    isAnswer:boolean;

    isSelected:boolean;


    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.questionId=data.questionId;
        this.isAnswer=data.isAnswer;
        this.isSelected=false;

        
    }


}