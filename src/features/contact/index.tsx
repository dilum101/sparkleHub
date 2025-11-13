import { GetInTouch } from "./getInTouch";
import { RequestQuoteForm } from "./requestQuoteForm";

type Props = {};

export const Contact = ({}: Props) => {
  return (
    <section
      id="contact"
      className="py-20  text-black relative items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('src/assets/contactus.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/20  to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12">
          <GetInTouch />
          <RequestQuoteForm />
        </div>
      </div>
    </section>
  );
};
