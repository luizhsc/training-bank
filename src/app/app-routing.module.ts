import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";

const routes: Routes = [
  { path: "", component: ContentComponent },
  { path: "cadastro", component: ContentComponent },
  { path: "cadastro-cliente", component: CadastroClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
