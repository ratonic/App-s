import Image from 'next/image';
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8'>
      <section className='h-full flex flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
        <div className='relative w-96 h-96'>
          <Image src='/wallpaper.svg' alt='Wallpaper' fill />
        </div>
        <div>
          <h3 className='text-white text-2xl font-semibold text-center mb-5'>
            ¡Conviertete en Ingeniero de Software! <br /> Universidad Coperativa De Colombia
          </h3>
          <p className='text-gray-300 text-xl text-center'>
            Forma parte de la nueva generacion de Ingenieros en Software
          </p>
          <p className='text-gray-300 text-center'>PASTO 2024</p>
        </div>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;