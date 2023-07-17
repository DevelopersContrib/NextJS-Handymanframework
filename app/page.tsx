import HeaderWidget from '../components/HeaderWidget';
import Navigation from '../components/Navigation';
import { getData, getDomain } from '../lib/data';

export default async  function Home() {
  const c = await getData();
  const domain = getDomain();
  const background = c.data.background_url!==undefined && c.data.background_url!==null?c.data.background_url:'https://cdn.vnoc.com/background/bg-handyman1.png';

  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
			<div className="section1"  style={{ backgroundImage: `url('${background}')` }}>
				<Navigation />
				<div className="bg-overlay"></div>
				<div className="container text-center project">
					<div className="row justify-content-center">
						<div className="col-md-8">
							
							<div id="estimate_display" className="row content-menu active">
								<div className="col-md-12">
									<h1>
										Get an Estimate!
									</h1>
								</div>
								<div className="col-md-12 form-project">
									<div className="input-group">
										<select name="proj_types" id="proj_types" className="custom-select custom-select-lg border-0">
											<option value="0">Project Type</option>
											<option value="65">Add Attic space</option>
											<option value="66">Aluminum or Steel Fence - Install</option>
											<option value="69">Appliance - Repair</option>
										</select>
										<input type="text" className="form-control form-control-lg border-top-0 border-right-0 border-bottom-0" placeholder="ZIP" id="zipcodes2" />
										<div className="input-group-append">
											<a href="#" id="estiredirect" className="btn btn-primary btn-lg"><b>Go!</b></a>
										</div>
									</div>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    
  )
}
