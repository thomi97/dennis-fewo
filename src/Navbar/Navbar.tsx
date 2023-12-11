
import logo from './logo.png';
import EmailIcon from '@mui/icons-material/Email';

export const Navbar = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-transparent flex flex-row justify-center w-[1058px] h-[81px] relative border-2 border-white rounded-3xl">
        <div className="bg-transparent flex flex-row justify-center w-full">
          <div className="bg-[url(navbar.svg)] bg-[100%_100%] w-[1058px] h-[81px] relative">
            <div className="absolute top-[25px] left-[71px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
              vacamas
            </div>
            <img className="absolute w-[39px] h-[39px] top-[21px] left-[21px] object-cover" alt="Logo" src={logo} />
            <div className="absolute top-[25px] left-[262px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[24px] tracking-[0] leading-[normal]">
              Wohnungen
            </div>
            <div className="absolute top-[25px] left-[424px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[24px] tracking-[0] leading-[normal]">
              Terminfinder
            </div>
            <div className="absolute top-[25px] left-[593px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[24px] tracking-[0] leading-[normal]">
              Leistungen
            </div>
            <EmailIcon className="absolute top-[15px] right-[21px] font-light text-white tracking-[0] leading-[normal]" style={{ fontSize: '50px' }} />
          </div>
        </div>
      </div>
    </div>
  );

};