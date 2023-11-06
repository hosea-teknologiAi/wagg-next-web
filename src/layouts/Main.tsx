import Head from 'next/head';
import Header from '@/components/Header';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

const Main = ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}

export default Main;