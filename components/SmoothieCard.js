export default function SmoothieCard ({ smoothie }){
    return(
        <div className="smothie-card">
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <div className="rating">{smoothie.rating}</div>
        </div>
    )
}