import { createClient } from '@sanity/client';

export default createClient({
  // You can find your projectId in your sanity.json file
  // inside the sanity-studio folder
  projectId: '4czbk8j7', 
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03', // use a UTC date in YYYY-MM-DD format
});