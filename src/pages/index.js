import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Navigations from "@/components/navigations";
import Footer from "@/components/footer";

const inter = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Navigations />

      <div className="md:flex flex-row justify-between">
        <div className="">
          <div className="flex  mt-12 gap-[12px] px-[20px] sm:px-[50px]">
            <h4 className="font-[700] text-[35px] leading-[47.25px] text-[#3D3D3D]">Senior Product Designer</h4>
            <div className="w-1 h-1 border-2 rounded-full mt-2 border-[#D1D1D1]"></div>
            <p className="text-[#888888] font-[500] text-[14px] leading-[18.19px]">posted 2 days ago</p>
            <div className="flex h-6 bg-[#ECFDF3] border-[#ABEFC6] border-[1px] font-[500] text-[14px] leading-[18.19px] gap-1 px-2 rounded-full">
              <div className="w-1 h-1 border-2 rounded-full mt-2 border-[#067647]"></div>
              <p className="text-[#067647]">open</p>
            </div>
          </div>

          <div className="flex my-8 px-[20px] sm:px-[50px]">
            <Image src='/location-icon.png' className="w-6 h-6" width={24} height={24} alt="location Icon" />
            <h6 className="pl-4 font-[500] text-[16px] sm:text-[20px] leading-[27px] text-[#5D5D5D] ">Delaware, USA</h6>
            <Image src='/coins-stacked.png' className=" ml-8 w-6 h-6" width={24} height={24} alt="location Icon" />
            <h6 className="pl-4 font-[500] text-[16px] sm:text-[20px] leading-[27px] text-[#5D5D5D] ">$300k-$400k </h6>
          </div>
          <div className="border-y-[1px] border-[#E7E7E7] py-6" >
            <div className="grid md:grid-cols-4 px-[50px] gap-x-12 space-y-3">
              <div className="space-y-2">
                <h6 className="text-[14px] font-[500] leading-[18.9px] text-[#6E6D6D]">Skills Required</h6>
                <button className="flex border-[1px] cursor-text pr-2 border-[#D0D5DD] gap-1 rounded-sm  place-items-center">
                  <Image src='/figma.png' width={24} height={24} alt="Figma" />
                  <h6 className="font-[500] text-[12px] leadind-[16.2] ">Figma</h6>
                </button>
                <button className="flex border-[1px] md:px-1 cursor-text border-[#D0D5DD] gap-1 rounded-sm  place-items-center">
                  <Image src='/adobe-illustrator.png' width={24} height={24} alt="Adobe Illustrator" />
                  <h6 className="font-[500] text-[12px] leadind-[16.2] ">Adobe Illustrator</h6>
                </button>
                <button className="flex border-[1px] cursor-text border-[#D0D5DD] gap-1 rounded-sm  place-items-center px-1">
                  <Image src='/adobe-xd.png' width={24} height={24} alt="Adobe XD" />
                  <h6 className="font-[500] text-[12px] leadind-[16.2] ">Adobe XD</h6>
                </button>
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-[500] leading-[18.9px] text-[#6E6D6D]">Preferred Language</h6>
                <h6 className="text-[#3D3D3D] font-[600] text-4">English</h6>
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-[500] leading-[18.9px] text-[#6E6D6D]">Type</h6>
                <h6 className="text-[#3D3D3D] font-[600] text-4">Full time</h6>
              </div>
              <div className="space-y-2">
                <h6 className="text-[14px] font-[500] leading-[18.9px] text-[#6E6D6D]">Years of Experience</h6>
                <h6 className="text-[#3D3D3D] font-[600] text-4">3+ Years of Experience</h6>
              </div>

            </div>
          </div>
          <div className="px-[50px] py-6">
            <h6 className="text-[#6E6D6D] font-[500] leading-[18.9px] text-[14px] ">About the job</h6>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">1. Handle the UI/UX research design </p> 
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">2. Work on researching on latest web applications designs & trends</p>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">3. Work on conceptualizing and visualizing</p>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">4. Work on creating graphics content and other graphic related works</p>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">Benefits:</p>
            <ul className="list-disc ml-6">
              <li className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px]">Health insurance</li>
              <li className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px]">Provident Fund</li>
            </ul>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">Schedule:</p>
            <ul className="list-disc ml-6">
              <li className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px]">Day shift</li>
            </ul>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">Supplemental pay types:</p>
            <ul className="list-disc ml-6">
              <li className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px]">Performance bonus</li>
              <li className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px]">Yearly bonus</li>
            </ul>
            <p className="text-[#3D3D3D] font-[500] text-[16px] leading-[28px] ">Work Location: In person</p>
              
          </div>
          
        </div>
        <div className="border-[#E7E7E7] border-[1px] md:min-h-screen py-7">
          <div className="flex gap-x-4  px-5">

            <div className="border-[#DC4A2D] bg-[#FEF4F2] rounded-[8px] border-[0.8px] flex justify-center gap-x-2 px-3 md:w-[172px] py-3 ">
              <Image src="/delete-icon.png" width={20} height={20} alt="Delete Icon" />
              <h5 className="text-[#DC4A2D] ">Delete job</h5>
            </div>
            <div className="bg-[#DC4A2D]  rounded-[8px] border-[0.8px] flex justify-center gap-x-2 px-4 py-3 md:w-[172px]">
              <Image src="/edit-icon.png" width={20} height={20} alt="Delete Icon" />
              <h5 className="text-[#FFFFFF] ">Edit job</h5>
            </div>
          </div>
          <table className="table-auto w-full">

            <tbody>
              <tr>
                <td className="flex mt-8 pl-6">
                  <Image className="w-5 h-5" src='/applicants-icon.png' width={20} height={20} alt="Applicants Icon" />
                  <span className="font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] pl-2">Applicants</span>
                </td>
                <td className="font-[600] text-[20px] leading-[27px] text-[#3D3D3D] pt-8 ">400</td>
              </tr>
              <tr>
                <td className="flex mt-8 pl-6">
                  <Image className="w-5 h-5" src='/maches-icon.png' width={20} height={20} alt="Matches Icon" />
                  <span className="font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] pl-2">Matches</span>
                </td>
                <td className="font-[600] text-[20px] leading-[27px] text-[#3D3D3D] pt-8 ">100</td>
              </tr>
              <tr>
                <td className="flex mt-8 pl-6">
                  <Image className="w-5 h-5" src='/messages-icon.png' width={20} height={20} alt="Messages Icon" />
                  <span className="font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] pl-2">Messages</span>
                </td>
                <td className="font-[600] text-[20px] leading-[27px] text-[#3D3D3D] pt-8 ">147</td>
              </tr>
              <tr>
                <td className="flex mt-8 pl-6">
                  <Image className="w-5 h-5" src='/eye-icon.png' width={20} height={20} alt="Views Icon" />
                  <span className="font-[500] text-[16px] leading-[21.6px] text-[#4F4F4F] pl-2">Views</span>
                </td>
                <td className="font-[600] text-[20px] leading-[27px] text-[#3D3D3D] pt-8 ">800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
