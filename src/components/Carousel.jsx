import MingPic from '../assets/ming.png'

export default function Carousel() {
    return (
        
        <div className="flex-1">
          <img src= {MingPic} className="w-full h-full object-cover rounded-xl"></img>
        </div>
    );
}