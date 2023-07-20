import Navigation from "@/components/includes/Navigation"
import Footer from "@/components/includes/Footer"

const page = () => {
  const background = 'https://cdn.vnoc.com/background/bg-handyman1.png';
  const domain = 'javapoint.com';
  const fb_url = 'facebook.com';
  const twitter_url = 'twitter.com';
  const linkedin_url = 'linkedin.com';
  return (
    <>
      <Navigation bgNavbar="tw-bg-[#333]" />
      <section className="tw-mt-[56px]">
        <div className="page-container tw-py-8 tw-text-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h1>Post a Project</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer domain={domain} fb_url={fb_url} twitter_url={twitter_url} linkedin_url={linkedin_url} />
    </>
  )
}

export default page