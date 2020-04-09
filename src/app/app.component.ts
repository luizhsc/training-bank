import { Component } from "@angular/core";
import { MatDialog, MatDialogContent } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = "traning-bank";

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogContent, { height: "350px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
