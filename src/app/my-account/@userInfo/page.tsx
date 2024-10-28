import { validateAccessToken } from 'app/utils/auth/validateAccessToken';

export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  return (
    <div>
      <section>
        <h2 style={{ marginTop: 0 }}>Your info</h2>
        <h1>Bienvenido, {customer?.firstName}.</h1>
        <p>Email: {customer?.email}</p>
      </section>
    </div>
  );
}
