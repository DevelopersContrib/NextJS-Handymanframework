"use client"
import Nav from 'react-bootstrap/Nav';

const HeaderForm = ({background}) => {
  return (
    <>
      <div className="tw-pt-24 lg:tw-min-h-[600px] tw-bg-cover tw-bg-center tw-relative tw-flex tw-w-full tw-items-center tw-flex-col" style={{ backgroundImage: `url('${background}')` }}>
        <div className="tw-bg-[rgba(17,17,17,0.45)] tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-right-0"></div>
        <div className="container text-center tw-relative tw-text-white tw-flex tw-h-full tw-flex-1">
          <div className="row tw-w-full">
            <div className="col-xl-12">
              hello
            </div>
          </div>
        </div>
        <div className="container tw-mt-auto tw-relative tw-text-white">
          <div className="row">
            <div className="col-xl-12 text-center">
              <Nav variant="tabs" activeKey="tab-1">
                <Nav.Item>
                  <Nav.Link eventKey="tab-1">Option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-2">Option 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderForm