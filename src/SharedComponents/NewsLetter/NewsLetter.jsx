import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const NewsLetter = () => {

  const handleFormSubmit = e =>{
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm("service_brezsy8", "template_v98bt7p", e.target, "Aot0D54Ezr5WnAOJe")
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
}

  return (
    <div className="relative w-10/12 mx-auto overflow-hidden rounded  bg-gray-900 py-16 sm:py-10 my-10 ">
        <div className="mx-auto w-full px-6 lg:px-8">
          <div className="mx-auto w-full grid  grid-cols-1 gap-x-8 gap-y-16  lg:grid-cols-2">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Get ever campaign info via email.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <form className="space-y-4 mx-auto" onSubmit={handleFormSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm lg:text-lg  font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-96 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm lg:text-lg  font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-96 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Let me know how I can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm lg:text-lg font-medium text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-96 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Leave a message..."
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Send message
                </button>
              </form>
          </div>
        </div>
      </div>
  );
};

export default NewsLetter;
