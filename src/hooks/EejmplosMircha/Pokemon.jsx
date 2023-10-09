export default function Pokemon({avatar,name}){

    return(
        <figure>
            {console.log('hola')}
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}