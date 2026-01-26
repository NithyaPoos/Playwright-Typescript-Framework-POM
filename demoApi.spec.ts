import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import { z } from 'zod'; 
//one way to validate schema using zod 
const useSchema = z.object({ id: z.number(), 
    name: z.string(), 
    username: z.string(), 
    email: z.string().email(), 
    address: z.object({ 
        street: z.string(), 
        suite: z.string(), 
        city: z.string(), 
        zipcode: z.string(), 
        geo: z.object({ lat: z.string(), 
            lng: z.string() }) }), 
            phone: z.string(), 
            website: z.string(), 
            company: z.object({ name: z.string(), 
                catchPhrase: z.string(),
                 bs: z.string() }) });
 test('API test: GET user details with schema validation', async ({ request }) => { 
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1'); 
    expect(response.status()).toBe(200);
     const body = await response.json(); 
     // Validate schema 
     const parsed = useSchema.safeParse(body); 
     expect(parsed.success).toBe(true); 
     // Optional: log errors if schema fails 
     if (!parsed.success) { 
        console.log(parsed.error.format()); 
    } // Additional field checks 
    expect(body.name).toContain('Leanne Graham'); 
    expect(body.address.city).toBe('Gwenborough'); });


    //second way using AJV-schema valdiTION
const ajv = new Ajv();

const userSchema = {
  type: "object",
  required: ["id", "name", "email", "address", "company"],
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    email: { type: "string" },
    address: {
      type: "object",
      required: ["city"],
      properties: {
        city: { type: "string" }
      }
    },
    company: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" }
      }
    }
  }
};

test('API test: GET user details with AJV schema validation', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.status()).toBe(200);

  const body = await response.json();

  const validate = ajv.compile(userSchema);
  const valid = validate(body);

  expect(valid).toBe(true);

  if (!valid) {
    console.log(validate.errors);
  }
});


test('API test: GET user details', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  // Validate status code
  expect(response.status()).toBe(200);

  // Parse JSON
  const body = await response.json();

  // Validate fields
  expect(body.id).toBe(1);
  expect(body.name).toBeTruthy();
  expect(body.name).toContain('Leanne Graham');
  expect(body.email).toContain('@');
  expect(body.email).toEqual('Sincere@april.biz');
  expect(body.address.city).toEqual('Gwenborough');
  expect(body.company.name).toBe('Romaguera-Crona');
//for schema validation we need zod /AJV  to be installed on our sys,
// npm install zod   or npm install ajv
  // Optional: log for debugging
  console.log('User data:', body);
});

/*JSONPlaceholder is a mock API service — 
it is intentionally designed to behave like a real API without actually storing data.
It shows fake pages even for IDs that don’t exist
JSON parsing-practice extracting fields, validating types, etc.
its stable-It rarely goes down
*/
test('API test: create a new post', async ({ request }) => {
  const payload = {
    title: 'Playwright Test',
    body: 'This is a sample post',
    userId: 1111
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: payload
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.title).toBe(payload.title);
  expect(body.userId).toBe(1111);
});

