import { Container, Title } from '@/components/shared';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text={'Все пиццы'} size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <div className='h-[3000px]'></div>
    </>
  );
} 
