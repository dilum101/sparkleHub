export default function CleaningWebsite() {
  return (
    // <div className="snap snap-mandatory min-h-screen bg-white">
    //   {Sections.map(({ id, component: Element }) => (
    //     <section id={id} key={id} className="w-full h-full snap-start pt-20">
    //       <Element />
    //     </section>
    //   ))}
    // </div>
    <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gray-100">
      <img
        src="/maintenance.png"
        alt="under maintenance"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
