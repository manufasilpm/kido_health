import { Component, OnInit } from '@angular/core';
import { ChildService } from 'src/app/services/child/child.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements OnInit {
  // children = [
  //   { slNo: 1, name: 'Child 1', age: 5, dob: '2020-01-01', lastVaccinated: '2021-01-01' },
  //   { slNo: 2, name: 'Child 2', age: 6, dob: '2019-01-01', lastVaccinated: '2021-02-01' },
  //   { slNo: 3, name: 'Child 2', age: 6, dob: '2019-01-01', lastVaccinated: '2021-02-01' },
  //   { slNo: 4, name: 'Child 2', age: 6, dob: '2019-01-01', lastVaccinated: '2021-02-01' },
    
  // ];
  children!: any[];
  constructor(private childService: ChildService) { }

  bookAppointment(child: any) {
    // Implement your logic to book a new appointment for the selected child
    console.log('Book appointment for:', child);
  }
  ngOnInit(): void {
    const parentId = 123;
    this.childService.getChildrenByParentId(parentId).subscribe(
      data => {
        this.children = data;
      },
      error => {
        console.error('Error getting children:', error);
      })
  }

}
