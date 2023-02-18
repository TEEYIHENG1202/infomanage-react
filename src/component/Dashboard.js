import { useContext } from "react";
function Dashboard({UserContext})
{
    const user = useContext(UserContext);
    var total = user.blackList.length + user.whiteList.length;
    var wPercentage = (user.whiteList.length/total)*100;
    var bPercentage = (user.blackList.length/total)*100;
    var numberUser = user.infos.filter(info=> {return info.role==="User"}).length;
    var numberManager = user.infos.filter(info=> {return info.role==="Manager"}).length;
    var mPercentage = (user.infos.filter(info=> {return info.role==="Manager"}).length)/user.infos.length;
    var uPercentage = (user.infos.filter(info=> {return info.role==="User"}).length)/user.infos.length;

    return (<>
    <div className="dashboardContainer">
        <h1>Dashboard</h1>
        <div className="dashboard">
            <div className="white">
                <h2>WhiteList</h2>
                <div>
                    {user.whiteList.length}
                </div>
            </div>
            <div className="black">
                <h2>BlackList</h2>
                <div>
                    {user.blackList.length}
                </div>
            </div>
            <div className="user">
                <h2>User</h2>
                <div>
                    {user.infos.length}
                </div>
            </div>
        </div>
        <div className="percentage">
            <div className="WBPercentage">
                <h2>List Percentage</h2>
                <ul>
                    <li>Total of whiteList and blackList is {total}</li>
                    <li>Number of whiteList is {user.whiteList.length}</li>
                    <li>Number of blackList is {user.blackList.length}</li>
                    <li>Percentage of whiteList is {wPercentage.toFixed(2)}%</li>
                    <li>Percentage of blackList is {bPercentage.toFixed(2)}%</li>
                </ul>
            </div>
            <div className="userPercentage">
                <h2>User Percentage</h2>
                <ul>
                    <li>Total of User(Manager and User) is {user.infos.length}</li>
                    <li>Number of Manager is {numberManager}</li>
                    <li>Number of User is {numberUser}</li>
                    <li>Percentage of Manager is {mPercentage.toFixed(2)}%</li>
                    <li>Percentage of User is {uPercentage.toFixed(2)}%</li>
                </ul>
            </div>
        </div>
    </div>
    </>);
}

export default Dashboard;