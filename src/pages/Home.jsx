import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import BestSeller from "../components/BestSeller"
import Books from "../components/Books"
import Review from "../components/Review"
import "../style/Home.css"

function Home() {
    return (
        <div className="home">
            <Banner />
            {/* Need to add animation */}
            <div className="mt-5" id="Best-Seller">
                <BestSeller />
            </div>

            <div className="d-flex justify-content-evenly align-items-center mb-5" style={{ backgroundColor: "#e9e6dd", height: "300px", marginTop: "10rem" }}>
                <div className="home-award-book-content">
                    <h1 className="home-award-book-heading">2021 national award for fiction book list</h1>
                    <Link to={'/admin'}><button className="btn btn-success px-5 py-2 mt-3">Shop</button></Link>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2019/11/A-single-thread.jpg" height={"250px"} alt="" />
                </div>
            </div>

            <div className="home-other-book-heading">
                <h1 className="text-center">Other Books</h1>
                <div className="d-flex justify-content-evenly align-items-center my-5">
                    <Books />
                    <Books />
                    <Books />
                    <Books />
                </div>

            </div>

            <div className="customer-review my-5">
                <h1 className="text-center customer-review-heading">Our Customers</h1>
                <div className="d-flex justify-content-center gap-5 mt-5 align-items-center">
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>

            {/* More Books */}
            <div className="d-flex justify-content-center gap-3 align-items-center my-5 more-books" >
                <div className="d-flex justify-content-evenly align-items-center more-books-contents" style={{ backgroundColor: "#edefec" }}>
                    <div className="more-books-image">
                        <img src="https://c4.wallpaperflare.com/wallpaper/795/342/555/women-books-reading-wallpaper-preview.jpg" width="100%" alt="" />
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center" >
                        <h1 className="more-books-heading text-center mb-5">We provide you the experiance</h1>
                        <p className="more-books-paragraph text-center">Browse the collection of our best selling and top intreseting product.</p>
                        <button className="btn btn-success px-5 py-2 mt-3">See our products</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home