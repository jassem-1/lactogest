import Form from './form';

export default function RegisterPage() {
  return <Form />;
}

RegisterPage.getLayout = function getLayout(page:any) {
  return <>{page}</>; // Do not wrap in the AdminLayout
};