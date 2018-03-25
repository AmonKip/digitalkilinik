import { Component, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Patient } from "../models/patient.model";
import { Visit } from "../models/visit.model";
import { VitalSigns } from "../models/vitalSigns.model";
import { DoctorsOrder } from "../models/doctorsOrder.model";
import { Assessment } from "../models/assessment.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'visit-create',
    templateUrl: './patientVisitCreate.component.html'
})
export class PatientVisitCreate implements OnInit {

    newVisit: Visit = new Visit();
    newVitalSigns: VitalSigns = new VitalSigns();
    newAssessment: Assessment = new Assessment();
    newDoctorsOrder: DoctorsOrder = new DoctorsOrder();
    patient: Patient;
    visitFormSubmitted: boolean = false;
    vitalSignsFormSubmitted: boolean = false;
    assessmentFormSubmitted: boolean = false;
    ordersFormSubmitted: boolean = false;

  //  state variables for displaying saved or create component
    isVisitSaved: boolean = false;
    isVitalSignsSaved: boolean = false;
    isAssessmentSaved: boolean = false;
    isAddOrdersChecked: boolean = false;
    isOrdersSaved: boolean = false;
    //isOrderAvailble: boolean = this.form.controls.
    
    patientId: number;
    isHiddenOrder: boolean = true;
    // properties
    visit: Visit;
    vitalSigns: VitalSigns;
    assessment: Assessment;
    doctorsOrder: DoctorsOrder;
  

    constructor(private repo: Repository, private router: Router, activeRoute: ActivatedRoute, private fb: FormBuilder) {

      let patientId = Number.parseInt(activeRoute.snapshot.params["id"]);

      if (patientId) {
        this.newVisit.patientID = patientId;
        this.newVitalSigns.patientID = patientId;
        this.newAssessment.patientID = patientId;
        this.patient = this.repo.patients ? this.repo.patients.find(p => p.patientID == patientId) : null;
        this.patientId = patientId;
      } else {
        router.navigateByUrl("/table");
      }
        
    }
    ngOnInit(){
      this.buildForm();
    }

  // REACTIVE FORM
    form: FormGroup;
    formErrors = {
      orders: [
        { type: '', notes: '', patientId: this.patientId }
      ]
    };
   //-------------------------------------
    validationMessages = {
      orders: {
        type: {
          required: 'Type is required.'
        },
        notes: {
          required: 'Notes is required.'
        }
      }
    };
    /**
    * build the initial form
    */
    buildForm() {
      // build our form
      this.form = this.fb.group({
        orders: this.fb.array([
          this.createOrder()
        ])
        
      });

      // watch for changes and validate
      this.form.valueChanges.subscribe(data => this.validateForm());
    }

    submitVisit(form: NgForm) {
      this.visitFormSubmitted = true;
      if (form.valid) {
        this.repo.createVisit(this.newVisit)
          .subscribe(res => {
            this.visit = res;
            this.isVisitSaved = true;
          })
        this.newVisit = new Visit();
        form.reset();
        this.visitFormSubmitted = false;
          
           // this.router.navigateByUrl("/visitcreate");
        }
    }
    submitVitalSigns(form: NgForm) {
      this.vitalSignsFormSubmitted = true;
      if (form.valid) {
        this.repo.createVitalSigns(this.newVitalSigns)
          .subscribe(res => {
            this.vitalSigns = res;
            this.isVitalSignsSaved = true;
          })
        this.newVitalSigns = new VitalSigns();
        form.reset();
        this.vitalSignsFormSubmitted = false;
        //this.router.navigateByUrl("/visitcreate/" + this.patientId);
      }
    }

    submitAssessment(form: NgForm) {
      this.assessmentFormSubmitted = true;
      if (form.valid) {

        this.repo.createAssessment(this.newAssessment)
          .subscribe(res => {
            this.assessment = res;
            this.isAssessmentSaved = true;
          })
        this.newAssessment = new Assessment();
        form.reset();
        this.assessmentFormSubmitted = false;
        // this.router.navigateByUrl("/table");
      }
    }
    submitOrders(form: NgForm) {
      this.ordersFormSubmitted = true;
 
      if (this.form.valid) {
        let orders = <FormArray>this.form.get('orders').value;
        let jsonData = JSON.stringify(orders);
  
        this.repo.createOrders(jsonData)
          .subscribe(res => {
            this.doctorsOrder = res;
            this.isOrdersSaved = true;
            this.ordersFormSubmitted = false;
          })
        
        
        // this.router.navigateByUrl("/table");
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
    /**
     * validate the entire form
     */
    validateForm() {
      for (let field in this.formErrors) {
        // clear that input field errors
        this.formErrors[field] = '';

        // grab an input field by name
        let input = this.form.get(field);

        if (input.invalid && input.dirty) {
          // figure out the type of error
          // loop over the formErrors field names
          for (let error in input.errors) {
            // assign that type of error message to a variable
            this.formErrors[field] = this.validationMessages[field][error];
          }
        }
      }

      this.validateOrders();
    }
  //------------------------------------------------------------------
    /**
     * validate the addresses formarray
     */
    validateOrders() {
      // grab the addresses formarray
      let orders = <FormArray>this.form.get('orders');

      // clear the form errors
      this.formErrors.orders = [];

      // loop through however many formgroups are in the formarray
      let n = 1;
      while (n <= orders.length) {

        // add the clear errors back
        this.formErrors.orders.push({ type: '', notes: '', patientId: this.patientId });

        // grab the specific group (address)
        let order = <FormGroup>orders.at(n - 1);

        // validate that specific group. loop through the groups controls
        for (let field in order.controls) {
          // get the formcontrol
          let input = order.get(field);

          // do the validation and save errors to formerrors if necessary 
          if (input.invalid && input.dirty) {
            for (let error in input.errors) {
              this.formErrors.orders[n - 1][field] = this.validationMessages.orders[field][error];
            }
          }
        }

        n++;
      }
    }

  createOrder() {
    return this.fb.group({
      type: ['', Validators.required],
      notes: ['', Validators.required],
      patientId: [this.patientId]
    });
  }

  addAddOrder() {
    let orders = <FormArray>this.form.get('orders');
    orders.push(this.createOrder());
    //this.isHiddenOrder = true;
  }

  removeOrder(i) {
    let orders = <FormArray>this.form.get('orders');
    orders.removeAt(i);
  }

  //processForm() {
  //  console.log('processing', this.form.value);
  //}
  checkBoxSubmit(event)
  {
    this.isAddOrdersChecked = !this.isAddOrdersChecked;
  }

  isOrdersAvailable(): boolean
  {
    let orders = <FormArray>this.form.get('orders');
    let count = orders.length;
   
    if (count > 0)
      return true;
    return false; 
  }
 
}
