import './AdCare.css'

const AdCare = () => {
  return (
    <div className="grid grid-cols-2 text-black w-10/12 mx-auto my-20  shadow_class">
      <div className="space-y-8 flex flex-col justify-center w-2/3 mx-auto">
        <h1 className="text-4xl font-semibold text-center font-serif">Experience The Power Of 16 Rare Oils For Radiant Skin!</h1>
        <p className="text-lg text-center font-sans">
          Les 16 Précieux is the ultimate antioxidant oil-serum formulated with
          16 rare, precious and highly potent oils and extracts that work to
          nourish the skin and protect it from environmental aggressors.
        </p>
        <p className="text-lg text-center font-sans">
          This antioxidant facial oil is enriched with encapsulated acai, beta
          carotene, bakuchiol and blueberry extract providing a blue light
          shield helping the skin to better defend itself against environmental
          factors.
        </p>
        <button className="bring_it_home_btn font-serif" role="button">BRING IT HOME</button>
      </div>
      <div className="h-[600px]">
        <img className="h-full w-full" src="https://i.ibb.co/hD7gktg/extra.png" alt="" />
      </div>
    </div>
  );
};

export default AdCare;
