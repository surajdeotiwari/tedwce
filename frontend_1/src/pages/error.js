const Error = () => {
  return (
    <div class="bg-black text-white lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 font-bold text-2xl">
                You are trying to access the wrong page, which is unavailable.
              </h1>
              <p class="my-2">
                Sorry about that! but Event Registration is open now, and you
                can start registering for the event.
              </p>
              {/* <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-black text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-black-700 focus:ring-opacity-50">
                Click here
              </button> */}
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/3v35HK3/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/j44kBbp/Group.png" />
      </div>
    </div>
  );
};

export default Error;
