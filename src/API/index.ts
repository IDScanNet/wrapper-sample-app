import { post } from './setup';

type UUID = string;

interface CreateApplicantResponse {
  applicantId: UUID,
  validationLink: string,
  shortValidationLink: string,
}

interface CreateApplicantBody {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  sendSms: boolean,
  status: number,
}

export const createApplicant = (
  {
    firstName,
    lastName,
    phone,
    email,
    sendSms = false,
    status = 0,
  }: CreateApplicantBody | Record<string, any>,
): Promise<CreateApplicantResponse> => {
  const url = 'api/v2/private/Applicants';
  const body = {
    firstName: firstName !== '' ? firstName : 'John',
    lastName: lastName !== '' ? lastName : 'Dow',
    phone: phone !== '' ? phone : '+11234567890',
    email: email !== '' ? email : 'demo@demo.com',
    sendSms,
    status,
  };
  return post(url, body);
};
