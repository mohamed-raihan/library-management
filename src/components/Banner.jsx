import "../style/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner-row d-flex justify-content-evenly align-items-center w-100 pt-5">
                    <div className="d-flex flex-column align-items-center banner-content mt-5 px-5">
                        <h1 className="banner-heading">Buy and Sell your textbooks books for best price</h1>
                        <p className="banner-paragraph mt-3">
                            From applied literature to educational services, we had a lot of textbooks to offer you.
                            We provide only the best books for rent.
                        </p>
                        <div className="d-flex mt-3 justify-content-start w-100 gap-2">
                            <input type="text" className="banner-form-control" placeholder="Search for ISBN Number" />
                            <button className="btn btn-success px-5">Search</button>
                        </div>
                    </div>
                    {/* Need to add Tinder swiper animation */}
                    <div className="d-flex banner-image">
                        <img src="https://www.writersdigest.com/.image/t_share/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg" alt="book-cover" width="35%" style={{ borderRadius: "25px" }} />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="banner-down-button d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>

        </>
    )
}

export default Banner