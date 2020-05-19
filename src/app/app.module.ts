import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { NewBlogPostsComponent } from './res/view/new-blog-posts/new-blog-posts.component';
import { PopularComponent } from './first-page/res/view/popular/popular.component';
import { EventsComponent } from './first-page/res/view/events/events.component';
import { TestDriveComponent } from './first-page/res/view/test-drive/test-drive.component';
import { TrendsComponent } from './second-page/res/view/trends/trends.component';
import { YouJobComponent } from './second-page/res/view/you-job/you-job.component';
import { ContinueComponent } from './second-page/res/view/continue/continue.component';
import { FirmComponent } from './second-page/res/view/firm/firm.component';
import { SimilarComponent } from './second-page/res/view/similar/similar.component';
import { NewTalentComponent } from './second-page/res/view/new-talent/new-talent.component';
import { ProvideComponent } from './second-page/res/view/provide/provide.component';
import { ShowcaseComponent } from './second-page/res/view/showcase/showcase.component';
import { AnnounceComponent } from './second-page/res/view/announce/announce.component';
import { HighlightComponent } from './second-page/res/view/highlight/highlight.component';
import { ErikComponent } from './second-page/res/view/erik/erik.component';
import { ArticlesComponent } from './second-page/res/view/articles/articles.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import {NewsComponent} from './third-page/res/view/froala/res/view/news/news.component';
import { HomeComponent } from './third-page/res/view/froala/res/view/home/home.component';
import { NewsPostComponent } from './first-page/res/view/news-post/news-post.component';
import { SidebarComponent } from './first-page/res/view/news-post/res/view/sidebar/sidebar.component';
import { FroalaComponent } from './third-page/res/view/froala/froala.component';
import { ItemPopularComponent } from './first-page/res/view/popular/res/view/item-popular/item-popular.component';
import { ItemEventsComponent } from './first-page/res/view/events/res/view/item-events/item-events.component';
import { ItemBlogComponent } from './res/view/new-blog-posts/res/view/item-blog/item-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewBlogPostsComponent,
    PopularComponent,
    EventsComponent,
    TestDriveComponent,
    FooterComponent,
    FirstPageComponent,
    SecondPageComponent,
    TrendsComponent,
    YouJobComponent,
    ContinueComponent,
    FirmComponent,
    SimilarComponent,
    NewTalentComponent,
    ProvideComponent,
    ShowcaseComponent,
    AnnounceComponent,
    HighlightComponent,
    ErikComponent,
    ArticlesComponent,
    ThirdPageComponent,
    NewsComponent,
    HomeComponent,
    NewsPostComponent,
    SidebarComponent,
    FroalaComponent,
    ItemPopularComponent,
    ItemEventsComponent,
    ItemBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
