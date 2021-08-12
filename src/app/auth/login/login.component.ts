import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/models/models';
import { MyTranslateService } from 'src/app/my.translate.service';
import { UowService } from 'src/app/services/uow.service';
import { SessionService } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDev = environment.production === false;
  // for test
  displayedColumns: string[] = ['email', 'password', 'profil'];
  dataSource = [
    {email: 'mourabit@angular.io', password: '123', profil: 'Administrateur'},
    {email: 'mehdi@angular.io', password: '123', profil: 'Superviseur'},
    {email: 'soufiane@angular.io', password: '123', profil: 'Point focal'},
    {email: 'ahmed@angular.io', password: '123', profil: 'Propriétaire'},
  ];

  // end test
  myForm: FormGroup;
  o = new User();
  hide = true;
  constructor(private fb: FormBuilder, private uow: UowService
    , private router: Router, public session: SessionService
    , public mytranslate: MyTranslateService) { }

  async ngOnInit() {
    // test
    this.o.email = this.isDev ? 'mourabit@angular.io' : '';
    this.o.password = this.isDev ? '123' : '';
    this.createForm();

    // this.checkbox.valueChanges.subscribe(r => // console.log(r));
    // * remeber me
    // const s = JSON.parse(localStorage.getItem('user'));
    // if (s) {
    //   const u = await this.uow.users.findOne({ where: {email: s.email}}).toPromise();
    //   if (u.password === s.password) {
    //     this.router.navigate(['/concern']);
    //   }
    // }
    // if (this.session.isSignedIn) {
    //   this.snackbar.openMySnackBar('login...');
    //   setTimeout(() => {
    //     this.snackbar.dismiss();
    //     this.router.navigate(['concern']);
    //   }, 1500);
    // }
  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
    });
  }

  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  get emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get passwordError() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  submit(myForm) {
     console.log(myForm.value);
    const o = myForm.value;
    // this.snackbar.openMySnackBar('login...');
    // console.log(o);
    this.uow.users.login(o).subscribe((r: any) => {
    this.session.doSignIn(r.user, r.token, r.idRole);
    setTimeout(() => this.router.navigate(['/admin']), 500);
    // this.router.navigate(['/admin']);
      // if (r) {
      //   this.checkbox.value ? r.rememberMe = 1 : r.rememberMe = 0;
      //   this.session.doSignIn(r);
      //   this.router.navigate(['/concern']);
      //   this.snackbar.dismiss();
      // } else {
      //   this.snackbar.dismiss();
      // }
    });
   errco:(error)=>{
     console.log(error);
   }
    
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
}