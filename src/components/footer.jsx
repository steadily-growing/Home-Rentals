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
    <div className="pr-24 pt-24 pb-10 ml-28">
      <div class="border-t border-orange-400 h-0 pb-8"></div>

      <div className=" flex flex-col ">
        <div className="flex justify-between">
          {/* logo */}
          <div className="font-bold text-4xl">Logo</div>
          {/* details */}
          <div className="flex p-2">
            {/* first section :location phone and printer  */}
            <div className="flex flex-col">
              {/* location */}
              <div className="flex items-center justify-between p-2">
                <img src={landmark} />
                <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
              </div>
              {/* phone and printer */}
              <div className="flex justify-between p-2">
                <div className="flex justify-between  ">
                  <img src={phone} />
                  <p>(123) 456-7890</p>
                </div>
                {/* printer */}
                <div className="flex">
                  <img src={printer} />
                  <p>(123) 456-7890</p>
                </div>
              </div>
              {/* social media */}
              <div className="flex items-center justify-between p-2 ">
                <div>Social Media</div>
                <img src={fbk} />
                <img src={twt} />
                <img src={lnkdn} />
                <img src={yutube} />
                <img src={ig} />
                <img src={google} />
                <img src={pinterest} />
                <img src={wifi} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* text */}
      <div class="border-t border-gray-200 h-0 pb-4"></div>
      <div className="flex justify-between ">
        
        <div className="flex space-between justify-between">
          <div>ABOUT US </div>
          <div>CONTACT US</div>
          <div>HELP</div>
          <div>PRIVACY POLICY</div>
          <div>DISCLAIMER</div>
        </div>
        {/* copyright */}
        <div>Copyright © 2020 Minimumlivingcost. All rights reserved</div>
      </div>
    </div>
  );
}

export default footer;
