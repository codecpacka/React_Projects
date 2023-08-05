export function checkEmail(email) {
  const errors = []
  if (email.length === 0) {
    errors.push("empty")
  }
  if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("must end with @webdevsimplified.com")
  }

  return errors
}

export function checkPass(pass) {
  const errors = []
  if (pass.length === 0) {
    errors.push("empty")
  }
  if (pass.length < 8) {
    errors.push("must contain atleat 8 charaector ")
  }
  if (!pass.match(/[a-z]/)) {
    errors.push("must have atleast one lower case letter")
  }
  if (!pass.match(/[A-Z]/)) {
    errors.push("must have atleast one upper case letter")
  }
  if (!pass.match(/[0-9]/)) {
    errors.push("must have atleast one number")
  }
  return errors
}
