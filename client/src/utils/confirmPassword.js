// Yup
import * as yup from "yup";

// Yup validation to confirm if both passwords match
export default function handlePasswordConfirmation(ref, msg) {
  return yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function(value) {
      return value === this.resolve(ref);
    },
  });
}
