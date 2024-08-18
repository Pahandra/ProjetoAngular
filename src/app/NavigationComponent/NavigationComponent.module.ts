import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponentComponent } from './NavigationComponent.component';
import { HeaderComponent } from '../core/header/header.component';
import { PostListComponentComponent } from '../PostListComponent/PostListComponent.component';
import { NavigationRoutingModule } from './NavigationRoutingModule.module';
import { PostDetailComponentComponent } from '../PostDetailComponent/PostDetailComponent.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponentComponent,
    HeaderComponent,
    PostListComponentComponent,
    PostDetailComponentComponent
  ],
  exports: [
    NavigationComponentComponent,
    HeaderComponent,
    PostListComponentComponent
  ]
})
export class NavigationComponentModule { }
