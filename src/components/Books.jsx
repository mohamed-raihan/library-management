
function Books() {
    return (
        <>
            <div className="books-card">
                <img src="https://offtheshelf.b-cdn.net/app/uploads/2019/12/Normal-People.jpg" alt="" />
                <div className="books-details">
                    <div className="d-flex justify-content-between align-items-center px-3 py-3">
                        <p className="books-card-content">Book name</p>
                        <p className="text-success books-card-content ">Price</p>
                    </div>
                    <div className="px-3">
                        <p className="books-card-content">Author Name</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books