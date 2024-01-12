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
        },
      ],
      [
        {
          name: 'message',
          placeholder: 'Mensagem',
          type: 'textarea',
        },
      ],
    ],
    submitButton: {
      innerText: 'Enviar',
      callback: async () => {
        await new Promise((resolve) => setTimeout(() => resolve(true), 5000))
        this.formModel.inputs[1][0].errorMessage = "Por favor utilize no máximo 256 characteres!"
      },
    },
  };
}
