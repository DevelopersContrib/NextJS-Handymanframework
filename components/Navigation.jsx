import Link from 'next/link';

export default function Navigation() {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-custom">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsHandyman" aria-controls="navbarsHandyman" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsHandyman">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="nav-link"><a id="_contactus" href="javascript:;" data-toggle="modal" data-target="#form-container" class="text-capitalize">Contact Us</a></li>	
                    <li className="nav-link">
                        <Link href="/referral">Referrals</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/apps">Apps</Link>
                    </li>						
                    <li className="nav-link">
                        <Link href="/postproject">Post a Project</Link>
                    </li>
                </ul>    
            </div>
        </nav>
    )
}