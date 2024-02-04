import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularFormComponent } from '../../../../components.shared/regular-form/regular-form.component';
import { IRegularForm } from '../../../../models/regular-form/regular-form';
import { PartnersService } from '../../../../services/partners/partners.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBadRequestResponse } from '../../../../dtos/response/response.dto';

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
  providers: [PartnersService, HttpClient],
})
export class ContatoComponent {
  constructor(private readonly partnersService: PartnersService) {}

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
          name: 'mensagem',
          placeholder: 'Mensagem',
          type: 'textarea',
          value: '',
        },
      ],
    ],
    submitButton: {
      innerText: 'Enviar',
      callback: async () => {
        const fields = {
          email: this.formModel.inputs[0][0],
          mensagem: this.formModel.inputs[1][0],
        };

        try {
          await new Promise((resolve, reject) => {
            this.partnersService
              .sendEmail(fields.email.value, fields.mensagem.value)
              .subscribe(
                (response) => {
                  resolve(response);
                },
                (err: HttpErrorResponse) => {
                  reject(err);
                }
              );
          });
        } catch (err: any) {
          if (err.status === 400) {
            const response = err.error as IBadRequestResponse
            const fieldErr = response.errors[0].field
            const fieldErrMessageKeys = Object.keys(response.errors[0].constraints)
            const fieldErrMessage = response.errors[0].constraints[fieldErrMessageKeys[0]]
          
            if (fieldErr === 'email' || fieldErr === 'mensagem') {
              fields[fieldErr].errorMessage = fieldErrMessage
            } 

            return
          }

          if (err.status === 429) {
            fields.email.errorMessage = "Parece que você fez muitas tentativas de enviar um email para nós. Por favor tente novamente mais tarde"
            return
          }

          fields.email.errorMessage = "Um erro interno ocorreu. Por favor tente novamente mais tarde"
        }
      },
    },
  };
}
