import React from 'react'

const Categories = () => {
    return (
        <>
            <div className='container-fluid p-5'>
                <div className="card-group">
                    <div className="card">
                        <img src="./images/cat_accessories.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Accessories</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/cat_mobiles.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mobiles & Smartphones</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/cat_laptops.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Laptops & Computers</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/cat_gaming.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Gaming Consoles</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories