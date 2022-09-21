import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { RegisterComponent } from './components/register/register.component';
import { MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import {MessageModule} from 'primeng/message';
import { CodeformComponent } from './components/codeform/codeform.component';
import {MessagesModule} from 'primeng/messages';
import { ForgetpasswordformComponent } from './components/forgetpasswordform/forgetpasswordform.component';
import { PasswordrestComponent } from './components/passwordrest/passwordrest.component';

@NgModule({
  declarations: [LoginComponent,ForgetpasswordformComponent,RegisterComponent,
                 CodeformComponent,PasswordrestComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    CardModule,
    TableModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
    MessageModule,
    MenubarModule,
  ],providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
