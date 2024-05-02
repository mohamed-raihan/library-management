import Books from "./Books"

function BestSeller() {
    return (
        <>
            <h1 className="text-center best-seller-heading">Best seller Books</h1>
            {/* Make this scrollable */}

            <div className="d-flex justify-content-evenly align-items-center my-5 ">
                <Books />
                <Books />
                <Books />
                <Books />
            </div>
        </>
    )
}

export default BestSeller