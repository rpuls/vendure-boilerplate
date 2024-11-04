import { json } from '@remix-run/node';

export default function healthCheck() {
  return json({ message: 'OK' }, { status: 200 });
}
