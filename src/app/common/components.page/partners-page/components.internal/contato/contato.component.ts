import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularFormComponent } from '../../../../components.shared/regular-form/regular-form.component';
import { IRegularForm } from '../../../../models/regular-form/regular-form';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
  imports: [
    RegularSectionBoxComponent,
    RegularSectionBoxTitleComponent,
    RegularFormComponent,
  ],
})
export class ContatoComponent {
  formModel: IRegularForm = {
    inputs: [
      [
        {
          name: 'email',
          placeholder: 'E-mail',
          type: 'text',
          value: '',
        },
      ],
      [
        {
          name: 'message',
          placeholder: 'Mensagem',
          type: 'textarea',
          value: '',
        },
      ],
    ],
    submitButton: {
      innerText: 'Enviar',
      callback: async () => {},
    },
  };
}
