import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphsComponent } from '../graphs/graphs.component'
import { WelcomeComponent } from '../welcome/welcome.component'
    
const routes: Routes = [
    {
      path: '',
      component: WelcomeComponent,
    },
    {
        path: 'graphs',
        component: GraphsComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }