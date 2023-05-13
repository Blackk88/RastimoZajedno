import Image from "next/image";

import img1 from "@/assets/ourWork/1.jpg";
import img2 from "@/assets/ourWork/2.jpg";
import img3 from "@/assets/ourWork/3.jpg";
import img4 from "@/assets/ourWork/4.jpg";
import img5 from "@/assets/ourWork/5.jpg";
import img6 from "@/assets/ourWork/6.jpg";
import img7 from "@/assets/ourWork/7.jpg";
import img8 from "@/assets/ourWork/8.jpg";
import img9 from "@/assets/ourWork/9.jpg";
import img10 from "@/assets/ourWork/10.jpg";
import img11 from "@/assets/ourWork/11.jpg";
import img12 from "@/assets/ourWork/12.jpg";
import img13 from "@/assets/ourWork/13.jpg";
import img14 from "@/assets/ourWork/14.jpg";
import img15 from "@/assets/ourWork/15.jpg";
import img16 from "@/assets/ourWork/16.jpg";
import img17 from "@/assets/ourWork/17.jpg";

export default function OurWork() {
  return (
    <div className="d-flex flex-wrap p-3 gap-3 justify-content-center">
      <div className="">
        <Image
          src={img1}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="">
        <Image
          src={img2}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img3}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img5}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img4}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img6}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img7}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img15}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img8}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img13}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img14}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img10}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img11}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img12}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img9}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img16}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="our-work__card">
        <Image
          src={img17}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  );
}
