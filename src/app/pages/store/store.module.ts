import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared.module';
import { HttpService } from 'src/app/services/http.service';

@NgModule({
  declarations: [StoreComponent],
  imports: [BrowserModule, SharedModule],
  providers: [HttpService],
})
export class StoreModule {}
