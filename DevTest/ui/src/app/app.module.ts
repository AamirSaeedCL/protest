import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormatCustomerTypePipe } from './pipes/format-customer-type.pipe';
import { CustomerContainerComponent } from './customer/customer-container.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { ButtonDebounceClickDirective } from './directives/btn-debounce-click.directive';
import { CustomerViewComponent } from './customer/view/customer-view.component';
import { StateService } from './services/state';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    JobDetailComponent,
    CustomerContainerComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerViewComponent,
    FormatCustomerTypePipe,
    ButtonDebounceClickDirective
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
