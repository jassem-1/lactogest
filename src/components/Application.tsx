import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import AdminLayout from './AdminLayout';

interface ApplicationProps {
  Component: any;
  pageProps: AppProps;
}

function Application({ Component, pageProps }: ApplicationProps) {
  const router = useRouter();
  // const { data, isLoading, isFetching } = useQuery({
  //   retry: 2,
  //   queryKey: ['getMe', router.pathname],
  //   queryFn: () => api.auth.getMe(),
  //   refetchInterval: 1jass,
  //   // retry: false,
  //   refetchOnWindowFocus: false,
  //   enabled:
  //     !router.pathname.includes('auth') && router.pathname.includes('admin'),
  // });

  // useEffect(() => {
  //   if (
  //     router.pathname.includes('admin') &&
  //     !data &&
  //     !(isFetching || isLoading)
  //   ) {
  //     router.push('/admin/auth/login');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data, isLoading, isFetching]);

  // if (router.pathname.includes('admin') && isLoading && isFetching) {
  //   return (
  //     <main className="min-h-screen flex items-center justify-center">
  //       <Loader2 className="animate-spin" />
  //     </main>
  //   );
  // }

  // if (!data && !(isFetching || isLoading)) {
  //   return null;
  // }

  // pageProps.pageProps = {
  //   ...pageProps.pageProps,
  //   user: data,
  // };
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );
}

export default Application;
