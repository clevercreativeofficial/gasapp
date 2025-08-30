const Footer = () => {

    // Copyright year
    const year = new Date().getFullYear()
  
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
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </div>
                <small className="text-[12px] text-foreground/50"> GasApp &copy; {year}, All Rights Reserved</small>
            </div>
        </footer>
        
    )
  }
  
  export default Footer