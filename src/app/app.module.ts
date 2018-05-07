import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PostComponentComponent } from './post-component/post-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
