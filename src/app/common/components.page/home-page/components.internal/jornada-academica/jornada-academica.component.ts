import { Component } from '@angular/core';
import { BigSectionBoxComponent } from "../../../../components.shared/big-section-box/big-section-box.component";
import { RegularSectionBoxTitleComponent } from "../../../../components.shared/regular-section-box-title/regular-section-box-title.component";
import { RegularFlexBoxComponent } from "../../../../components.shared/regular-flex-box/regular-flex-box.component";
import { BorderTextLinkComponent } from "../../../../components.shared/border-text-link/border-text-link.component";

@Component({
    selector: 'app-jornada-academica',
    standalone: true,
    templateUrl: './jornada-academica.component.html',
    styleUrl: './jornada-academica.component.scss',
    imports: [BigSectionBoxComponent, RegularSectionBoxTitleComponent, RegularFlexBoxComponent, BorderTextLinkComponent]
})
export class JornadaAcademicaComponent {

}
