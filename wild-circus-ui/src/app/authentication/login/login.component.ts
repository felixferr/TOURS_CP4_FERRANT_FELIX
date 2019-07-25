import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/core/service/login.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [NgbModalConfig, NgbModal],
})
export class LoginComponent implements OnInit {
  constructor(
    private islogin: LoginService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    this.islogin.login(f.value.email, f.value.password).subscribe(
      data => {
        this.showSuccessLog();
        this.router.navigateByUrl("panier");
        this.modalService.dismissAll();
      },
      (error: any) => {
        this.showError();
      }
    );
  }

  showSuccessLog() {
    this.toastr.success("Vous êtes connecté(e)");
  }

  showError() {
    this.toastr.error("identifiants incorrects");
  }
}
