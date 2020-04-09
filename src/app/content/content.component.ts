import { Component, OnInit } from "@angular/core";
import Typed from "typed.js";
import { Router } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  constructor(privaterouter: Router) {}

  ngOnInit(): void {
    const options = {
      stringsElement: "#typed-strings",
      strings: [
        "Training banking juros amigo",
        "Peça a portabilidade e venha ser Training Bankinhg hoje mesmo",
        "Inovavor digital e seguro",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".typing-element", options);
  }

  gotoCadastroClientes() {
    this.router.navigate(["cadastro-cliente"]);
  }
}
