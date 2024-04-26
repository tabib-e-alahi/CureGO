import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GetAppIcon from '@mui/icons-material/GetApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Promotion = () => {
    return (
        <div className="">
            <div className="flex justify-evenly items-center bg-gray-200 py-4 text-slate-900 text-lg">
                <p className='flex items-end gap-1'><LocalShippingIcon />Free Delivery</p>
                <p className='flex items-end gap-1'><DiscountIcon/>15% Save on First 2 order</p>
                <p className='flex items-end gap-1'><FlashOnIcon/>Flash Sale</p>
                <p className='flex items-end gap-1'><GetAppIcon/>Download Our App</p>
                <p className='flex items-end gap-1'><PersonAddIcon/>Refer a Friend,save 5% </p>
            </div>
            <div className="bg-gray-400 font-medium text-center py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem id quos, animi non reprehenderit! Saepe, itaque vitae! Magni, illo!
        </div>
        </div>
    );
};

export default Promotion;