const headers: HeadersInit = {
  'Authorization': `Bearer sk_399ae85b-9bc6-4a0e-ad22-e94bb134fbe2`,
  'content-type': 'application/json',
  'content-encoding': 'utf-8',
};

export const post = async (url: string, body: any) => {
  
  console.log("POST URL" + url);

  const response = await fetch(`https://api-dvsonline.idscan.net/api/v2/private/Applicants`, {
    method: 'POST',
    headers,
    mode: 'cors',
    body: JSON.stringify(body),
  });

  if (response.ok) {
    return response.json();
  }
  
  throw new Error(`HTTP Error: ${response.status}`);
};

export const get = async (url: string) => {

  console.log("GET URL" + url);
  
  const response = await fetch(`https://api-dvsonline.idscan.net/api/v2/private/Applicants`, {
    method: 'GET',
    headers,
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(`HTTP Error: ${response.status}`);
};
