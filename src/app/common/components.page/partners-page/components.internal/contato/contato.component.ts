import { Component } from '@angular/core';
import { RegularSectionBoxComponent } from '../../../../components.shared/regular-section-box/regular-section-box.component';
import { RegularSectionBoxTitleComponent } from '../../../../components.shared/regular-section-box-title/regular-section-box-title.component';
import { RegularFormComponent } from '../../../../components.shared/regular-form/regular-form.component';
import { IRegularForm } from '../../../../models/regular-form/regular-form';
import { PartnersService } from '../../../../services/partners/partners.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBadRequestResponse } from '../../../../dtos/response/response.dto';
import { RegularFlexBoxComponent } from '../../../../components.shared/regular-flex-box/regular-flex-box.component';
import { RegularTextComponent } from '../../../../components.shared/regular-text/regular-text.component';
import { BigTextComponent } from '../../../../components.shared/big-text/big-text.component';
import { LargeTextComponent } from '../../../../components.shared/large-text/large-text.component';
import { RegularTextLinkComponent } from '../../../../components.shared/regular-text-link/regular-text-link.component';
import { PageTextLinkComponent } from '../../../../components.shared/page-text-link/page-text-link.component';
import { BorderTextLinkComponent } from '../../../../components.shared/border-text-link/border-text-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
  providers: [PartnersService, HttpClient],
  imports: [
    CommonModule,
    RegularSectionBoxComponent,
    RegularSectionBoxTitleComponent,
    RegularFormComponent,
    RegularFlexBoxComponent,
    RegularTextComponent,
    BigTextComponent,
    LargeTextComponent,
    RegularTextLinkComponent,
    PageTextLinkComponent,
    BorderTextLinkComponent,
  ],
})
export class ContatoComponent {
  constructor(private readonly partnersService: PartnersService) {}

  emailSentClassController = {
    '--on': false,
  };

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

          this.emailSentClassController['--on'] = true;
        } catch (err: any) {
          if (err.status === 400) {
            const response = err.error as IBadRequestResponse;
            const fieldErr = response.errors[0].field;
            const fieldErrMessageKeys = Object.keys(
              response.errors[0].constraints
            );
            const fieldErrMessage =
              response.errors[0].constraints[fieldErrMessageKeys[0]];

            if (fieldErr === 'email' || fieldErr === 'mensagem') {
              fields[fieldErr].errorMessage = fieldErrMessage;
            }

            return;
          }

          if (err.status === 429) {
            fields.email.errorMessage =
              'Parece que você fez muitas tentativas de enviar um email para nós. Por favor tente novamente mais tarde';
            return;
          }

          fields.email.errorMessage =
            'Um erro interno ocorreu. Por favor tente novamente mais tarde';
        }
      },
    },
  };
}
