
import landImg from "../images/image 8.png"

export default function MasterPlan() {

  

    let arr = [ 
           'Entry - Exi ',
           'Seating Terrace',
           'Wellness Area',
           'Children Play Area',
           'Gazebo',
           'Fire Tender Entry - Exit',
           'Palm Grove',
           'Gazebo',
           'Lawn',
           'Yoga Deck',
           'Walking & Cycling Track',
           'Sports Corner',
           'Badminton Court',        
           'Outdoor Gym',
           'Clubhouse',
           'Basement Entry',
      ]

   

  return (
    <>
      <div className="md:flex justify-between items-center py-5">
        <div className="md:w-[48%] lg:h-[647px] h-[400px]">
          <img className="w-[100%] h-[100%] object-contain" src={landImg} alt="" />
        </div>
        <div className=" md:w-[47%] grid grid-rows-10 grid-flow-col mx-auto ">
          {arr.map((item, index) => (
            <div className="text-[#565555] cursor-pointer  lg:text-[22px] text-[12px] font-[700] py-1 ps-2">
              {index + 1} &nbsp; {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
