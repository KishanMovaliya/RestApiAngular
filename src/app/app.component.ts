import { ApiService } from './Service/api.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'salesRules';
  getjsonResult: any;
  results: any;
  searchvalue: any
  getid:any;
  getname:any;
  getdescription:any
  getalldata: any

  constructor(private apiservice: ApiService) {
  }

  ngOnInit(): void {
    this.apiservice.getSearchValue().subscribe((data:any)=>{
         this.getalldata=JSON.stringify(data)
    })
  }

  //--------------GetSearch Value Function---------------------------------------
  getallValue() {
    this.apiservice.getSearchValue().subscribe((res: any) => {
      let resp1 = res.items.filter((resss: any) => resss.rule_id == this.searchvalue || resss.name == this.searchvalue)
      this.results =resp1
      this.results.map((a:any)=>{
        this.getid=a.rule_id
        this.getname=a.name
        this.getdescription=a.description
      })
      this.getjsonResult = res
    })
  }



}
