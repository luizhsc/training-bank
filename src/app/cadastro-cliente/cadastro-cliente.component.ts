import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "./cadastro-cliente.component.html",
  styleUrls: ["./cadastro-cliente.component.scss"],
})
export class CadastroClienteComponent implements OnInit {
  valoresForm: any;
  conversao: any;

  formCadastro = new FormGroup({
    nome: new FormControl("", Validators.required),
    cpf: new FormControl("", Validators.compose([Validators.required])),
    email: new FormControl("", Validators.compose([Validators.email])),
    telefone: new FormControl(""),
    endereco: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {
    console.log(this.formCadastro);
    this.formCadastro.valueChanges.pipe(debounceTime(1000)).subscribe((res) => {
      console.log(res);
      this.valoresForm = res;
    });
  }

  cadastro(frm) {
    console.log(this.formCadastro.controls);
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem("cadastro", this.conversao);
    frm.reset();
  }
}
