import { Routes } from '@angular/router';
import { QuizComponent } from './features/components/quiz/quiz.component';
import { AboutComponent } from './share/components/about/about.component';
import { ListThemeComponent } from './features/components/list-theme/list-theme.component';
import { guardAuthGuard } from './share/services/guard-auth.guard';

export const routes: Routes = [
    {
        path: 'quiz/:quizId',
        loadComponent: () => import('./features/components/quiz/quiz.component').then(m => m.QuizComponent)
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'themes',
        component:ListThemeComponent
    },
    {
        path: '',
        redirectTo: '/themes',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadComponent: () => import('./features/components/users/users.component').then(m => m.UsersComponent),
       
    }
    ,
     {
        path: 'users/:id/profile',
        loadComponent: () => import('./features/components/user-profile/user-profile.component').then(m => m.UserProfileComponent)
    }
    ,{
        path:'user/:id',
       // loadComponent: () => import('./features/components/user2/user2.component').then(m => m.User2Component),
         children: [
            {
                path: '',
                redirectTo: 'settings',
                pathMatch: 'full'
            },
            {
                path: 'profile2',
                loadComponent: () => import('./features/components/user2/user2.component').then(m =>m.User2Component)

            },
            {
                path:'settings',
                loadComponent: () => import('./share/components/about/about.component').then(m => m.AboutComponent)
            }
        ]
    },
    {
        path:'quiz/add/form',
        loadComponent: () => import('./features/components/quiz-form/quiz-form.component').then(m => m.QuizFormComponent),
        canActivate:[guardAuthGuard]

    },
    {
        path:"login",
        loadComponent: () => import('./share/components/auth-form/auth-form.component').then(m => m.AuthFormComponent)

    }
    ];
