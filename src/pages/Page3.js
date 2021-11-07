import { Link, Outlet } from "react-router-dom"

const Page3 = () => {
    return (
        <div>
            Page3 

            <Link to=".." >Page 1</Link>
            <Link to="page1" >Page 2</Link>
            <Link to="page2" >Page 3</Link>

            <hr />

            <Outlet />
        </div>
    )
}

export default Page3
