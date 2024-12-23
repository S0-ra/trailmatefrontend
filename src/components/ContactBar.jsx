const ContactBar = function () {
  return (
    <>
      <header className="relative bg-red-400 text-white py-32">
        <div className="absolute inset-0 bg-opacity-30 -mx-20 bg-black"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">
            Lets gear you up for your next adventure!
          </p>
        </div>
        <div className="absolute inset-0 flex justify-center -mx-20 items-center">
          <div
            className="w-full h-full bg-cover bg-center "
            style="background-image: url(/images/contact.jpg);background-size:cover;background-repeat: no-repeat; background-position: center;"></div>
        </div>
      </header>
    </>
  );
};



export default ContactBar;
