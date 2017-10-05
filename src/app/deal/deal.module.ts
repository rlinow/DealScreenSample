import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DealDetailScreenComponent } from './deal-detail-screen/deal-detail-screen.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: 'detail', component: DealDetailScreenComponent }
    ])
  ],
  declarations: [DealDetailScreenComponent]
})
export class DealModule { }
