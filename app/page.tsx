'use client'
import { LiaSignOutAltSolid } from "react-icons/lia";
import { RiHome4Fill } from "react-icons/ri";
import { BsBoxFill } from "react-icons/bs";
import { TbFileFilled } from "react-icons/tb";
import { BiSolidBuilding } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className="flex flex-row border border-red-400 ">
      <div className="bg-lgold border-orange-400 w-64">
        <div className="flex flex-col h-screen">
          <div>
          <p className="font-bold m-4 mb-8">CRMate</p>
          </div>
          <div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><RiHome4Fill /></h1>
              <h1 className="pl-2 p-1">Home</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><BsBoxFill /></h1>
              <h1 className="pl-2 p-1">Products</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><TbFileFilled /></h1>
              <h1 className="pl-2 p-1">Tasks</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><BiSolidBuilding /></h1>
              <h1 className="pl-2 p-1">Accounts</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><IoMdContacts /></h1>
              <h1 className="pl-2 p-1">Contacts</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><AiFillDollarCircle /></h1>
              <h1 className="pl-2 p-1">Invoices</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><MdPayments /></h1>
              <h1 className="pl-2 p-1">Payments</h1>
            </div>
            <div className="hover:font-bold hover:bg-lorange text-lgrey hover:text-black p-2 ml-2 mr-2 rounded-xl flex flex-row">
              <h1 className="pt-2"><FaFileAlt /></h1>
              <h1 className="pl-2 p-1">Documents</h1>
            </div>
          </div>
          <div className="mt-64">
            <div className="flex flex-row bg-white ml-2 rounded-xl mr-2 p-1">
              <img 
                src="\images.jpg"
                alt="blank image" 
                className=" w-12 rounded-full" 
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-semibold">Jane Doe</p>
                <p className="text-xs ml-1 bg-lorange pl-2 p-1 rounded-2xl font-bold">Admin</p>
              </div>
              <button
                className="rounded-md bg-lslate ml-10 mr-3 m-2 p-1"
              > 
                  <LiaSignOutAltSolid />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-black-400 w-full">
        <div className=" bg-lorange flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="ml-6 mt-4">
              <button className="bg-white p-2 rounded-lg"><GoArrowLeft /></button>
            </div>
            <div className="mr-4 mt-4">
            <button className="bg-white p-2 rounded-lg mr-2"><SlSettings /></button>
            <button className="bg-white p-2 rounded-lg mr-2"><HiOutlineQuestionMarkCircle /></button>
            <button className="bg-white p-2 rounded-lg"><GoBell /></button>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mt-6 ">
              <p className="ml-4 mb-2 text-5xl">Abstergo Ltd.</p>
              <h3 className="ml-4 mb- 2 text-sm text-lgrey">4517 Washington Ave. Manchester,Kentucky 39495</h3>
            </div>
            <div className="mt-12">
              <button className="flex flex-row bg-white p-2 rounded-lg font-semibold mt-2 mr-3"><GoPlus className="pt-1 text-2xl" />  Add new invoice</button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-b-2 border-lslate h-1/3">
            <div className="border-r-2 border-lslate w-1/2">
              <p className="font-semibold text-lg mt-2 ml-4">Overall</p>
              <div className="flex flex-row">
                <div className="bg-lorange h-36 w-44 rounded-2xl mt-2 ml-4">
                  <p className="text-lbrown text-sm ml-2 mt-2">Paid</p>
                  <p className="text-2xl mt-12 ml-2"><span className="text-lbrown">$</span>1,234.<span className="text-sm ">00</span></p>
                  <p className="text-xs ml-2 mt-1">+35% <span className="text-lbrown font-semibold"> Last Week</span></p>
                </div>
                <div className="bg-lgold h-36 w-44 rounded-2xl mt-2 ml-4">
                  <p className="text-lgrey text-sm ml-2 mt-2">Due</p>
                  <p className="text-2xl mt-12 ml-2"><span className="text-lgrey">$</span>797.<span className="text-sm ">00</span></p>
                  <p className="text-xs ml-2 mt-1 text-green-400">+17% <span className="text-lgrey font-semibold"> Last Week</span></p>
                </div>
                <div className="bg-lgold h-36 w-44 rounded-2xl mt-2 ml-4">
                  <p className="text-lgrey text-sm ml-2 mt-2">Balance</p>
                  <p className="text-2xl mt-12 ml-2"><span className="text-lgrey">$</span>8,234.<span className="text-sm ">00</span></p>
                  <p className="text-xs ml-2 mt-1 text-red-400">-35% <span className="text-lgrey font-semibold"> Last Week</span></p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
            <p className="font-semibold text-lg mt-1 ml-4">Status</p>
            </div>
          </div>
          <div className="flex border-b-2 border-lslate h-1/3">
            <div className="border-r-2 border-lslate w-1/2">
              <p className="font-semibold text-lg mt-1 ml-4">Paymnets methods</p>
              <div>
                <div className="flex flex-row">
                  <div className="bg-lorange h-40 w-72 rounded-2xl mt-1 ml-4 custom-shadow">
                    <div>
                      <p className="text-lbrown text-sm ml-4 mt-4">Universal</p>
                    </div>
                    <p className="text-4xl mt-4 ml-4"><span className="text-lbrown">$</span>8,523.<span className="text-2xl">20</span></p>
                    <div className="flex flex-row">
                      <p className="ml-4 mt-7 font-mono">*9423</p>
                      <p className="ml-12 mt-7 font-mono">06/28</p>
                      <p className="ml-14 font-extrabold text-3xl mt-5 font-serif">VISA</p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-lgold ml-20 w-48 h-40 rounded-xl justify-center items-center">
                    <button className="bg-black text-2xl text-white w-10 h-10 rounded-full">+</button>
                    <p className="font-mono">Add method</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-row">
                <p className="ml-4 text-lg font-semibold">Recent transactions</p>
                <p className="underline ml-auto mr-6">view all</p>
              </div>
              <div className="flex flex-row ml-3">
                <div>
                  <img 
                    src="\images.jpg"
                    alt="blank image" 
                    className=" w-8 rounded-full mt-4" 
                  />
                  <img 
                  src="\images.jpg"
                  alt="blank image" 
                  className=" w-8 rounded-full mt-2" 
                  />
                  <img 
                  src="\images.jpg"
                  alt="blank image" 
                  className=" w-8 rounded-full mt-2" 
                  />
                  <img 
                  src="\images.jpg"
                  alt="blank image" 
                  className=" w-8 rounded-full mt-2" 
                  />
                </div>
                <div className="ml-1">
                  <p className="ml-1 font-mono text-base mt-3">Thomas Harris</p>
                  <p className="ml-1 font-mono text-base mt-4">Guy Hawkins</p>
                  <p className="ml-1 font-mono text-base mt-4">Sasha Turner</p>
                  <p className="ml-1 font-mono text-base mt-3">Mya Guzman</p>
                </div>
                <div className="ml-12">
                  <p className="mt-3 text-lgrey text-sm">january 18,2024</p>
                  <p className="mt-5 text-lgrey text-sm">january 17,2024</p>
                  <p className="mt-5 text-lgrey text-sm">january 12,2024</p>
                  <p className="mt-5 text-lgrey text-sm">january 7,2024</p>
                </div>
                <div className="ml-6">
                  <p className="mt-3 text-lgrey text-sm">1:25 AM</p>
                  <p className="mt-5 text-lgrey text-sm">3:17 AM</p>
                  <p className="mt-5 text-lgrey text-sm">9:15 AM</p>
                  <p className="mt-5 text-lgrey text-sm">6:47 AM</p>
                </div>
                <div className="ml-auto">
                  <p className="mt-2 mr-6">-$610.00</p>
                  <p className="mt-4 mr-6">-$500.00</p>
                  <p className="mt-4 mr-6">-$390.00</p>
                  <p className="mt-4 mr-6">-$450.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="ml-4 mt-3 font-semibold text-lg">Invoices</p>
            <div className="border-b-2 border-lslate ml-6 mr-8 pb-3">
              <div className="flex flex-row ml-4 mt-2 text-sm ">
                <p className="ml-2">ID</p>
                <p className="ml-24">Order</p>
                <p className="ml-24">Created</p>
                <p className="ml-24">Due to</p>
                <p className="ml-24">Receiver</p>
                <p className="ml-44">Amount</p>
                <p className="ml-24">Status</p>
              </div>
            </div>
            <div className="border-b-2 border-lslate ml-6 mr-8 pb-5">
            <div className="flex flex-row ml-4 mt-4 text-xs ">
                <p className="ml-2 text-lgrey">623-257</p>
                <p className="ml-16 mr-2 text-lgrey">1232545</p>
                <p className="ml-20 font-semibold">12Aug2024</p>
                <p className="ml-20 font-semibold text-red-400">18Aug2024</p>
                <div className="ml-16 flex flex-row">
                  <img 
                  src="\images.jpg"
                  alt="blank image" 
                  className=" w-8 rounded-full mr-1" 
                  />
                  <div>
                    <p className="text-sm font-semibold">Cameron Williamson</p>
                    <p className="text-xs">Manager</p>
                  </div>
                </div>
                <p className="ml-20 mr-1 font-semibold">$1600.00</p>
                <p className="ml-24 font-mono text-sm mr-2">paid</p>
                <button className="ml-14 py-2 px-5 border-lgrey border-2 rounded-xl font-semibold bg-lorange">Pay</button>
                <button className="bg-slate-200 rounded-full p-2 ml-12"><IoCloudDownloadOutline /></button>
              </div>
            </div>
            <div className="border-b-2 border-lslate ml-6 mr-8 pb-3">
              <div className="flex flex-row ml-4 mt-4 text-xs ">
                <p className="ml-2 text-lgrey">323-257</p>
                <p className="ml-16 text-lgrey">589365</p>
                <p className="ml-24 font-semibold">11Aug2024</p>
                <p className="ml-20 font-semibold">20Aug2024</p>
                <div className="ml-16 flex flex-row">
                  <img 
                  src="\images.jpg"
                  alt="blank image" 
                  className=" w-8 rounded-full mr-1" 
                  />
                  <div>
                    <p className="text-sm font-semibold">Leslie Alexander</p>
                    <p className="text-xs">Designer</p>
                  </div>
                </div>
                <p className="ml-28 font-semibold">$2400.00</p>
                <p className="ml-24 font-mono text-sm">paid</p>
                <button className="ml-16 py-2 px-4 border-lgrey border-2 rounded-xl font-semibold">View</button>
                <button className="bg-slate-200 rounded-full p-2 ml-12"><IoCloudDownloadOutline /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}