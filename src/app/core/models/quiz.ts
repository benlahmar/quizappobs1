import { Question } from "./question";
import { QuizConfig } from "./quiz-config";

export class Quiz
{
    id:number;
    name:string;
    description:string;

    questions:Question[];
    config:QuizConfig;


    constructor(data:any)
    {
        this.id= data.id;
        this.name=data.name;
        this.description=data.description;

        this.questions=[];
        data.questions.forEach((q:Question) => {
            this.questions.push(new Question(q));
        });
        this.config= new QuizConfig(data.config);


    }
    score():number
    {
        let s=0;
        this.questions.forEach(q=> {
            if(q.isCorrect())
                s++;
        });
        return (s/this.questions.length)*100;
    }

}