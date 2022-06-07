import { Component, OnInit } from '@angular/core';
import {TestServiceService} from "../service/test-service.service";

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.component.html',
  styleUrls: ['./test-components.component.scss']
})
export class TestComponentsComponent implements OnInit {

  finally: string = '';
  constructor(
    private testServiceService : TestServiceService,
  ) { }

  ngOnInit(): void {
    this.finally = 'hello';
  }

  getEmployeeList(): any {
    return this.testServiceService.getEmployeeList();
  }
}
