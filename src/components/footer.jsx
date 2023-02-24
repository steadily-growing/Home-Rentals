import React from "react";
import landmark from "../assets/landmark.png";
import phone from "../assets/phone.png";
import printer from "../assets/printer.png";
import fbk from "../assets/fbk.png";
import twt from "../assets/twt.png";
import lnkdn from "../assets/lnkdn.png";
import yutube from "../assets/yutube.png";
import ig from "../assets/ig.png";
import google from "../assets/google.png";
import pinterest from "../assets/pinterest.png";
import wifi from "../assets/wifi.png";

function footer() {
  return (
    <div className=" flex flex-col  px-[10%] py-[5%] w-full" >
      <div className="flex">
          {/* logo */}
      <div>logo</div>
      {/* details */}
      <div className="">
        {/* first section :location phone and printer  */}
        <div className="flex flex-col items-center justify-between w-[65%]">
          {/* location */}
          <div className="flex">
            <img src={landmark} />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          {/* phone and printer */}
          <div className="flex">
            <div className="flex">
              <img src={phone} />
              <p>(123) 456-7890</p>
            </div>
            {/* printer */}
            <div className="flex">
              <img src={printer} />
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
      {/* social media */}
      <div className="flex items-center justify-between w-[65%]">
        <div>Social Media</div>
        <img src={fbk}/>
        <img src={twt}/>
        <img src={lnkdn}/>
        <img src={yutube}/>
        <img src={ig}/>
        <img src={google}/>
        <img src={pinterest}/>
        <img src={wifi}/>
      </div>
      {/* text */}
      <div className="flex">
        <div>ABOUT US</div>
        <div>CONTACT US</div>
        <div>HELP</div>
        <div>PRIVACY POLICY</div>
        <div>DISCLAIMER</div>

      </div>
      {/* copyright */}
      <div>
      Copyright © 2020 Minimumlivingcost. All rights reserved
      </div>
    </div>
  );

}

export default footer;
