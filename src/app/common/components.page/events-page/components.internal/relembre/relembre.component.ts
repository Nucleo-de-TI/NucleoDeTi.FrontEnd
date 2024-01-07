import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";

@Component({
    selector: 'app-relembre',
    standalone: true,
    templateUrl: './relembre.component.html',
    styleUrl: './relembre.component.scss',
    imports: [RegularSectionBoxComponent, RegularSectionBoxTitleComponent]
})
export class RelembreComponent {
    
}
