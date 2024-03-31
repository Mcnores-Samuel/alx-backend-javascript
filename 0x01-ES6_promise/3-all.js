import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => console.log(`${response.body} \
    ${response.firstName} ${response.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
