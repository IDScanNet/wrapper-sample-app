import { createApplicant } from '../API';

const form = document.getElementById('login-wrapper') as HTMLFormElement;

export const initApplicant = async () => {
  const formData = new FormData(form);
  
  const keys   = Array.from(formData.keys());
  const values = Array.from(formData.values());

  const res: Record<string, any> = keys.reduce( (acc, key, index) => { acc[key] = values[index]; return acc; }, {} as Record<string, any>);
  
  const { applicantId } = await createApplicant(res);

  return applicantId;
};
