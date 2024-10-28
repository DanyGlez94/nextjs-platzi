import { validateAccessToken } from 'app/utils/auth/validateAccessToken';

export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  return (
    <div>
      <section>
        <h2 style={{ marginTop: 0 }}>Account info</h2>
        <h1>Nombre: {customer?.firstName}.</h1>
        <p>Email: {customer?.email}</p>
      </section>
    </div>
  );
}
