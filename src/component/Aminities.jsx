
import img1 from "../images/Rectangle 2.png"
import img2 from "../images/Rectangle 567.png"
import img3 from "../images/Rectangle 568.png"
import img4 from "../images/Rectangle 569.png"
import img5 from "../images/Rectangle 566.png"
import Heading from "./Heading"

export default function Aminities() {

    let AminitiesData = [
        {
            img: img1,
            title: "Meditation Hall"
        },
        {
            img: img2,
            title: "private theatre"
        },
        {
            img: img3,
            title: "PLAY GROUND"
        },
        {
            img: img4,
            title: "SWIMMING POOL"
        },
        {
            img: img5,
            title: "SPORT"
        }
    ]

    return (
        <div data-aos="fade-right" data-aos-duration="1000">
            <Heading heading="AMINITIES" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="grid lg:grid-cols-5 sm:grid-cols-5 grid-cols-2  gap-4 text-center mx-auto font-[500] py-2 lg:px-5   md:size-auto">
                {AminitiesData.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className="card">
                            <div className="overflow-hidden card_inner max-w-[280px] lg:max-w-full shadow-[0_0_8px_1px_#BD9944]">
                                <img className="w-full h-auto duration-1000" src={item.img} alt={item.title} />
                            </div>
                        </div>
                        <p className=" font-bold uppercase mt-3 md:text-[16px] text-[12px] hover:text-[#BD9944] cursor-pointer">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}
