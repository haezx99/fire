import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardCategoriesComponent } from './card-categories/card-categories.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { CardAppointmentComponent } from './card-appointment/card-appointment.component';
import { CardReviewComponent } from './card-review/card-review.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent,
    CardReviewComponent,
    StarRatingComponent
  ],
  exports: [
    CardCategoriesComponent,
    CardInfoComponent,
    CardAppointmentComponent,
    CardReviewComponent,
    StarRatingComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
