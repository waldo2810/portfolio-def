const Footer = () => {
  return (
    <div className="w-[80%] lg:w-[95%] mx-auto mb-10">
      <hr className="dark:border-gray-900 mt-20 w-full mb-5" />
      <div className="w-full flex justify-between">
        <a
          href="mailto:waldo2810@gmail.com"
          className="dark:text-white text-xs hover:underline"
        >
          waldo2810@gmail.com
        </a>
        <p className="dark:text-white text-xs copywrite">© 2023</p>
      </div>
    </div>
  );
};

export default Footer;
