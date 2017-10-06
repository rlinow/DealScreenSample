import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DealDetailScreenComponent } from './deal-detail-screen/deal-detail-screen.component';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, MatCardModule, FlexLayoutModule,
    RouterModule.forChild([
      { path: 'detail', component: DealDetailScreenComponent }
    ])
  ],
  declarations: [DealDetailScreenComponent]
})
export class DealModule { }
