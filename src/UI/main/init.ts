import { initApplicant } from '../../store/applicant';
import mainPage from '../pages/main';

const button = document.querySelector('#login-button') as HTMLButtonElement;

button.classList.add('d-none');

export default () => {

  if (!button) throw new Error('No Button');

  initApplicant().then((applicantId) => {
    console.log('applicantId: ' + applicantId);
    mainPage(applicantId);
  });

};
