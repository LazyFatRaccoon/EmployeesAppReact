import './app-info.css';
const AppInfo = ({ numberOfEmploeeWithBonus, totalNumberOfEmployees }) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in my company</h1>
            <h2>Total number of employees:  {totalNumberOfEmployees}</h2>
            <h2>Bonus will get: {numberOfEmploeeWithBonus}</h2>
        </div>
    )
}

export default AppInfo;