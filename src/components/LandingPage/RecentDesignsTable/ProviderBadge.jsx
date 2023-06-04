const ProviderBadge = (props) => {
    return <>
        <span className="border badge rounded-circle mx-1 py-2">
            <img src={props.image} height={20} width={20} alt="badge" ></img>
        </span>
    </>
}

export default ProviderBadge