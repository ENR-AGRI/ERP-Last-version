import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-takwa',
  templateUrl: './takwa.component.html',
  styleUrls: ['./takwa.component.css']
})
export class TakwaComponent implements OnInit {



  private currentStep: Steps;

  /*
   * The enum values cannot be used directly in the template. They have to declared in the Component again.
   * see: https://marco.dev/enums-angular and https://stackoverflow.com/questions/35923744/pass-enums-in-angular2-view-templates
   */
  readonly Steps = Steps;
  tab = 1;
  constructor() { }



  ngOnInit() {
    this.currentStep = Steps.STEP_1;
  }


  isActiveTab(id): boolean {
    return this.tab === id;
  }

  openTab(id): void {
    this.tab = id;
  }

  setActive(nextStep: Steps): void {
    this.currentStep = nextStep;
  }

  isActive(step: Steps): boolean {
    return this.currentStep === step;
  }
  
}

enum Steps {
  STEP_1 = 'step 1',
  STEP_2 = 'step 2',
  STEP_3 = 'step 3',
}


