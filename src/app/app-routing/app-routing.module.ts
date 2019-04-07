import { LugarCompetenciaListComponent } from './../LugarCompetencia/LugarCompetenciaList/LugarCompetenciaList.component';
import { LenguajeDetailComponent } from './../lenguaje/lenguaje-detail/lenguaje-detail.component';
import { SubmissionDetailComponent } from './../submission/submission-detail/submission-detail.component';
import { EjercicioDetailComponent } from './../ejercicio/ejercicio-detail/ejercicio-detail.component';
import { LenguajeListComponent } from './../lenguaje/lenguaje-list/lenguaje-list.component';
import { SubmissionListComponent } from './../submission/submission-list/submission-list.component';
import { EjercicioListComponent } from './../ejercicio/ejercicio-list/ejercicio-list.component';
import { ForoListComponent } from './../foro/foro-list/foro-list.component';
import { ComentarioListComponent } from './../comentario/comentario-list/comentario-list.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CompetenciaListComponent } from '../competencia/competenciaList/competenciaList.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },/*
    {
        path: '**',
        redirectTo: 'home',
    }*/
    {
        path: 'ejercicios',
        children:[{
            path: 'list',
            component: EjercicioListComponent
        },
        {
            path: ':id',
            component: EjercicioDetailComponent
        }
        ]
    },
    {
        path: 'submissions',
        children:[{
            path: 'list',
            component: SubmissionListComponent
        },
        {
            path: ':id',
            component: SubmissionDetailComponent
        }
        ]
    },
    {

        path: 'lenguajes',
        children:[{
            path: 'list',
            component: LenguajeListComponent
        },
        {
            path: ':id',
            component: LenguajeDetailComponent
        }
        ]
    },
    {
        path: 'competencias',
        component: CompetenciaListComponent
    },
    {
        path: 'lugaresCompetencia',
        component: LugarCompetenciaListComponent

    },
    {
        path: 'foros',
        component: ForoListComponent
    },
    {
        path: 'comentarios',
        component: ComentarioListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
