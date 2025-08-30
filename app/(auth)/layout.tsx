import Image from "next/image"
import "../globals.css";
import { assets } from "@/public/assets"
import Container from "@/components/container"

export const metadata = {
  title: "GasApp - Auth",
};

export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Container>
      <div className='flex md:flex-row flex-col justify-between items-center z-20'>
        <div className='md:block hidden'>
          <Image src={assets.auth_image} width={1000} height={1000} alt="Auth Image" />
        </div>
        {children}
      </div>
      <footer>
        <div className="flex sm:flex-row flex-col justify-between gap-4 border-t border-secondary py-5">
          <div className="text-[12px] text-foreground/50">
            <ul className='flex gap-4'>
              <li><a href="">English(US)</a></li>
              <li><a className='disabled'>Privacy</a></li>
              <li><a className='disabled'>Terms</a></li>
              <li><a className='disabled'>Cookies</a></li>
            </ul>
            <ul className='flex gap-4'>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Help</a></li>
            </ul>
          </div>
          <small className="text-[12px] text-foreground/50"> Yoonda &copy; {new Date().getFullYear()}, All Rights Reserved</small>
        </div>
      </footer>
    </Container>
  );
}


