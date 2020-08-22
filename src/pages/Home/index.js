import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import BaseLayout from '../../components/BaseLayout';
import serviceCategories from '../../services/categories';

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    (async function getCategories() {
      const categories = await serviceCategories.getAllWithVideos();
      setDadosIniciais(categories);
    })();

  }, []);

  return (
    <BaseLayout>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((item, index) => {
        if (index === 0) {
          return (
            <div key={item.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área."
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={item.id}
            category={item}
          />
        )
      })}


    </BaseLayout>
  );
}

export default Home;
