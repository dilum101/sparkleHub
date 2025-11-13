import Button from "../../componets/Button";

type Props = {};

export const Hero = ({}: Props) => {
  return (
    <section
      id="home"
      className="relative h-[100vh] w-full flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/heronew.png')",
          height: "calc(100% - 5rem)",
        }}
      />

      {/* White Gradient Fade from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/20  to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-wide "
              style={{
                lineHeight: 1.1,
              }}
            >
              Professional Cleaning Services You Can Trust
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 mb-8 tracking-wide font-semibold"
              style={{
                lineHeight: 1.4,
              }}
            >
              Experience spotless spaces with our expert cleaning team.
              Commercial, residential and specialized cleaning services tailored
              to your needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Book Now</Button>
              <Button variant={"outline"} className="text-sparkleBlue">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <div>
                <div className="text-lg md:text-3xl font-bold text-blue-600">
                  5+
                </div>
                <div className="text-gray-600 text-sm md:text-lg">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-lg md:text-3xl font-bold text-blue-600">
                  100+
                </div>
                <div className="text-gray-600 text-sm md:text-lg">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-lg md:text-3xl font-bold text-blue-600">
                  100%
                </div>
                <div className="text-gray-600 text-sm md:text-lg">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
