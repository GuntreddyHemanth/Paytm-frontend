import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { User } from "../components/User"


export const Dashboard = () => {
    return(
        <div>
            <Appbar/>
            <div className="mt-8 ml-5">
                <Balance value={"10,000"}/>
                <User/>
            </div>
        </div>
    )
}