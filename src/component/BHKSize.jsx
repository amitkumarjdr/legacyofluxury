import img1 from "../images/image 6.png";

export default function BHKSize({aos}) {
  return (
    <>
      <div className=" shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]  md:px-3 px-1   py-1 rounded-[10px] flex justify-evenly items-center" data-aos={aos}>
        <div>
          <img className="object-contain" src={img1} alt="" />
        </div>
        <div>
          <p className="md:text-[20px] text-[18px] text-[#747372] "> <span className="text-[#2c2b2a] ">3 BHK </span>  1980 sq.ft <br /> EAST TYPE-1</p>
        </div>
      </div>
    </>
  );
}
