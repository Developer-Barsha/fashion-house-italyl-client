/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { ClothingData } from "../../StaticData/CardData";
import facebook from "../../assets/images/icon/footerImg/social-icon/facebook.png";
import email from "../../assets/images/icon/footerImg/social-icon/email.png";
import linkedin from "../../assets/images/icon/footerImg/social-icon/linkedins.png";
import twitter from "../../assets/images/icon/footerImg/social-icon/twitters.png";
import instagram from "../../assets/images/icon/footerImg/social-icon/instagram.png";
import "../../styles/components/swiperThum.scss";
import Left from "../Home/Left";
import Right from "../Home/Right";

const ClothDetails = () => {
  const navigate = useNavigate();
  const { clothID } = useParams();
  const match = ClothingData.find((product) => product.id == clothID);

  return (
    <section className="bg-[#F7F7F7] ">
      <div className="bg-[#F7F7F7] container py-10">
        <div className="flex justify-center items-start gap-5">
          <section className=" w-1/6 h-full hidden lg:block">
            <Left />
          </section>
          <section className=" w-full h-full lg:w-4/6 ">
            <section>
              <div className="flex flex-col items-center xl:flex-row">
                <div className="flex-1">
                  <img src={match.img1} alt="" />
                </div>

                <div className="flex-1 flex flex-col items-start text-start space-y-1">
                  <h1 className="text-3xl font-semibold">{match?.name}</h1>
                  <h2 className="text-2xl font-sans font-semibold text-primary">${match?.price}</h2>
                  <p className="pt-7">{match.des}</p>
                  <div className="space-y-5 pt-4 font-semibold text-[14px]">
                    <h2>
                      Movement: <span className="ml-14 text-gray-400">{match.movement}</span>
                    </h2>
                    <h2>
                      Availability: <span className="ml-14 text-gray-400">{match.availability}</span>
                    </h2>
                  </div>
                  <div className="flex item-center space-x-4 py-4">
                    <button
                      onClick={() => navigate(`/cart1/${match.id}`)}
                      className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faCartArrowDown} /> Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/cart1/${match.id}`)}
                      className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary"
                    >
                      Buy it Now
                    </button>
                  </div>
                  <button className="text-white px-5 py-3 bg-stone-900 border-none rounded-none font-normal transform duration-500 hover:bg-primary w-full">
                    {" "}
                    <FontAwesomeIcon icon={faHeart} /> <span>Add to wishlist</span>{" "}
                  </button>
                  <div className="flex space-x-[4px] pt-4 cur">
                    <img src={facebook} alt="facebook" />
                    <img src={email} alt="email" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className=" w-1/6  h-full hidden lg:block">
            <Right />
          </section>
        </div>
      </div>
    </section>
  );
};

export default ClothDetails;
