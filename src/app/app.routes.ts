import { Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservasComponent } from './components/reservas/reservas.component';

export const routes: Routes = [{path:'blog-post', title: 'Blog',component:BlogPostComponent},{path:'contact', title: 'Contact Form', component:ContactComponent}, {path:'reservas', title:'Reservas', component: ReservasComponent}];
