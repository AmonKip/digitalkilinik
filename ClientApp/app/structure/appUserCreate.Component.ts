import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: "user-create",
  templateUrl: "appUserCreate.Component.html"
})
export class AppUserCreateComponent {

  newUser: AppUser = new AppUser();
  formSubmitted: boolean = false;

  constructor(private repo: Repository, private router: Router) {
    // this.repo.getAppUser;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      console.log(this.newUser);
      this.repo.createUser(this.newUser);
      this.newUser = new AppUser();
      form.reset();
      this.formSubmitted = false;
      this.router.navigateByUrl("/requestconfirm");
    }
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`The field is required`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least ${state.errors['minlegth'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.newUser.file = file;
    }
    else {
      alert('Upload failed');
    }
  }

}

//  fileChange(event) {
//  let fileList: FileList = event.target.files;
//  if (fileList.length > 0) {
//    let file: File = fileList[0];
//    let formData: FormData = new FormData();
//    formData.append('uploadFile', file, file.name);
//    let headers = new Headers();
//    /** In Angular 5, including the header Content-Type can invalidate your request */
//    headers.append('Content-Type', 'multipart/form-data');
//    headers.append('Accept', 'application/json');
//    let options = new RequestOptions({ headers: headers });
//    this.http.post(`${this.apiEndPoint}`, formData, options)
//      .map(res => res.json())
//      .catch(error => Observable.throw(error))
//      .subscribe(
//      data => console.log('success'),
//      error => console.log(error)
//      )
//  }
//}
