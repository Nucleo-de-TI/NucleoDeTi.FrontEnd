import { Component, Input } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { SmallSectionBoxComponent } from '../../../../components.shared/small-section-box/small-section-box.component';
import { SmallVerticalPaddingComponent } from '../../../../components.shared/small-vertical-padding/small-vertical-padding.component';
import { RegularHorizontalPaddingComponent } from '../../../../components.shared/regular-horizontal-padding/regular-horizontal-padding.component';
import { RegularVerticalPaddingComponent } from '../../../../components.shared/regular-vertical-padding/regular-vertical-padding.component';
import { RegularTextComponent } from '../../../../components.shared/regular-text/regular-text.component';
import { MediumTextComponent } from '../../../../components.shared/medium-text/medium-text.component';
import { SmallSectionBoxTitleComponent } from '../../../../components.shared/small-section-box-title/small-section-box-title.component';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { RegularAccordionComponent } from '../../../../components.shared/regular-accordion/regular-accordion.component';
import { RegularListComponent } from '../../../../components.shared/regular-list/regular-list.component';
import { ICourse } from '../../models.internal/course/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  imports: [
    CommonModule,
    RegularSectionBoxComponent,
    RegularSectionBoxTitleComponent,
    SmallSectionBoxComponent,
    SmallVerticalPaddingComponent,
    RegularHorizontalPaddingComponent,
    RegularVerticalPaddingComponent,
    RegularTextComponent,
    MediumTextComponent,
    SmallSectionBoxTitleComponent,
    RegularFlexBoxComponent,
    RegularAccordionComponent,
    RegularListComponent,
  ],
})
export class CourseComponent {
  @Input() model!: ICourse;
}
