import { useNavigate} from "react-router-dom"

const Page1 = () => {
    const navigate = useNavigate();


    return (
        <div>
            Page1
            <button
                onClick={() => navigate('page2')}
            >
                Go to Page2
            </button>
            <button
                onClick={() => navigate('page3')}
            >
                Go to Page3
            </button>
        </div>
    )
}

export default Page1 
