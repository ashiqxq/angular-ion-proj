import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private router: Router, private navCtrl: NavController,
              private route: ActivatedRoute,
              private placesService: PlacesService,
              private modalCtrl: ModalController,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
      console.log(this.place);
    });
  }
  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    // we get the going back navigation as well
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: ()=>{
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: ()=>{
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
  openBookingModal(mode: 'select'|'random'){
    console.log(mode);
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place},
      id:'modal1'})
      .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role==='confirm'){
        console.log('Booked');
      }
    });
  }
}
