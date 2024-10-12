import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(), 
    provideRouter(routes),
    provideToastr({ positionClass: 'toast-bottom-right' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
   
    
    
    
    
   
  ]
})
  .catch((err) => console.error(err));
