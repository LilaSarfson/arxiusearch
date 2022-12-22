export default function HandleError (props){
    return(
        <>
            <p className='text-red-500 underline'>{props.error}</p>
        </>
    )
}