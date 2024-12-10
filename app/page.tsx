import {
  Container,
  Filters,
  ProductGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text={'Все пиццы'} size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='pb-14 mt-10'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 2,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 3,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 4,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 5,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 6,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 7,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 8,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 9,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 10,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title='Завтрак'
                items={[
                  {
                    id: 1,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 2,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 3,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 4,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 5,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 6,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 7,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 8,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 9,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                  {
                    id: 10,
                    name: 'Мега Барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 450,
                    items: [{ price: 450 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
