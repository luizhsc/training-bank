import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
