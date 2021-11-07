import {useNavigate} from 'react-router-dom'

const Page2 = () => {
    const navigate = useNavigate()
    return (
        <div>
            Page2
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default Page2
