import { Component } from '@angular/core';
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";
import { RegularSectionBoxComponent } from "../../../../components.shared/regular-section-box/regular-section-box.component";

@Component({
    selector: 'app-jornada-academica',
    standalone: true,
    templateUrl: './jornada-academica.component.html',
    styleUrl: './jornada-academica.component.scss',
    imports: [RegularSectionBoxTitleComponent, RegularFlexBoxComponent, BorderTextLinkComponent, RegularSectionBoxComponent]
})
export class JornadaAcademicaComponent {

}
