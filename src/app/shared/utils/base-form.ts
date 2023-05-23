import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({providedIn:"root"})
export class BaseForm {

  //Método pra calidar campo requerido
  isValidField(form:AbstractControl) {
    var flag = false;

    if(form != null) {
      flag = form.dirty || form.touched &&  form.disabled;
    }
    return flag;
  }

  getErrorMessage(form: AbstractControl|null) {

    let message = "";

    if (form) {
      const { errors } = form;

      if (errors) {

        const messages: any = {
          required: 'campo requerido',
          email: 'Formato Email Incorrecto',
          pattern: 'Forma Incorrecto',
          minError: 'El rango no es correcto',
          min: 'Valor mínimo incorrecto',
          max: 'Valor máximo Incorrecto',
          minlength: 'Número de caracteres mínimos'
        };
        const errorKey = Object.keys(errors).find(Boolean);
        console.log(errors);
        if (errorKey) {
          message = messages[errorKey];
        }
      }
    }
    return message;
  }
}
