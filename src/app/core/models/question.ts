import { Option } from "./option";

export class Question
{
    id:number;
    name:string;
    questionTypeId:number;
    options: Option[];

    constructor(data:any)
    {
        this.id=data.id;
        this.name=data.name;
        this.questionTypeId=data.questionType;

        this.options=[];
        if(data.options!==undefined){
        data.options.forEach((o:Option) => {
            this.options.push(new Option(o));
        });
    }
    }

    isnotselected()
    {
       return  this.options.every(o=>o.isSelected===false)
    }
    isCorrect()
    {
        return this.options.every(o=> o.isSelected==o.isAnswer);
      //let res=  this.options.filter(o=>o.isSelected==o.isAnswer);

    }

}