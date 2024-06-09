
import coffeeImage from '../../../public/images/more.webp'; 
import coffee2 from '../../../public/images/coffee2.jpeg'

const More = () => {
    return (
        <div> 
            <div className='lg:flex  lg:items-center py-4 bg-blue-950 '>
            <img className=' w-[300px] px-3 mx-auto ' src={coffeeImage} alt="Coffee"  />
            <p className='text-white px-3 lg:px-0'>
                Enjoy a cup of freshly brewed coffee to start your day right. Whether it's a rich espresso or a creamy latte, 
                there's nothing like the aroma of coffee to awaken your senses and boost your energy.
            </p>
            </div>
            {/* coffee 2 */}
            <div className='lg:flex lg:items-center  bg-blue-950 mb-7'>
            <img className='lg:px-20 lg:w-[500px] h-[300px] ' src={coffee2} alt="Coffee" />
            <p className='text-white px-3 lg:px-0'>
            "Robusta" refers to a species of coffee plant (Coffea canephora) known for its strong flavor and high caffeine content. Robusta beans are commonly used in espresso blends and instant coffee due to their bold and bitter flavor profile.
            </p>
            </div>
            
        </div>
    );
};

export default More;
