import AproposFront from'../../assets/image/AproposFront.png'
import '../../Sass/pages/Home.scss';
import DropDown from'../../components/DropDown/dropdown'

function APropos(){
    return(
        <div className='displayHome'>
        <span className='displayHomeFront'>
        <img src={AproposFront} alt='A-proposfront'className='HomeFrontPicture'></img>
        </span>
        <span className='DisplayDropDown'>
            <DropDown />
        </span>
        
    </div>
        
    )
}
export default APropos