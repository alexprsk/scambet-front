
export default function Carousel({src}) {
  return (

    <div className="flex-1 ml-3">
      <img src={src} className="w-full h-full object-cover rounded-xl shrink-0"></img>
    </div>
  );
}