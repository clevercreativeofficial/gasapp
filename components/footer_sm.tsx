const Footer = () => {

    return (
        <footer>
            <div className="flex flex-col gap-4 border-t border-secondary pt-5">
                <div className="text-[12px] text-foreground/50">
                    <ul className='flex gap-4'>
                        <li><a href="">English(US)</a></li>
                        <li><a className='disabled'>Privacy</a></li>
                        <li><a className='disabled'>Terms</a></li>
                        <li><a className='disabled'>Cookies</a></li>
                    </ul>
                    <ul className='flex gap-4'>
                        <li><a href="" className="hover:text-foreground/60">About</a></li>
                        <li><a href="" className="hover:text-foreground/60">Contact</a></li>
                        <li><a href="" className="hover:text-foreground/60">Help</a></li>
                    </ul>
                </div>
                <small className="text-[12px] text-foreground/50"> GasApp &copy; {new Date().getFullYear()}, All Rights Reserved</small>
            </div>
        </footer>
        
    )
  }
  
  export default Footer