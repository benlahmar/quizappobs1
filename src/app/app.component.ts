import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz1Component } from "./features/components/quiz1/quiz1.component";
import { QuizComponent } from "./features/components/quiz/quiz.component";
import { BarnavComponent } from "./share/components/barnav/barnav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  BarnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizappobs1';
  
}
