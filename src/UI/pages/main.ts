import DVSOIDVC from '@idscan/onboarding';
import DVSOConfig from '../../helpers/DVSOConfig';

const loginWrapper = document.getElementById('login-wrapper') as HTMLDivElement;
const IDVC = document.getElementById('videoCapturingEl') as HTMLDivElement;

let lib: DVSOIDVC;

export default (applicantId: string) => {
  loginWrapper.classList.add('d-none');
  IDVC.classList.remove('d-none');

  const config = {
    ...DVSOConfig(applicantId),
    demoMode: false,
    preferApiConfig: true,
    useCDN: false,
    getApplicantIdFromURL: true,
    qrCodeLinkOrigin: window.location.origin
  };

  if (lib) {
    lib.updateConfig(JSON.stringify(config));
    lib.restart();
  } else {
    // @ts-ignore
    lib = new DVSOIDVC(config);
  }
};
