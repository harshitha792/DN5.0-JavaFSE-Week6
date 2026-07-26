import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noCourseCode(
  control: AbstractControl
): ValidationErrors | null {
  const value = String(control.value ?? '');
  return value.startsWith('XX') ? { noCourseCode: true } : null;
}

export function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      const email = String(control.value ?? '');
      resolve(email.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}
