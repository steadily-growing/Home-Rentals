import React, { useMemo } from "react";
import "../index.css";
import { useDropzone } from "react-dropzone";
import Footer from "./footer";

function AddNewProperty(props) {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    marginTop: "26px",
  };

  const focusedStyle = {
    borderColor: "#f4511e",
  };

  const acceptStyle = {
    borderColor: "#f4511e",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className=" ">
      <h2 className="text-center font-[Inter-Medium] font-bold">
        {" "}
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h2>
      {/* card */}
      <div className="">
        <h1 className="text-center font-extrabold text-orange-600">
          Add A New Property
        </h1>
        <div className="w-full max-w-screen-lg mx-auto">
          <form className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="">
              <label className="font-bold">
                Name <span className="text-orange-500 ">*</span>
              </label>
              <br />
              <input
                type="text"
                className="p-2 border   border-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter Your Name"
              ></input>
              <br />
            </div>

            <div>
              <label className=" py-4 font-bold">
                City <span className="text-orange-500">*</span>
              </label>
              <br />
              <select className="py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400">
                <br />
                <option value="Select your city">Select Your City</option>
              </select>
            </div>

            <div>
              <label className=" py-4 font-bold">
                Price <span className="text-orange-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="p-2 border   border-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter Price"
              ></input>
              <br />
            </div>

            <div className=" ">
              <label className=" py-4 font-bold">
                Address <span className="text-orange-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="p-2 border   border-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter Addres"
              ></input>
              <br />
            </div>

            <div>
              <label className=" py-4 font-bold">
                State <span className="text-orange-500">*</span>
              </label>
              <br />
              <select className="py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400">
                <br />
                <option value="Select state">Select State</option>
              </select>
            </div>

            <div>
              <label className=" py-4 font-bold">
                Room <span className="text-orange-500">*</span>
              </label>
              <br />
              <select className="py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400">
                <br />
                <option value="Select room type">Select room type</option>
              </select>
            </div>

            <div className=" ">
              <label className=" py-4 font-bold">
                Unit Number <span className="text-orange-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="p-2 border   border-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter Unit"
              ></input>
              <br />
            </div>

            <div>
              <label className=" py-4 font-bold">
                Room <span className="text-orange-500">*</span>
              </label>
              <br />
              <select className="py-2 px-8 border   border-1 border-gray-300 rounded-md bg-gray-100 text-gray-400">
                <br />
                <option value="Select room type">Select room type</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className=" py-4 font-bold">
                Description <span className="text-orange-500">*</span>
              </label>
              <br />
              <input
                type="text"
                className="px-96 py-8 border border-1 border-gray-300 rounded-md bg-gray-100"
                placeholder="Enter Description"
              ></input>
              <br />
            </div>

            {/* <div className="col-span-2">
            <label className=" py-4 font-bold">Upload Photos</label>
            <br />
            <input
              type="text"
              className="px-96 py-8 border border-2 border-orange-300 border-dashed rounded-md"
              placeholder="Drag your images here,or browse"
            ></input>
            <br />
          </div> */}
          </form>
          <div className="container">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p className="font-[Poppins-Bold]">
                Drag your images here or{" "}
                <span className="text-orange-500"> browse</span>
              </p>
              <p className="font-[Poppins-Bold]">Supported: JPG, JPEG, PNG</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <a className="btn-secondary">Add New Property</a>
      </div>

      <Footer/>
    </div>
  );
}

export default AddNewProperty;
