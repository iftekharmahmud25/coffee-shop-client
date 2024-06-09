const DetailsCoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <div className="card w-96 bg-blue-950 text-white shadow-xl">
                <figure><img className="p-7  h-[200px]" src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className=" text-center">
                        {name}
                
                    </h2>
                       
                    
                    </div> <h1  className="text-center">Price : $20</h1>
                    <div className="flex justify-center py-3">
                         <button className="btn success">Pay Now</button>
                    </div>

               
            </div>
        </div>
    );
};

export default DetailsCoffeeCard;
