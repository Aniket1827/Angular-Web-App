import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  
  public prodrecord:any[] = [
    {prodcode:'PHBN001',prodname:'Dettol',descr:'somthing',price:80.00,prod_img:'prod1_dettol.jpg'},
    {prodcode:'RFBN002',prodname:'Diabetes',descr:'somthing',price:100.00,prod_img:'prod2_diabetes.jpg'},
    {prodcode:'EDEN003',prodname:'Immunity Booster',descr:'somthing',price:340.00,prod_img:'prod3_immunity_booster.jpg'},
    {prodcode:'PFWBN004',prodname:'Thermo Meter',descr:'somthing',price:800.00,prod_img:'prod4_thermometer.jpg'},
    {prodcode:'PGFN005',prodname:'Hand Sanitizer',descr:'somthing',price:300.00,prod_img:'prod5_hand_sanitizer.jpg'},
    {prodcode:'PVFDX006',prodname:'Vitamin Capsules',descr:'somthing',price:800.00,prod_img:'prod6_vitawin_capsules.jpg'},
    {prodcode:'VSXN007',prodname:'Weight Management',descr:'somthing',price:400.00,prod_img:'prod7_weight_management.jpg'},
    {prodcode:'PVRN008',prodname:'Inlife Immnunity Capsules',descr:'somthing',price:1000.00,prod_img:'prod8_inlife_immunity_capsules.jpg'},
    {prodcode:'PQFN0010',prodname:'Vitamin Tablets',descr:'somthing',price:600.00,prod_img:'prod10_vitamin_tablets.jpg'}
  ];
  
  public selectedProduct:any={};
  public billAmount:Number;
  constructor() { }

  ngOnInit(): void {
  }

  calBill(event){
   let qty:number = event.target.value;
   this.billAmount = this.selectedProduct['price']*qty;
  }


  orderNow(event){
    console.log("Button Click Id : "+event.target.id);

    for(var i=0;i<this.prodrecord.length;i++)
    {
      if(this.prodrecord[i]['prodcode']==event.target.id)
          this.selectedProduct = {
            prodcode:this.prodrecord[i]['prodcode'],
            prodname:this.prodrecord[i]['prodname'],
            descr:this.prodrecord[i]['descr'],
            price:this.prodrecord[i]['price'],
            prod_img:this.prodrecord[i]['prod_img']
          };
    }
  }

}
