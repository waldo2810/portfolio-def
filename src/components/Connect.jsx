const Connect = () => {
  return (
    <div className="grid lg:grid-cols-2 my-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className="pb-10 lg:pb-0 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-600">
          Let's connect.
        </h2>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="dark:text-white text-xl">
          <a
            href="https://linkedin.com/in/waldo-sobrino"
            target="_blank"
            className="hover:underline"
          >
            Linkedin
          </a>
        </h3>
        <h3 className="dark:text-white text-xl">
          <a
            href="https://github.com/waldo2810"
            target="_blank"
            className="hover:underline"
          >
            Github
          </a>
        </h3>
        <h3 className="dark:text-white text-xl">
          <a
            href="https://dribbble.com/wsb77"
            target="_blank"
            className="hover:underline"
          >
            Dribbble
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Connect;
