import { useEffect, useState } from 'react';
import { blogSlider, categories, dummyPosts, topPost, type ICategory } from './data';
import { BiSearch } from 'react-icons/bi';

const Blog = () => {
  const [currentView, setCurrentView] = useState(0);
  const [fade, setFade] = useState(true);
  const maxSlide = blogSlider.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out before switching
      setFade(false);

      setTimeout(() => {
        setCurrentView(prev => (prev === maxSlide - 1 ? 0 : prev + 1));
        setFade(true); // Fade-in new slide
      }, 500); // Duration must match CSS transition
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlide]);

  const activeSlide = blogSlider[currentView];

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <div
        className={`relative h-[80vh] flex items-end text-white transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${activeSlide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Text content */}
        <div className="relative z-10 p-10 max-w-xl">
          {activeSlide.category && (
            <span className="mb-2 block font-light text-lg uppercase tracking-wide text-gray-300">
              {activeSlide.category}
            </span>
          )}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight drop-shadow-lg">
            {activeSlide.title}
          </h1>
          <p className="text-gray-200 text-lg">{activeSlide.content}</p>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-6 right-10 flex gap-3 z-10">
          {blogSlider.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentView(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentView ? 'bg-white w-6' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* menu content area */}
      <div className="flex items-start justify-between p-10">
        <div className="w-[35%]">
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <input className="w-full outline-none border-none p-2" />
            <BiSearch className="cursor-pointer" />
          </div>
          {/* category sections */}
          <h1 className="font-semibold z-40 text-2xl text-white mt-10 mb-4">Categories</h1>
          <div>
            {categories?.map((category: ICategory, index: number) => (
              <div
                style={{
                  backgroundImage: `url(${category.img})`,
                  //   backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                key={index}
                className="relative h-20 mb-5 flex items-center justify-center text-white"
              >
                <div className="absolute z-30 inset-0 bg-black/80"></div>
                <h1 className="relative z-40">{category.label}</h1>
              </div>
            ))}
          </div>
          {/* Top stories */}
          <div className="mt-10 bg-neutral-200 flex flex-col gap-10 p-10">
            <h1 className="mb-2 font-semibold text-3xl">Top Stories</h1>
            {topPost?.map((post, index) => {
              return (
                <div key={index} className="flex items-start gap-3 hover:bg-neutral-400 p-3">
                  <span className="font-bold text-3xl">{post.id}</span>
                  <div>
                    <h2 className="mb-1">{post.title}</h2>
                    <div className="flex items-center gap-3 text-neutral-500 font-medium">
                      <p>{post.category}</p>
                      <p>{post.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[55%] flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-2 text-white">
            {dummyPosts?.map((post, index) => {
              return (
                <div key={index}>
                  <img className="h-[350px] w-full object-cover" src={post.img} alt="post" />
                  <div className="flex items-center justify-start gap-2 my-2 text-neutral-300">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h1 className="mb-2 font-semibold text-xl">{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              );
            })}
          </div>
          <button className="mt-10 bg-blue-900 text-white text-2xl p-2 rounded-sm text-center">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
