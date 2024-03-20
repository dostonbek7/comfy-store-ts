function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center">
        <h1 className="text-5xl leading-none font-bold tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl tracking-widest font-bold">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi atque minus, nam assumenda a cumque, consectetur ad totam aperiam corporis quidem tempora laborum reprehenderit magnam. Voluptates, aperiam ea. Praesentium.
      </p>
    </>
  );
}

export default About;
