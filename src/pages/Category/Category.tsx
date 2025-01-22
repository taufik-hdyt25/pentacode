import { FlowerCatItem } from '@/components/FlowerCatItem';
import { Layout } from '@/components/Layout';

const CategoryFlower: React.FC = () => {
  const catItems = [
    {
      name: 'Snowfall',
      price: 'price 70$',
      image: 'Fresh-Flower.jpeg',
    },
    {
      name: 'Dawns Delight',
      price: 'price 70$',
      image: 'Dried-Flowers.png',
    },
    {
      name: 'Rustic Charm',
      price: 'price 70$',
      image: 'Dried-Flowers.png',
    },
    {
      name: 'Pink Elegance',
      price: 'price 70$',
      image: 'Fresh-Flower.jpeg',
    },
    {
      name: 'Snowfall',
      price: 'price 70$',
      image: 'Fresh-Flower.jpeg',
    },
    {
      name: 'Dawns Delight',
      price: 'price 70$',
      image: 'Dried-Flowers.png',
    },
    {
      name: 'Rustic Charm',
      price: 'price 70$',
      image: 'Dried-Flowers.png',
    },
    {
      name: 'Pink Elegance',
      price: 'price 70$',
      image: 'Fresh-Flower.jpeg',
    },
  ];
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen  md:h-[90vh]">
        <div
          className=" bg-cover bg-center min-h-[500px]"
          style={{
            backgroundImage: 'url(assets/images/bg-category.png)',
          }}
        >
          <div className="bg-black h-full bg-opacity-50 flex justify-center items-center">
            <h3 className="text-3xl font-bold text-white">Fresh Flowers</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  overflow-y-auto">
          {catItems?.map((data, idx) => (
            <div key={idx + data.name} className="h-[300px]">
              <FlowerCatItem data={data} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryFlower;
